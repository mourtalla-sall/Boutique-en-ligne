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

    public function createproduit($nom, $description, $prix, $quantite, $id_categorie, $image ) {
        $data = $this->pdo->prepare('INSERT INTO Produits (nom, description, prix, quantite, id_categorie, image) VALUES (:nom, :description, :prix, :quantite, :id_categorie, :image)');
        $data->bindValue(':nom', $this->securityInput($nom), PDO::PARAM_STR);
        $data->bindValue(':description', $this->securityInput($description), PDO::PARAM_STR);
        $data->bindValue(':prix', $this->securityInput($prix), PDO::PARAM_INT);
        $data->bindValue(':quantite', $this->securityInput($quantite), PDO::PARAM_INT);
        $data->bindValue(':id_categorie', $this->securityInput($id_categorie), PDO::PARAM_STR);
        $data->bindValue(':image', $this->securityInput($image), PDO::PARAM_STR);

   
        return $data->execute();
    }

    public function getAllProduits() {
        $data = $this->pdo->prepare(
            'SELECT Produits.id_produits, 
                    Produits.nom AS nom, 
                    Produits.description, 
                    Produits.prix, 
                    Produits.quantite, 
                    Produits.image,
                    Categorie.nom AS nom_categorie 
            FROM Produits 
            JOIN Categorie ON Produits.id_categorie = Categorie.id_categorie'
        );
        $data->execute();
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }
    public function getCategorie() {
        $data = $this->pdo->prepare('SELECT * FROM  Categorie ');
        $data->execute();
        return $data->fetchAll(PDO::FETCH_ASSOC);
    }

    public function updateproduit($id, $nom, $description, $prix,$quantite, $id_categorie, $image) {
    $data = $this->pdo->prepare('UPDATE Produits SET nom=:nom, description=:description, prix=:prix, quantite=:quantite, id_categorie=:id_categorie, image=:image WHERE id_produits=:id');
    $data->bindValue(':nom', $this->securityInput($nom), PDO::PARAM_STR);
    $data->bindValue(':description', $this->securityInput($description), PDO::PARAM_STR);
    $data->bindValue(':prix', $this->securityInput($prix), PDO::PARAM_INT);
    $data->bindValue(':quantite', $this->securityInput($quantite), PDO::PARAM_INT);
    $data->bindValue(':id_categorie', $this->securityInput($id_categorie), PDO::PARAM_STR);
    $data->bindValue(':image', $this->securityInput($image), PDO::PARAM_STR);
    $data->bindValue(':id', $id, PDO::PARAM_INT);
    return $data->execute();
    }

    public function getById($id) {
        $data = $this->pdo->prepare('SELECT * FROM Produits WHERE id_produits = :id');
        $data->bindValue(':id', $id, PDO::PARAM_INT);
        $data->execute();
        return $data->fetch(PDO::FETCH_ASSOC);
    }

    public function delete($id) {
        $data = $this->pdo->prepare('DELETE FROM Produits WHERE id_produits = :id');
        $data->bindValue(':id', $id, PDO::PARAM_INT);
        return $data->execute();
    }

    public function getStats()
    {
        $produits = $this->pdo->prepare('SELECT COUNT(*) FROM Produits');
        $produits->execute();

        $categories = $this->pdo->prepare('SELECT COUNT(*) FROM Categorie');
        $categories->execute();

        $users = $this->pdo->prepare('SELECT COUNT(*) FROM User');
        $users->execute();

        return [
            'produits'   => $produits->fetchColumn(),
            'categories' => $categories->fetchColumn(),
            'users'      => $users->fetchColumn()
        ];
    }
    }
?>