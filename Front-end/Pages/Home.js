const Home = () => {
    return `<header class="entete-principal">
    
    <div id="carrousel" class="carousel slide w-100">
        <div class="carousel-inner">

            <div class="carousel-item active">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1 class="titre-entete">
                                L'Art du <br>
                                <span class="texte-or">Raffinement</span> Moderne
                            </h1>
                            <p class="paragraphe-entete">
                                Découvrez notre nouvelle collection moderne,
                                élégante et tendance pour homme et femme.
                            </p>
                            <button class="btn bouton-entete">Découvrir</button>
                        </div>
                        <div class="col-lg-6">
                            <img src="./image/couple-on-shopping-with-bags-full-of-purchases-vector-21370843.jpg" alt="Collection moderne">
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1 class="titre-entete">
                                Style <span class="texte-or">Élégant</span>
                            </h1>
                            <p class="paragraphe-entete">
                                Une sélection unique pour affirmer votre personnalité.
                            </p>
                            <button class="btn bouton-entete">Explorer</button>
                        </div>
                        <div class="col-lg-6">
                            <img src="./image/man-woman-with-shopping-bags-total-sale-black-friday-vector-illustration_503750-2729.jpg" alt="Style élégant">
                        </div>
                    </div>
                </div>
            </div>

            <div class="carousel-item">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h1 class="titre-entete">
                                Tendances <span class="texte-or">2026</span>
                            </h1>
                            <p class="paragraphe-entete">
                                Les dernières nouveautés sont arrivées.
                            </p>
                            <button class="btn bouton-entete">Voir la collection</button>
                        </div>
                        <div class="col-lg-6">
                            <img src="./image/professional-graphic-vector-shopping-couple-young_1027230-27101.jpg" alt="Tendances 2026">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <button class="carousel-control-prev" type="button"
                data-bs-target="#carrousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Précédent</span>
        </button>
        <button class="carousel-control-next" type="button"
                data-bs-target="#carrousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Suivant</span>
        </button>
    </div>
</header>

<!-- SERVICES -->
<section class="section-services">
    <div class="container">
        <div class="row g-4">
            <div class="col-md-4">
                <div class="carte-service">
                    <i class="bi bi-truck icone-service"></i>
                    <div>
                        <h4>Livraison Gratuite</h4>
                        <p>Livraison offerte à partir de 50€ en France.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="carte-service">
                    <i class="bi bi-shield-lock icone-service"></i>
                    <div>
                        <h4>Paiement Sécurisé</h4>
                        <p>Vos paiements sont protégés et sécurisés.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="carte-service">
                    <i class="bi bi-arrow-counterclockwise icone-service"></i>
                    <div>
                        <h4>Retour 30 Jours</h4>
                        <p>Retours et échange gratuit sous 30 jours.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- COLLECTIONS -->
<section class="section-collection">
    <div class="container">

        <h2 class="titre-section">Nos <span class="texte-or">Collections</span></h2>

        <div class="filtres-collection">
            <button class="bouton-filtre actif">Tous</button>
            <button class="bouton-filtre">Homme</button>
            <button class="bouton-filtre">Femme</button>
        </div>

        <div class="grille-produits">

            <div class="carte-produit">
                <div class="produit-corps"><img src="./image/sac1.jpeg"></div>
                <div class="produit-pied">
                    <div class="produit-nom">Sac</div>
                    <div class="produit-prix">
                        <span class="prix-principal">€ 129</span>
                        <span class="prix-barre">€ 160</span>
                    </div>
                    <div class="produit-entete">
                <a href="produit.html"><span class="produit-categorie">Voir le produit</span></a>
                <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                    </a>
                </div>
                </div>
            </div>

            <div class="carte-produit">
                <div class="produit-corps"><img src="./image/Manteau.webp"></div>
                <div class="produit-pied">
                    <div class="produit-nom">Manteau Cascade</div>
                    <div class="produit-prix">
                        <span class="prix-principal">€ 220</span>
                        <span class="prix-barre">€ 300</span>
                    </div>
                    <div class="produit-entete">
                        <a href="produit.html"><span class="produit-categorie">Voir le produit</span></a>
                        <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                    </a>                    </div>
                </div>
            </div>

            <div class="carte-produit">
                <div class="produit-corps"><div class="produit-numero">03</div></div>
                <div class="produit-pied">
                    <div class="produit-nom">Robe</div>
                    <div class="produit-prix">
                        <span class="prix-principal">€ 95</span>
                    </div>
                    <div class="produit-entete">
                        <a href="produit.html"><span class="produit-categorie">Voir le produit</span></a>
                        <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="carte-produit">
                <div class="produit-corps"><div class="produit-numero">04</div></div>
                <div class="produit-pied">
                    <div class="produit-nom">jeans femme</div>
                    <div class="produit-prix">
                        <span class="prix-principal">€ 185</span>
                    </div>
                    <div class="produit-entete">
                <a href="produit.html"><span class="produit-categorie">Voir le produit</span></a>
                        <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                        </a>                    </div>
                </div>
            </div>

            <div class="carte-produit">
                <div class="produit-corps"><div class="produit-numero">05</div></div>
                <div class="produit-pied">
                    <div class="produit-nom">Chaussures homme</div>
                    <div class="produit-prix">
                        <span class="prix-principal">€ 78</span>
                        <span class="prix-barre">€ 95</span>
                    </div>
                    <div class="produit-entete">
                <a href="produit.html"><span class="produit-categorie">Voir le produit</span></a>
                        <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                        </a>                    
                    </div>
                </div>
            </div>

            <div class="carte-produit">
                <div class="produit-corps"><div class="produit-numero">06</div></div>
                <div class="produit-pied">
                    <div class="produit-nom">ensemble homme</div>
                    <div class="produit-prix">
                        <span class="prix-principal">€ 185</span>
                    </div>
                    <div class="produit-entete">
                <a href="produit.html"><span class="produit-categorie">Voir le produit</span></a>
                        <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                        </a>                    
                    </div>
                </div>
            </div>

            <div class="carte-produit">
                <div class="produit-corps"><div class="produit-numero">07</div></div>
                <div class="produit-pied">
                    <div class="produit-nom">Chaussures femme</div>
                    <div class="produit-prix">
                        <span class="prix-principal">€ 149</span>
                        <span class="prix-barre">€ 190</span>
                    </div>
                    <div class="produit-entete">
                <a href="produit.html"><span class="produit-categorie">Voir le produit</span></a>
                        <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                        </a>                    
                    </div>
                </div>
            </div>

            <div class="carte-produit">
                <div class="produit-entete">
                    <span class="produit-categorie">Accessoires</span>
                    <span class="produit-etiquette">-30%</span>
                </div>
                <div class="produit-corps"><div class="produit-numero">08</div></div>
                <div class="produit-pied">
                    <div class="produit-nom">chemise à manches longues</div>
                    <div class="produit-prix">
                        <span class="prix-principal">€ 49</span>
                        <span class="prix-barre">€ 70</span>
                    </div>
                    <div class="produit-entete">
                <a href="produit.html"><span class="produit-categorie">Voir le produit</span></a>
                <a href="#" class="icone-panier">
                        <i class="bi bi-cart3"></i>
                        <span class="pastille-panier"></span>
                </a>    
            </div>
                </div>
            </div>

        </div>

        <button class="bouton-voir-plus">Voir tous les produits</button>

    </div>
</section>

<!-- PROMO -->
<section class="section-promo">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h2>Jusqu'à</h2>
                <div class="chiffre-promo">−30%</div>
                <p>sur toute la collection</p>
            </div>
            <div class="col-md-6 d-flex flex-column gap-2 align-items-start">
                <a href="#" class="bouton-promo">Profiter de l'offre</a>
                <a href="#" class="bouton-promo-contour">Voir les conditions</a>
            </div>
        </div>
    </div>
</section>

<!-- LETTRE D'INFORMATION -->
<section class="section-lettre">
    <div class="container">
        <div class="row align-items-center g-4">
            <div class="col-md-6">
                <h3>La lettre <span>Lamal</span></h3>
                <p>Offres exclusives et actualités — deux fois par mois.</p>
            </div>
            <div class="col-md-6">
                <div class="formulaire-lettre">
                    <button type="submit">S'ABONNER</button>
                </div>
            </div>
        </div>
    </div>
</section>
  `
}
export default Home
