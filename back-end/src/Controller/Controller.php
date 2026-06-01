<?php

namespace Boutique\Controller;

use Boutique\Model\Produit;

class Controller {
    private $produitModel;

    public function __construct() {
        $this->produitModel = new Produit();
    }

    public function addProduit($nom, $description, $prix, $categorie, $image) {
        if (empty($nom) || empty($description) || empty($prix) || empty($categorie) || empty($image)) {
            return json_encode(['status' => 'error', 'message' => 'Tous les champs sont requis']);
        }

        if ($this->produitModel->createproduit($nom, $description, $prix, $categorie, $image)) {
            return json_encode(['status' => 'success', 'message' => 'Produit ajouté avec succès']);
        }

        return json_encode(['status' => 'error', 'message' => "Erreur lors de l'enregistrement du produit"]);
    }

    public function getProduits() {
        return json_encode($this->produitModel->getAllProduits());
    }

    public function getCategories() {
        return $this->produitModel->getCategorie();
    }

    public function getById($id) {
        return json_encode($this->produitModel->getById($id));
    }

    public function updateProduits($id, $nom, $description, $prix, $categorie, $image) {
        if (empty($nom) || empty($description) || empty($prix) || empty($categorie)) {
            return json_encode(['status' => 'error', 'message' => 'Tous les champs sont requis']);
        }

        if ($this->produitModel->updateproduit($id, $nom, $description, $prix, $categorie, $image)) {
            return json_encode(['status' => 'success', 'message' => 'Produit mis à jour avec succès']);
        }

        return json_encode(['status' => 'error', 'message' => 'Erreur lors de la mise à jour']);
    }

    public function deleteProduit() {
        $this->produitModel->delete((int)$_GET['id']);
    }
}