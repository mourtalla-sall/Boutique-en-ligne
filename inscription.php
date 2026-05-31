<?php
session_start();
require_once '../../vendor/autoload.php';

use Cinetech\Database\Database;
use Cinetech\Controller\UserController;

$registerController = new UserController();
$message = $registerController->register();

$success = '';
if (isset($_GET['success']) && $_GET['success'] == 1) {
    $success = "Inscription réussie ! Vous pouvez vous connecter.";
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription </title>
    <link rel="stylesheet" href="../../style.css">
</head>
<body>


<main>
    <div class="connexion-wrapper">
        <div class="connexion-box">
            <h1>Inscription</h1>

            <?php if (!empty($success)): ?>
                <p style="color: green;"><?= htmlspecialchars($success) ?></p>
            <?php endif; ?>

            <?php if (!empty($message)): ?>
                <p style="color: red;"><?= htmlspecialchars($message) ?></p>
            <?php endif; ?>

            <form method="post">
                <label>Nom</label>
                <input type="text" name="lastName" placeholder="Votre nom" required>

                <label>Prénom</label>
                <input type="text" name="FirstName" placeholder="Votre prénom" required>

                <label>Email</label>
                <input type="email" name="email" placeholder="exemple@email.com" required>

                <label>Mot de passe</label>
                <input type="password" name="password" placeholder="••••••••" required>

                <label>Confirmer le mot de passe</label>
                <input type="password" name="confirm_password" placeholder="••••••••" required>

                <input type="submit" name="submit" value="S'inscrire">

                <p class="account">
                    Déjà un compte ? <a href="login.php">Se connecter</a>
                </p>
            </form>
        </div>
    </div>