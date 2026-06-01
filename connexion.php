<?php



require_once("back-end/vendor/autoload.php");
use Boutique\Controller\UserController;
use Boutique\Database\Database;

if (!isset($_SESSION)) {
    session_start();
}


header('Content-Type: application/json');


$response = [
    'success' => false,
    'message' => ''
];

if (isset($_POST['email'])) {

    $pdo = Database::getInstance()->getConnexion();

    $email    = htmlspecialchars($_POST['email']);
    $password = $_POST['password'];

    if (!empty($email) && !empty($password)) {
        
        $stmt = $pdo->prepare("SELECT * FROM User WHERE mail = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['mot_de_passe'])) {
            // On remplit la session
            $_SESSION['email']  = $user['email'];
            $_SESSION['nom']    = $user['nom'];
            $_SESSION['prenom'] = $user['prenom'];
            
            
            $response['success'] = true;
            $response['message'] = "Connexion réussie !";
        } else {
            $response['message'] = "Email ou mot de passe incorrect.";
        }
    } else {
        $response['message'] = "Veuillez remplir tous les champs.";
    }
} else {
    $response['message'] = "Aucune donnée reçue par le serveur.";
}

echo json_encode($response);
exit;