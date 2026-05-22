<?php
namespace Boutique\Controller;

use Boutique\Model\Produit;

class Controller {
    private $produitModel;

    public function __construct() {
        $this->produitModel = new Produit();
    }

    public function addProduit($nom, $description, $prix, $categorie,$image) {
            if (empty($nom) || empty($description) || empty($prix) || empty($categorie) || empty($image)) {
                return json_encode(['status' => 'error', 'message' => 'Tous les champs sont requis']);
            }

            if ($this->produitModel->createproduit($nom, $description, $prix, $categorie,$image)) {
                return json_encode(['status' => 'success', 'message' => 'Produit ajouté avec succès']);
            }

            return json_encode(['status' => 'error', 'message' => "Erreur lors de l'enregistrement du produit"]);
        }

    public function getProduits() {
     return json_encode($this->produitModel->getAll());
    }
    public function getCategories() {
        return $this->produitModel->getCategorie();
    }

    public function updateProduits() {
    
        $error = '';
        $success = '';
        $produit = $this->produitModel-> getById(((int)$_GET['id']));

        if (isset($_POST['update_profile'])) {
            $nom = trim($_POST['nom']); 
            $description = trim($_POST['description']);
            $prix = trim($_POST['prix']);
            $categorie = trim($_POST['categorie']) ;
            $image = trim($_POST['image']) ;

            if (empty($nom) || empty($description) || empty($prix) || empty($categorie) || empty($image))   {
                $error = "Tous les champs sont requis";
           
            } else {
                if ($this->produitModel->updateproduit(((int)$_GET['id']), $nom, $description, $prix, $categorie, $image)) {
                    $success = "produit mis à jour avec succès";
             
                } else {
                    $error = "Erreur lors de la mise à jour";
                }
            }
        }

        return ['produit' => $produit, 'error' => $error, 'success' => $success];
    }

     public function deleteProduit() {
        $produitModel = new Produit();
        $produitModel->delete((int)$_GET['id']);
        // header('Location: index.php?page=admin/dashboard');
        // exit;
    }
}