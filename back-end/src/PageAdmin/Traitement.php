<?php
use Boutique\Controller\Controller;

$newProduit = new Controller(); 

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (is_null($data)) {
    $data = $_POST;
}

//  détecte un vrai GET 
if (empty($json) && empty($_POST)) {
    echo $newProduit->getProduits();
    exit;
}

if (!isset($data['nom'], $data['description'], $data['prix'], $data['categorie'])) {
    echo json_encode(['error' => 'Tous les champs sont requis']);
    exit;
}

$nom = htmlspecialchars(trim($data['nom']));
$description = htmlspecialchars(trim($data['description']));
$prix = htmlspecialchars(trim($data['prix']));
$categorie = htmlspecialchars(trim($data['categorie']));

echo $newProduit->addProduit($nom, $description, $prix, $categorie);
