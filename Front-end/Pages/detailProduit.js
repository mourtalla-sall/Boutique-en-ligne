const detailProduit = () => {
    return ` <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Chez Lamal</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">    <link rel="stylesheet" href="style/index.css">
</head>
<body>

    <!-- NAVBAR -->
   <nav class="navbar navbar-expand-lg barre-navigation">
    <div class="container">
        <a class="navbar-brand logo" href="index.html">Chez <span>Lamal</span></a>
        <button class="navbar-toggler bg-light" type="button"
                data-bs-toggle="collapse" data-bs-target="#menuNavigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="menuNavigation">
            <ul class="navbar-nav mx-auto align-items-center gap-1">

                <li class="nav-item">
                    <a class="nav-link lien-navigation" href="#">Accueil</a>
                </li>

                <li class="nav-item dropdown">
                    <button class="nav-link lien-navigation dropdown-toggle"
                            data-bs-toggle="dropdown">Boutique</button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">Homme</a></li>
                        <li><a class="dropdown-item" href="#">Femme</a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link lien-navigation" href="#">Contact</a>
                </li>

                <li class="nav-item">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Rechercher">
                        <button class="btn btn-outline-success" type="submit">Rechercher</button>
                    </form>
                </li>
                <li class="nav-item d-flex align-items-center">
                    <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                    </a>
                </li>


            </ul>
        </div>
    </div>
</nav>

    <!-- PRODUIT -->
    <div class="container mt-5">
        <div class="row g-5">

            <!-- Image -->
            <div class="col-md-6">
                <div class="image-produit"><img src="#"></div>
            </div>

            <!-- Infos -->
            <div class="col-md-6 infos-produit">

                <h1>Manteau Cascade</h1>
                <p class="categorie">Collection Femme — Hiver 2026</p>

                <div class="bloc-prix">
                    <span class="prix-actuel">€ 220</span>
                    <span class="prix-ancien">€ 300</span>
                </div>

                <hr>

                <p>Manteau en laine et cachemire, coupe fluide, col châle.</p>

                <p><strong>Taille :</strong></p>
                <select class="form-select mb-3">
                    <option>Choisir une taille</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>

                <p><strong>Quantité :</strong></p>
                <input type="number" class="form-control mb-3"
                       value="1" min="1" max="10" style="width:100px">

                <button class="btn-panier" onclick="ajouterAuPanier()">Ajouter au panier
                </button>

                <div class="message-ok" id="message">
                    Produit ajouté au panier !
                </div>

            </div>
        </div>
    </div>

    <section class="section-lettre">
    <div class="container">
        <div class="row align-items-center g-4">
            <div class="col-md-6">
                <h3>La lettre <span>Lamal</span></h3>
            </div>
            <div class="col-md-6">
                <div class="formulaire-lettre">
                    <button type="submit">S'ABONNER</button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- PIED DE PAGE -->
<footer>
    <div class="container">
        <div class="row g-4">
            <div class="col-md-4">
                <div class="logo-pied">Chez <span>Lamal</span></div>
                <p>L'élégance n'est pas <br> une question de prix.</p>
            </div>
            <div class="col-md-2">
                <h6>Boutique</h6>
                <ul>
                    <li><a href="#">Nouveautés</a></li>
                    <li><a href="#">Collection Homme</a></li>
                    <li><a href="#">Collection Femme</a></li>
                    <li><a href="#">Promotion</a></li>
                    <li><a href="#">Nouveautés</a></li>
                </ul>
            </div>
            <div class="col-md-2">
                <h6>Aide</h6>
                <ul>
                    <li><a href="#">Mon compte</a></li>
                    <li><a href="#">Mrs commandes</a></li>
                    <li><a href="#">Livraison</a></li>
                    <li><a href="#">Retours 30 jours</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h6>À propos</h6>
                <ul>
                    <li><a href="#">Noter hitoisre</a></li>
                    <li><a href="#"><i class="bi bi-facebook me-2"></i>Facebook</a></li>
                    <li><a href="#"><i class="bi bi-tiktok me-2"></i>TikTok</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h6>Nous suivre</h6>
                <ul>
                    <li><a href="#"><i class="bi bi-instagram me-2"></i>Instagram</a></li>
                    <li><a href="#"><i class="bi bi-facebook me-2"></i>Facebook</a></li>
                    <li><a href="#"><i class="bi bi-tiktok me-2"></i>TikTok</a></li>
                </ul>
            </div>
        </div>
        <div class="bordure-pied text-center">
            © 2026 Chez Lamal — Tous droits réservés
        </div>
    </div>
</footer>

    <script src="script.js"></script>
</body>
</html>
        
      `
}

export default detailProduit