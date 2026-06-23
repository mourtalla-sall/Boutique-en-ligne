<?php
namespace Boutique\Model;
use Boutique\Database\Database;
use PDO;


class UserModel {

    private $pdo;



    public function __construct() {
        $db = Database::getInstance();
        $this->pdo = $db->getConnexion();
    }


    public function emailExists($email) {
        $stmt = $this->pdo->prepare("SELECT id_user FROM User WHERE mail = :email");
        $stmt->bindValue(':email', $email, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->rowCount() > 0;
    }

    public function register($nom, $prenom, $email, $mot_de_passe) {
        $hash = password_hash($mot_de_passe, PASSWORD_DEFAULT);

        $stmt = $this->pdo->prepare("INSERT INTO User (nom, prenom, mail, mot_de_passe) VALUES (:nom, :prenom, :email, :mot_de_passe)");
        $stmt->bindValue(':nom',          $nom,    PDO::PARAM_STR);
        $stmt->bindValue(':prenom', $prenom, PDO::PARAM_STR);
        $stmt->bindValue(':email',        $email,  PDO::PARAM_STR);
        $stmt->bindValue(':mot_de_passe', $hash,   PDO::PARAM_STR);
        return $stmt->execute();
    }

    public function login($email, $mot_de_passe) {
        $stmt = $this->pdo->prepare("SELECT * FROM User WHERE mail = :email");
        $stmt->bindValue(':email', $email, PDO::PARAM_STR);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($mot_de_passe, $user['mot_de_passe'])) {
            return $user;
        }
        return false;
    }

    public function getUserById($id) {
        $stmt = $this->pdo->prepare("SELECT * FROM User WHERE id_user = :id");
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function getUserByEmail($email) {
        $stmt = $this->pdo->prepare("SELECT * FROM User WHERE mail = :email");
        $stmt->bindValue(':email', $email, PDO::PARAM_STR);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function updateUser($id, $nom, $prenom, $email) {
        $stmt = $this->pdo->prepare("UPDATE User SET nom = :nom, prenom = :prenom, mail = :email WHERE id_user = :id");
        $stmt->bindValue(':nom',    $nom,    PDO::PARAM_STR);
        $stmt->bindValue(':prenom', $prenom, PDO::PARAM_STR);
        $stmt->bindValue(':email',  $email,  PDO::PARAM_STR);
        $stmt->bindValue(':id',     $id,     PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function updatePassword($id, $newPassword) {
        $hash = password_hash($newPassword, PASSWORD_DEFAULT);
        $stmt = $this->pdo->prepare("UPDATE User SET mot_de_passe = :mot_de_passe WHERE id_user = :id");
        $stmt->bindValue(':mot_de_passe', $hash, PDO::PARAM_STR);
        $stmt->bindValue(':id',           $id,   PDO::PARAM_INT);
        return $stmt->execute();
    }

    public function deleteUser($id) {
        $stmt = $this->pdo->prepare("DELETE FROM User WHERE id_user = :id");
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }
}