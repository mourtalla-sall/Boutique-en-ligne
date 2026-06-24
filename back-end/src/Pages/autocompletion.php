<?php
require_once 'back-end/src/Database/Database.php';
if(isset($_GET['query'])){
$motTape = $_GET['query'];
$recherche = $motTape . '%';
$database = Boutique\Database\Database::getInstance();
$pdo = $database->getConnexion();
$stmt = $pdo->prepare("SELECT * FROM Produits WHERE nom LIKE :search LIMIT 5");
$stmt->execute([
    'search' => $recherche
]);
$produits = $stmt->fetchAll(PDO::FETCH_ASSOC);


    echo json_encode($produits);

}


?>
