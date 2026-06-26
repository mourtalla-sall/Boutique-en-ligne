<?php
session_start();
require_once 'back-end/vendor/autoload.php';

use Boutique\Controller\UserController;


header('Content-Type: application/json');

$registerController = new UserController();
$message = $registerController->register();


$response = [];

if ($message === "succès") {
        $response['success'] = true;
        $response['message'] = "Inscription réussie !";
    } elseif (!empty($message)) {
        $response['success'] = false;
        $response['message'] = $message;
    } else {
        $response['success'] = false;
        $response['message'] = "Le contrôleur a renvoyé une réponse vide.";
    }

echo json_encode($response);
exit;

 ?>           