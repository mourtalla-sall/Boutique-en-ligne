<?php

namespace Boutique\Controller;

use Boutique\Model\Produit;

class Controller {
    private $produitModel;

    public function __construct() {
        $this->produitModel = new Produit();
    }
    // ajout produits
    public function addProduit($nom, $description, $prix, $quantite ,$categorie, $image) {
        if (empty($nom) || empty($description) || empty($prix) || empty($quantite) || empty($categorie) || empty($image) ) {
            return json_encode(['status' => 'error', 'message' => 'Tous les champs sont requis']);
        }

        if ($this->produitModel->createproduit($nom, $description, $prix, $quantite, $categorie, $image)) {
            return json_encode(['status' => 'success', 'message' => 'Produit ajouté avec succès']);
        }

        return json_encode(['status' => 'error', 'message' => "Erreur lors de l'enregistrement du produit"]);
    }
    // ajout categorie
    public function addCategorie($nom) {
        if (empty($nom) ) {
            return json_encode(['status' => 'error', 'message' => 'Le champ est requis']);
        }

        if ($this->produitModel->createcategorie($nom)) {
            return json_encode(['status' => 'success', 'message' => 'Categorie ajouté avec succès']);
        }

        return json_encode(['status' => 'error', 'message' => "Erreur lors de l'enregistrement du Categorie"]);
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
    public function getCategorieById($id) {
        return $this->produitModel->getCategorieById($id);
    }
    // modoifer produits
    public function updateProduits($id, $nom, $description, $prix, $quantite, $categorie, $image) {
        if (empty($nom) || empty($description) || empty($prix) || empty($quantite) || empty($categorie) ) {
            return json_encode(['status' => 'error', 'message' => 'Tous les champs sont requis']);
        }

        if ($this->produitModel->updateproduit($id, $nom, $description, $prix,$quantite, $categorie, $image)) {
            return json_encode(['status' => 'success', 'message' => 'Produit mis à jour avec succès']);
        }

        return json_encode(['status' => 'error', 'message' => 'Erreur lors de la mise à jour']);
    }
    // modoifer categorie
    public function updatecategorie($id, $nom,) {
        if (empty($nom) ) {
            return json_encode(['status' => 'error', 'message' => 'Tous les champs sont requis']);
        }

        if ($this->produitModel->updatecategorie($id, $nom)) {
            return json_encode(['status' => 'success', 'message' => 'Categorie mis à jour avec succès']);
        }

        return json_encode(['status' => 'error', 'message' => 'Erreur lors de la mise à jour Categorie']);
    }
    // supprimer produits 
    public function deleteProduit() {
        $this->produitModel->delete((int)$_GET['id']);
    }
    // supprimer categorie
    public function deleteCategorie() {
        $this->produitModel->deleteCategorie((int)$_GET['id']);
    }
    public function getStats()
    {
        return $this->produitModel->getStats();
    }
}