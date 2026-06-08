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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}