<?php

use Boutique\Controller\Controller;

header('Content-Type: application/json');

require_once __DIR__ . '/../../vendor/autoload.php';

$newProduit = new Controller();

// GET catégories
if (isset($_GET['action']) && $_GET['action'] === 'getCategories') {
    echo json_encode($newProduit->getCategories());
    exit;
}

// GET produits
if (empty($_POST)) {
    echo json_encode($newProduit->getProduits());
    exit;
}

// validation
if (!isset($_POST['nom'], $_POST['description'], $_POST['prix'], $_POST['categorie'])) {
    echo json_encode(['error' => 'Tous les champs sont requis']);
    exit;
}

$nom = htmlspecialchars(trim($_POST['nom']));
$categorie = htmlspecialchars(trim($_POST['categorie']));
$prix = htmlspecialchars(trim($_POST['prix']));
$description = htmlspecialchars(trim($_POST['description']));

// IMAGE
if (!isset($_FILES['image'])) {
    echo json_encode(['error' => 'Image manquante']);
    exit;
}

$nomFichier = basename($_FILES['image']['name']);
$destination = __DIR__ . '/../../../Front-end/public/images/' . $nomFichier;
if (!move_uploaded_file($_FILES['image']['tmp_name'], $destination)) {
    echo json_encode(['error' => 'Upload image échoué']);
    exit;
}

// INSERT
$result = $newProduit->addProduit(
    $nom, $description, $prix, $categorie, $nomFichier
);

echo json_encode([
    'status'  => 'success',
    'message' => 'Produit ajouté avec succès !',
    'image'   => $nomFichier
]);

// Et pour les erreurs, remplacez tous vos json_encode d'erreur par :
echo json_encode([
    'status'  => 'error',
    'message' => 'Tous les champs sont requis' 
]);
exit;