import { initAutocomplete } from "/Boutique-en-ligne/autocompletion.js";
import { chargerDetailProduit } from "/Boutique-en-ligne/Front-end/Pages/detailProduit.js";
import { initInscriptionForm } from "/Boutique-en-ligne/Front-end/Pages/inscription.js";
import { initConnexionForm } from "/Boutique-en-ligne/Front-end/Pages/connexion.js";
import { AfficheProduit } from "/Boutique-en-ligne/Front-end/PageAdmin/Admin.js";
import { initPagePanier } from "/Boutique-en-ligne/Front-end/Pages/Panier.js";
import { initPagePaiement } from "/Boutique-en-ligne/Front-end/Pages/paiement.js";

initAutocomplete();

const BASE_URL = "/Boutique-en-ligne";

// ─────────────────────────────────────────
//  ROUTES
// ─────────────────────────────────────────

const routesUser = [
    { path: BASE_URL + "/",              file: "/Boutique-en-ligne/Front-end/Pages/Home.js" },
    { path: BASE_URL + "/home",          file: "/Boutique-en-ligne/Front-end/Pages/Home.js" },
    { path: BASE_URL + "/homme",         file: "/Boutique-en-ligne/Front-end/Pages/homme.js" },
    { path: BASE_URL + "/femmes",        file: "/Boutique-en-ligne/Front-end/Pages/femmes.js" },
    { path: BASE_URL + "/contact",       file: "/Boutique-en-ligne/Front-end/Pages/Contact.js" },
    { path: BASE_URL + "/connexion",     file: "/Boutique-en-ligne/Front-end/Pages/connexion.js" },
    { path: BASE_URL + "/inscription",   file: "/Boutique-en-ligne/Front-end/Pages/inscription.js" },
    { path: BASE_URL + "/panier",        file: "/Boutique-en-ligne/Front-end/Pages/Panier.js" },
    { path: BASE_URL + "/paiement",      file: "/Boutique-en-ligne/Front-end/Pages/paiement.js" },
    { path: BASE_URL + "/detailproduit", file: "/Boutique-en-ligne/Front-end/Pages/detailProduit.js" },
];

const routesAdmin = [
    { path: BASE_URL + "/admin",                 file: "/Boutique-en-ligne/Front-end/PageAdmin/Dashboard.js" },
    { path: BASE_URL + "/admin/dashboard",       file: "/Boutique-en-ligne/Front-end/PageAdmin/Dashboard.js" },
    { path: BASE_URL + "/admin/produits",        file: "/Boutique-en-ligne/Front-end/PageAdmin/Produits.js" },
    { path: BASE_URL + "/admin/add-produit",     file: "/Boutique-en-ligne/Front-end/PageAdmin/AddProduits.js" },
    { path: BASE_URL + "/admin/update-produit",  file: "/Boutique-en-ligne/Front-end/PageAdmin/UpdateProduits.js" },
    { path: BASE_URL + "/admin/delete-produit",  file: "/Boutique-en-ligne/Front-end/PageAdmin/DeleteProduits.js" },
    { path: BASE_URL + "/admin/stock",           file: "/Boutique-en-ligne/Front-end/PageAdmin/Stock.js" },
    { path: BASE_URL + "/admin/profil",          file: "/Boutique-en-ligne/Front-end/PageAdmin/Profil.js" },
];

// ─────────────────────────────────────────
//  LAYOUTS
// ─────────────────────────────────────────

function publicLayout() {
    return `
        <nav class="navbar navbar-expand-lg barre-navigation">
            <div class="container">
                <a class="navbar-brand logo" href="/Boutique-en-ligne/home" data-link>
                    Chez <span>Lamal</span>
                </a>
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menuNavigation">
                    <ul class="navbar-nav mx-auto align-items-center gap-1">
                        <li class="nav-item">
                            <a class="nav-link lien-navigation" href="/Boutique-en-ligne/home" data-link>Accueil</a>
                        </li>
                        <li class="nav-item dropdown">
                            <button class="nav-link lien-navigation dropdown-toggle" data-bs-toggle="dropdown">Boutique</button>
                            <ul class="dropdown-menu dropdown-menu-dark">
                                <li><a class="dropdown-item" href="/Boutique-en-ligne/homme" data-link>Homme</a></li>
                                <li><a class="dropdown-item" href="/Boutique-en-ligne/femmes" data-link>Femme</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link lien-navigation" href="/Boutique-en-ligne/contact" data-link>Contact</a>
                        </li>
                        <li class="nav-item">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Rechercher">
                                <button class="btn btn-outline-success" type="submit">Rechercher</button>
                            </form>
                        </li>
                        <li class="nav-item">
                            <a href="/Boutique-en-ligne/panier" class="icone-panier" data-link>
                                <i class="bi bi-cart3"></i>
                                <span class="pastille-panier"></span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link lien-navigation" href="/Boutique-en-ligne/inscription" data-link>Inscription</a>
                        </li>
                        <li class="nav-item bouton-dore ms-2">
                            <a class="nav-link lien-navigation" href="/Boutique-en-ligne/connexion" data-link>Se connecter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
}

function adminLayout() {
    return `
        <input type="checkbox" id="check">
        <label for="check" class="sidebar-toggle">
            <i class="bi bi-list" id="btn"></i>
            <i class="bi bi-x-lg" id="cancel"></i>
        </label>
        <aside class="sidebar">
            <header class="sidebar-header">Chez Lamal</header>
            <a href="/Boutique-en-ligne/admin/dashboard" data-link><i class="bi bi-speedometer2"></i><span>Dashboard</span></a>
            <a href="/Boutique-en-ligne/admin/produits" data-link><i class="bi bi-box-seam"></i><span>Produits</span></a>
            <a href="/Boutique-en-ligne/admin/add-produit" data-link><i class="bi bi-plus-circle"></i><span>Ajouter</span></a>
            <a href="/Boutique-en-ligne/admin/stock" data-link><i class="bi bi-archive"></i><span>Stock</span></a>
            <a href="/Boutique-en-ligne/admin/profil" data-link><i class="bi bi-person"></i><span>Profil</span></a>
            <a href="/Boutique-en-ligne/home" data-link><i class="bi bi-arrow-left"></i><span>Retour au site</span></a>
        </aside>
    `;
}

function publicFooter() {
    return `
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
                    </ul>
                </div>
                <div class="col-md-2">
                    <h6>Aide</h6>
                    <ul>
                        <li><a href="#">Mon compte</a></li>
                        <li><a href="#">Mes commandes</a></li>
                        <li><a href="#">Livraison</a></li>
                        <li><a href="#">Retours 30 jours</a></li>
                        <li><a href="#">Contact</a></li>
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
            <div class="bordure-pied text-center">© 2026 Chez Lamal — Tous droits réservés</div>
        </div>
    `;
}

// ─────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────

function normalize(path) {
    return path.replace(/\/+$/, "").toLowerCase();
}

function updateLayout() {
    const header = document.getElementById("app-header");
    const footer = document.getElementById("app-footer");

    if (!header || !footer) return;

    const isAdmin = location.pathname.startsWith(`${BASE_URL}/admin`);

    if (isAdmin) {
        header.innerHTML = adminLayout();
        footer.style.display = "none";
        document.title = "Administration - Chez Lamal";
    } else {
        header.innerHTML = publicLayout();
        footer.innerHTML = publicFooter();
        footer.style.display = "";
        document.title = "Chez Lamal";
    }
}

async function initUserPage(path) {
    if (path.includes("home"))          AfficheProduit();
    if (path.includes("inscription"))   initInscriptionForm();
    if (path.includes("connexion"))     initConnexionForm();
    if (path.includes("detailproduit")) chargerDetailProduit();
    if (path.includes("panier"))        initPagePanier();
    if (path.includes("paiement"))      initPagePaiement();
}

function render404(appContainer, message = "Page introuvable") {
    appContainer.innerHTML = `
        <div class="container py-5">
            <h1>404</h1>
            <p>${message}</p>
        </div>
    `;
}

function renderError(appContainer, error) {
    appContainer.innerHTML = `
        <div class="container py-5">
            <h1>Erreur de chargement</h1>
            <p>${error.message}</p>
        </div>
    `;
}

// ─────────────────────────────────────────
//  ROUTER
// ─────────────────────────────────────────

const router = async () => {
    updateLayout();

    const currentPath = normalize(location.pathname);
    const appContainer = document.getElementById("root");

    if (!appContainer) return;

    console.log("Route :", currentPath);

    const isAdmin = location.pathname.startsWith(`${BASE_URL}/admin`);

    if (isAdmin) {
        const match = routesAdmin.find(route => normalize(route.path) === currentPath);
        if (!match) return render404(appContainer, "Page admin introuvable");
        try {
            const module = await import(match.file);
            appContainer.innerHTML = module.default();
        } catch (error) {
            console.error(error);
            renderError(appContainer, error);
        }
    } else {
        const match = routesUser.find(route => normalize(route.path) === currentPath);
        if (!match) return render404(appContainer);
        try {
            const module = await import(match.file);
            appContainer.innerHTML = module.default();
            await initUserPage(match.path.toLowerCase());
        } catch (error) {
            console.error(error);
            renderError(appContainer, error);
        }
    }
};

// ─────────────────────────────────────────
//  EVENTS
// ─────────────────────────────────────────

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);

document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-link]");
    if (!link) return;
    event.preventDefault();
    const href = link.getAttribute("href");
    if (href === location.pathname) return;
    history.pushState({}, "", href);
    router();
});