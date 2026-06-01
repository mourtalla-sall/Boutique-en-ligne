<?php

use Boutique\Controller\Controller;

header('Content-Type: application/json');
require_once(__DIR__ . '/../../back-end/vendor/autoload.php');

$newProduit = new Controller();

/* -------------------------
   GET CATEGORIES
--------------------------*/
if (isset($_GET['action']) && $_GET['action'] === 'getCategories') {
    echo json_encode($newProduit->getCategories());
    exit;
}

/* -------------------------
   GET PRODUITS
--------------------------*/
if (isset($_GET['id'])) {
    echo $newProduit->getById($_GET['id']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo $newProduit->getProduits();
    exit;
}

/* -------------------------
   VALIDATION POST
--------------------------*/
if (!isset($_POST['nom'], $_POST['description'], $_POST['prix'], $_POST['categorie'])) {
    echo json_encode(['status' => 'error', 'message' => 'Champs manquants']);
    exit;
}

$nom = htmlspecialchars(trim($_POST['nom']));
$categorie = htmlspecialchars(trim($_POST['categorie']));
$prix = htmlspecialchars(trim($_POST['prix']));
$description = htmlspecialchars(trim($_POST['description']));

/* -------------------------
   IMAGE
--------------------------*/
if (!isset($_FILES['image'])) {
    echo json_encode(['status' => 'error', 'message' => 'Image manquante']);
    exit;
}

$nomFichier = basename($_FILES['image']['name']);

$destination = __DIR__ . '/../../../Front-end/public/images/' . $nomFichier;

if (!move_uploaded_file($_FILES['image']['tmp_name'], $destination)) {
    echo json_encode(['status' => 'error', 'message' => 'Upload échoué']);
    exit;
}

/* -------------------------
   AJOUT PRODUIT
--------------------------*/
$newProduit->addProduit(
    $nom,
    $description,
    $prix,
    $categorie,
    $nomFichier
);

/* -------------------------
   RESPONSE UNIQUE
--------------------------*/
echo json_encode([
    'status' => 'success',
    'message' => 'Produit ajouté avec succès',
    'image' => $nomFichier
]);
var_dump($newProduit->getProduits());
exit;