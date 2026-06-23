<?php
require_once __DIR__ . '/../../back-end/vendor/autoload.php';

header('Content-Type: application/json');

// Charge le .env
$env = parse_ini_file(__DIR__ . '/../../back-end/Config/.env');

// Connexion à la base de données
try {
    $pdo = new PDO(
        "mysql:host={$env['DB_HOST']};dbname={$env['DB_NAME']};charset=utf8",
        $env['DB_USER'],
        $env['DB_PASSWORD']
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Connexion base de données impossible.']);
    exit;
}

// Connexion à Stripe
\Stripe\Stripe::setApiKey($env['STRIPE_SECRET_KEY']);

// Récupère le panier envoyé en JSON par le JS
$data = json_decode(file_get_contents('php://input'), true);
$panier = $data['cart'] ?? [];

if (empty($panier)) {
    http_response_code(400);
    echo json_encode(['error' => 'Panier vide.']);
    exit;
}

// Calcule le VRAI montant à partir des prix en base (jamais confiance au JS)
$montantEnCentimes = 0;

foreach ($panier as $item) {
    $id = (int) ($item['id'] ?? 0);
    $quantite = max(1, (int) ($item['quantite'] ?? 1));

    if ($id <= 0) continue;

    $stmt = $pdo->prepare("SELECT prix FROM Produits WHERE id_produits = ?");
    $stmt->execute([$id]);
    $produit = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$produit) continue;

    $montantEnCentimes += round($produit['prix'] * 100) * $quantite;
}

if ($montantEnCentimes <= 0) {
    http_response_code(400);
    echo json_encode(['error' => 'Montant invalide.']);
    exit;
}

// Crée le PaymentIntent Stripe
try {
    $paymentIntent = \Stripe\PaymentIntent::create([
        'amount' => $montantEnCentimes,
        'currency' => 'eur',
        'automatic_payment_methods' => ['enabled' => true],
    ]);

    echo json_encode([
        'clientSecret' => $paymentIntent->client_secret,
        'amount' => $montantEnCentimes,
        'publicKey' => $env['STRIPE_PUBLIC_KEY'], // renvoyé directement, pas besoin d'un 2e fichier PHP
    ]);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}