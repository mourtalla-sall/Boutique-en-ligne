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

    async function AfficheProduit() {
        try {
            const response = await fetch("http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php");
            const produits = await response.json();

            const container = document.getElementById("grille-produits");
            if (!container) return;
            container.innerHTML = "";

            produits.forEach((produit) => {
                container.innerHTML += `
                    <div class="carte-produit">
                        <div class="produit-corps">
                            <img src="/Boutique-en-ligne/Front-end/public/images/${produit.image}" alt="${produit.nom}">
                        </div>
                        <div class="produit-pied">
                            <div class="produit-nom">${produit.nom}</div>
                            <div class="produit-prix">
                                <span class="prix-principal">€ ${produit.prix}</span>
                            </div>
                            <div class="produit-entete">
                                <a href="#" 
                                class="produit-categorie"
                                onclick="naviguer('/Boutique-en-ligne/Front-end/detailProduit?id=${produit.id_produits}'); return false;">
                                    Voir le produit
                                </a>
                                <a href="#" class="icone-panier" onclick="ajouterAuPanier(${produit.id_produits}); return false;">
                                    <i class="bi bi-cart3"></i>
                                    <span class="pastille-panier"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            });

        } catch (error) {
            console.error(error);
        }
    }