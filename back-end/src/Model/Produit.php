<?php

namespace Boutique\Model;

use Boutique\Database\Database;

use \PDO;

class Produit {

    private $pdo;

    public function __construct() {
        $db = Database::getInstance();
        $this->pdo = $db->getConnexion();
    }

    private function securityInput($input) {
        return trim(htmlspecialchars($input));
    }

    public function createproduit($nom, $description, $prix, $categorie ) {
        $data = $this->pdo->prepare('INSERT INTO Produits (nom, description, prix, categorie) VALUES (:nom, :description, :prix, :categorie)');
        $data->bindValue(':nom', $this->securityInput($nom), PDO::PARAM_STR);
        $data->bindValue(':description', $this->securityInput($description), PDO::PARAM_STR);
        $data->bindValue(':prix', $this->securityInput($prix), PDO::PARAM_STR);
        $data->bindValue(':categorie', $this->securityInput($categorie), PDO::PARAM_STR);
   
        return $data->execute();
    }

    public function getAll() {
        $data = $this->pdo->prepare('SELECT * FROM  Produits ');
        $data->execute();
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getCategorie() {
        $data = $this->pdo->prepare('SELECT * FROM  Categorie ');
        $data->execute();
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id) {
        $data = $this->pdo->prepare('SELECT * FROM Produits WHERE id = :id');
        $data->bindValue(':id', $id, PDO::PARAM_INT);
        $data->execute();
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function update($id, $nom, $description, $prix, $categorie ) {
        $data = $this->pdo->prepare('UPDATE Produits SET nom=:nom, description=:description, prix=:prix, categorie=:categorie, WHERE id=:id');
        $data->bindValue(':nom', $this->securityInput($nom), PDO::PARAM_STR);
        $data->bindValue(':description', $this->securityInput($description), PDO::PARAM_STR);
        $data->bindValue(':prix', $this->securityInput($prix), PDO::PARAM_STR);
        $data->bindValue(':categorie', $this->securityInput($categorie), PDO::PARAM_INT);
        $data->bindValue(':id', $id,PDO::PARAM_INT);
        return $data->execute();
    }

    public function delete($id) {
        $data = $this->pdo->prepare('DELETE FROM Produits WHERE id = :id');
        $data->bindValue(':id', $id, PDO::PARAM_INT);
        return $data->execute();
    }

    public function count() {
        return $this->pdo->query('SELECT COUNT(*) FROM Produits')->fetchColumn();
    }
}
?>