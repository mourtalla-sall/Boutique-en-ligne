export default function Home() {
    return initHome();
}

export function init() {
    AfficheProduit();

}

function initHome() {
    return `
        <div id="carrousel"
            class="carousel slide w-100"
            data-bs-ride="false">

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
                            </div>

                            <div class="col-lg-6">
                                <img src="/Boutique-en-ligne/Front-end/public/images/shoping.avif"
                                    alt="Collection moderne">
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
                                <img src="/Boutique-en-ligne/Front-end/public/images/istockphoto-1024106788-170667a.jpg"
                                    alt="Style élégant">
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
                                <img src="/Boutique-en-ligne/Front-end/public/images/femme-et-homme-faisant-du-shopping-couple-avec-sac-grande-vente-remise-acheteur-souriant-illustration-vectorielle-dans-le-style-de-161859010.webp"
                                    alt="Tendances 2026">
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Boutons -->
        <button class="carousel-control-prev" type="button"
        data-bs-target="#carrousel" data-bs-slide="prev">
    <i class="bi bi-chevron-left icone-carousel"></i>
</button>

<button class="carousel-control-next" type="button"
        data-bs-target="#carrousel" data-bs-slide="next">
    <i class="bi bi-chevron-right icone-carousel"></i>
</button>

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

        <section class="section-collection">
            <div class="container">
                <h2 class="titre-section">Nos <span class="texte-or">Collections</span></h2>
                <div class="filtres-collection">
                <button class="bouton-filtre actif" data-filtre="tous">Tous</button>
                <button class="bouton-filtre" data-filtre="homme">Homme</button>
                <button class="bouton-filtre" data-filtre="femme">Femme</button>
            </div>
            <div class="grille-produits" id="grille-produits"></div>

                <button class="bouton-voir-plus">Voir tous les produits</button>
            </div>
        </section>

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

        <section class="section-lettre">
            <div class="container">
                <div class="row align-items-center g-4">
                    <div class="col-md-6">
                        <h3>La lettre <span>Lamal</span></h3>
                        <p>Offres exclusives et actualités  deux fois par mois.</p>
                    </div>
                    <div class="col-md-6">
                        <div class="formulaire-lettre">
                            <button type="submit">S'ABONNER</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
