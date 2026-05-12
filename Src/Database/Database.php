<?php
namespace Boutique\Database;
use PDO;




class Database {
    private static $instance = null;
    private PDO $pdo;

    private function __construct() {
        $env = parse_ini_file(__DIR__ . '/../.env');
        try {
            $this->pdo = new PDO(
                "mysql:host={$env['DB_HOST']};dbname={$env['DB_NAME']};charset=utf8",
                $env['DB_USER'],
                $env['DB_PASSWORD'],
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                ]
            );
        } catch (\PDOException $e) {
            die("Erreur de connexion à la base de données");
        }
    }

    public static function getInstance(): self {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function getConnexion(): PDO {
        return $this->pdo;
    }
}