const Home = () => {
    return `


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
</section>      
`
}

export default Home ;
console.log('admin');

function fetchcall() {
    const submitForm = document.getElementById("submit-form");

    if (submitForm) {
        submitForm.addEventListener('click', async (e) => {
            e.preventDefault();
            const form = document.getElementById("produitsForm");
            const data = new FormData(form);
            console.log(fileUpload.files[0]);
            try {
                const response = await fetch("http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php", {
                    method: "POST",
                    body: data
                });
                const result = await response.json();
                const messageZone = document.getElementById('message-zone');
                if (result.success === true) {
                    messageZone.innerHTML = `<p class="success">Produit ajouté avec succès !</p>`;
                    document.getElementById("produitsForm").reset();
                } else {
                    messageZone.innerHTML = `<p class="error">${result.error}</p>`;
                }
            } catch (error) {
                console.error(error);
            }
        });
    }

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    async function getProduit() {
        try {
            const response = await fetch(`http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?id=${id}`);
            const produit = await response.json();
            document.querySelector('[name="nom"]').value = produit.nom;
            document.querySelector('[name="prix"]').value = produit.prix;
            document.querySelector('[name="description"]').value = produit.description;
            document.querySelector('[name="categorie"]').value = produit.id_categorie;
        } catch (error) {
            console.error(error);
        }
    }

    async function getCategories() {
        try {
            const response = await fetch("http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?action=getCategories");
            const categories = await response.json();
            const select = document.getElementById("categorie");
            if (select) {
                categories.forEach((cat) => {
                    select.innerHTML += `<option value="${cat.id_categorie}">${cat.nom}</option>`;
                });
            }
            if (id) getProduit();
        } catch (error) {
            console.error(error);
        }
    }

    getCategories();

    const submitUpdate = document.getElementById("submitUpdate");
    if (submitUpdate) {
        submitUpdate.addEventListener('click', async (e) => {
            e.preventDefault();
            const form = document.getElementById("updateForm");
            const data = new FormData(form);
            data.append('id', id);
            try {
                const response = await fetch("http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php", {
                    method: "POST",
                    body: data
                });
                const result = await response.json();
                const messageZone = document.getElementById('message-zone');
                if (result.success === true) {
                    messageZone.innerHTML = `<p class="success">Produit modifié avec succès !</p>`;
                } else {
                    messageZone.innerHTML = `<p class="error">${result.error}</p>`;
                }
            } catch (error) {
                console.error(error);
            }
        });
    }

    async function getProduits() {
        try {
            const response = await fetch("http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php");
            const produits = await response.json();

            const tbody = document.getElementById("produitsBody");
            if (!tbody) return;
            tbody.innerHTML = "";

            produits.forEach((produit) => {
                tbody.innerHTML += `
                    <tr>
                        <td>${produit.id_produits}</td>
                        <td>${produit.nom}</td>
                        <td>${produit.description}</td>
                        <td>${produit.prix} €</td>
                        <td>${produit.nom_categorie}</td>
                        <td><img src="/Boutique-en-ligne/Front-end/public/images/${produit.image}" alt="${produit.nom}" width="50"></td>
                    </tr>
                `;
            });
        } catch (error) {
            console.error(error);
        }
    }

    getProduits();
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
                            <a href="/Boutique-en-ligne/Front-end/detailProduit?id=${produit.id_produits}">
                                <span class="produit-categorie">Voir le produit</span>
                            </a>
                            <a href="#" class="icone-panier" onclick="ajouterAuPanier(${produit.id_produits})">
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

AfficheProduit();

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function afficherDetailProduit() {
    try {
        const response = await fetch(`http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?id=${id}`);
        const produit = await response.json();
        console.log('Produit reçu :', produit);

        document.querySelector('.image-produit img').src =
            `/Boutique-en-ligne/Front-end/public/images/${produit.image}`;

        document.querySelector('.infos-produit h1').textContent = produit.nom;
        document.querySelector('.categorie').textContent = produit.nom_categorie;
        document.querySelector('.prix-actuel').textContent = `€ ${produit.prix}`;
        document.querySelector('.infos-produit p:nth-of-type(2)').textContent = produit.description;

        document.querySelector('.btn-panier').onclick = () => ajouterAuPanier(produit.id_produits);

    } catch (error) {
        console.error('Erreur :', error);
    }
}

detailProduit();

fetchcall();


const accueil = document.getElementsByClassName("link-home2")
const homme= document.getElementsByClassName("link-homme")
const connexion = document.getElementsByClassName("link-connexion")
const Contact = document.getElementsByClassName("link-Contact")
const Panier = document.getElementsByClassName("link-Panier")
const femmes= document.getElementsByClassName("link-femmes")
const inscription= document.getElementsByClassName("link-inscription")
const Produits= document.getElementsByClassName("link-Produits")
const AddProduits= document.getElementsByClassName("link-AddProduits")
const DeleteProduits= document.getElementsByClassName("link-DeleteProduits")
const UpdateProduits= document.getElementsByClassName("link-UpdateProduits")
const Dashboard= document.getElementsByClassName("link-Dashboard")
const detailProduit= document.getElementsByClassName("link-detailProduit")

const BASE_URL = "/Boutique-en-ligne"

// const BASE_URL = "/php/Boutique-en-ligne" // Mourtalla
const routes = [
    { path : BASE_URL + "/Front-end/Home", file : "./Front-end/Pages/Home.js" },
    { path : BASE_URL + "/Front-end/homme", file: "./Front-end/Pages/homme.js"},
    { path : BASE_URL + "/Front-end/connexion", file: "./Front-end/Pages/connexion.js"},
    { path : BASE_URL + "/Front-end/femmes", file: "./Front-end/Pages/femmes.js"},
    { path : BASE_URL + "/Front-end/Contact", file: "./Front-end/Pages/Contact.js"},
    { path : BASE_URL + "/Front-end/Panier", file: "./Front-end/Pages/Panier.js"},
    { path : BASE_URL + "/Front-end/Inscription", file: "./Front-end/Pages/inscription.js"},
    { path : BASE_URL + "/Front-end/detailProduit", file : "./Front-end/Pages/detailProduit.js" },
    
    //les page Admin
    { path : BASE_URL + "/Front-end/Produits", file: "./Front-end/PageAdmin/Produits.js"},
    { path : BASE_URL + "/Front-end/AddProduits", file: "./Front-end/PageAdmin/AddProduits.js"},
    { path : BASE_URL + "/Front-end/UpdateProduits", file: "./Front-end/PageAdmin/UpdateProduits.js"},
    { path : BASE_URL + "/Front-end/DeleteProduits", file: "./Front-end/PageAdmin/DeleteProduits.js"},
    { path : BASE_URL + "/Front-end/Dashboard", file: "./Front-end/PageAdmin/Dashboard.js"},
    
]

const router = async () => {

    const currentPath = location.pathname;

    console.log("currentPath:", currentPath);
    console.log("routes:", routes.map(r => r.path));

    let match = null;

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];

        if (currentPath === route.path || currentPath === route.path + "/") {
            match = route;
            break;
        }
    }

    const appContainer = document.getElementById("root");

    if (!appContainer) {
        console.error(" root introuvable");
        return;
    }

    console.log("match:", match);

    if (match) {
        try {
            const module = await import(match.file);
            const render = module.default;

            appContainer.innerHTML = render();
        } catch (error) {
            console.error(error);
            appContainer.innerHTML = "<h1>Erreur de chargement</h1>";
        }
    } else {
        appContainer.innerHTML = "<h1>404</h1><p>Page introuvable</p>";
    }
};
window.addEventListener("popstate", router);


// Exécution au chargement initial
document.addEventListener("DOMContentLoaded", router);
