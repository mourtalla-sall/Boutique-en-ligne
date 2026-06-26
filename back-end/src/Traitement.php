<?php

use Boutique\Controller\Controller;

header('Content-Type: application/json');
require_once(__DIR__ . '/../vendor/autoload.php');

$newProduit = new Controller();


if (isset($_GET['action']) && $_GET['action'] === 'getCategories') {
    echo json_encode($newProduit->getCategories());
    exit;
}

if (isset($_GET['action']) && $_GET['action'] === 'stats') {
    echo json_encode($newProduit->getStats()); 
    exit;
}
// DELETE produit
if (isset($_GET['action']) && $_GET['action'] === 'delete' && isset($_GET['id'])) {
    $newProduit->deleteProduit();
    echo json_encode(['status' => 'success', 'message' => 'Produit supprimé']);
    exit;
}

// GET un produit par id
if (isset($_GET['id']) && empty($_POST)) {
    echo $newProduit->getById($_GET['id']);
    exit;
}
// GET produits
if (empty($_POST)) {
    // var_dump($newProduit->getProduits());
    echo ($newProduit->getProduits());
    exit;
}

// validation

if (isset($_GET['id'])) {
    echo $newProduit->getById($_GET['id']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo $newProduit->getProduits();
    exit;
}

$nom = htmlspecialchars(trim($_POST['nom']));
// ADD categorie
if (isset($_GET['action']) && $_GET['action'] === 'addCategorie') {
    $AddCategorie = $newProduit->addCategorie($nom);
    echo $AddCategorie;
    exit;
}
if (isset($_GET['action']) && $_GET['action'] === 'getCategorie' && isset($_GET['id'])) {
    $id = (int) $_GET['id'];
    echo json_encode($newProduit->getCategorieById($id));
    exit;
}

if (!isset($_POST['nom'], $_POST['description'], $_POST['prix'], $_POST['categorie'])) {
    echo json_encode(['status' => 'error', 'message' => 'Champs manquants']);
    exit;
}

$nom = htmlspecialchars(trim($_POST['nom']));
$categorie = htmlspecialchars(trim($_POST['categorie']));
$prix = htmlspecialchars(trim($_POST['prix']));
$quantite = htmlspecialchars(trim($_POST['quantite']));
$description = htmlspecialchars(trim($_POST['description']));



if (!isset($_FILES['image'])) {
    echo json_encode(['status' => 'error', 'message' => 'Image manquante']);
    exit;
}

$nomFichier = basename($_FILES['image']['name']);


 $destination = __DIR__ . '/../../Front-end/public/images/' . $nomFichier;
if (!move_uploaded_file($_FILES['image']['tmp_name'], $destination)) {
    echo json_encode(['status' => 'error', 'message' => 'Upload échoué']);
    exit;
}
// UPDATE si id en POST
if (isset($_POST['id']) && !empty($_POST['id'])) {
    $id = (int) $_POST['id'];
    $UpdateProduct = $newProduit->updateProduits($id, $nom, $description, $prix,$quantite, $categorie, $nomFichier);
    echo $UpdateProduct;
    exit;
}


// ADD sinon
$AddProduct = $newProduit->addProduit(
    $nom, $description, $prix, $quantite, $categorie, $nomFichier
);
echo $AddProduct;
exit;



// Et pour les erreurs, remplacez tous vos json_encode d'erreur par :
echo json_encode([
    'status'  => 'success',
    'message' => 'Produit ajouté avec succès !',
    'image'   => $nomFichier
]);

$newProduit->addProduit(
    $nom,
    $description,
    $prix,
    $quantite,
    $categorie,
    $nomFichier
);


var_dump($newProduit->getProduits());
exit;
