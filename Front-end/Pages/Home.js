<<<<<<< HEAD
const Home = () => {
<<<<<<< HEAD
    return `


<!-- SERVICES -->
<div class="entete-principal">
=======
    return `<header class="entete-principal">
    
>>>>>>> 1f1cb22f3f1709c5bf19e39d66d0b4cb33959b69
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
=======
export default function Home() {
    return initHome();
}

export function init() {
    AfficheProduit();
}

function initHome() {
    return `
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
>>>>>>> 7bced371eda83cd757ae899ed730c18fa627fd62
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD

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
=======
        </section>

        <section class="section-collection">
            <div class="container">
                <h2 class="titre-section">Nos <span class="texte-or">Collections</span></h2>
                <div class="filtres-collection">
                    <button class="bouton-filtre actif">Tous</button>
                    <button class="bouton-filtre">Homme</button>
                    <button class="bouton-filtre">Femme</button>
                </div>
                <div class="grille-produits" id="grille-produits"></div>
                <button class="bouton-voir-plus">Voir tous les produits</button>
            </div>
        </section>

        <section class="section-promo">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h3>OFFRE LIMITÉE</h3>
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
>>>>>>> 7bced371eda83cd757ae899ed730c18fa627fd62
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD

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
</div>
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

        <div class="grille-produits" id="grille-produits">

            <div class="carte-produit">

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
<<<<<<< HEAD
</section>      
`
}

export default Home ;
=======
</section>
  `
}
export default Home
>>>>>>> 1f1cb22f3f1709c5bf19e39d66d0b4cb33959b69
=======
        </section>
    `;
}

>>>>>>> 7bced371eda83cd757ae899ed730c18fa627fd62
