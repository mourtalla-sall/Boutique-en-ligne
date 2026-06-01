import { AfficheProduit, fetchcall } from "./Front-end/PageAdmin/Admin.js";
import { chargerDetailProduit } from "./Front-end/Pages/detailProduit.js";



const BASE_URL = "/Boutique-en-ligne"
// const BASE_URL = "/php/Boutique-en-ligne" // Mourtalla

const routes = [
    { path: BASE_URL + "/Front-end/Home",          file: "./Front-end/Pages/Home.js" },
    { path: BASE_URL + "/Front-end/homme",         file: "./Front-end/Pages/homme.js" },
    { path: BASE_URL + "/Front-end/connexion",     file: "./Front-end/Pages/connexion.js" },
    { path: BASE_URL + "/Front-end/femmes",        file: "./Front-end/Pages/femmes.js" },
    { path: BASE_URL + "/Front-end/Contact",       file: "./Front-end/Pages/Contact.js" },
    { path: BASE_URL + "/Front-end/Panier",        file: "./Front-end/Pages/Panier.js" },
    { path: BASE_URL + "/Front-end/Inscription",   file: "./Front-end/Pages/inscription.js" },
    { path: BASE_URL + "/Front-end/detailProduit", file: "./Front-end/Pages/detailProduit.js" },
    // Pages Admin
    { path: BASE_URL + "/Front-end/Dashboard",      file: "./Front-end/PageAdmin/Dashboard.js" },
    { path: BASE_URL + "/Front-end/Produits",       file: "./Front-end/PageAdmin/Produits.js" },
    { path: BASE_URL + "/Front-end/AddProduits",    file: "./Front-end/PageAdmin/AddProduits.js" },
    { path: BASE_URL + "/Front-end/UpdateProduits", file: "./Front-end/PageAdmin/UpdateProduits.js" },
    { path: BASE_URL + "/Front-end/DeleteProduits", file: "./Front-end/PageAdmin/DeleteProduits.js" },
];

const adminRoutes = [
    BASE_URL + "/Front-end/Dashboard",
    BASE_URL + "/Front-end/Produits",
    BASE_URL + "/Front-end/AddProduits",
    BASE_URL + "/Front-end/UpdateProduits",
    BASE_URL + "/Front-end/DeleteProduits",
];

// Charge une page admin dans #main-content (navigation sidebar)
const loadAdminContent = async (path) => {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const match = routes.find(r => r.path === path);
    if (!match) return;

    try {
        const module = await import(match.file);
        mainContent.innerHTML = module.default();
        await new Promise(resolve => setTimeout(resolve, 0));
        if (module.initAfterRender) module.initAfterRender();
    } catch (error) {
        mainContent.innerHTML = "<h2>Erreur de chargement</h2>";
    }
};

// Écoute les clics sur les liens de la sidebar
const listenSidebar = () => {
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", async (e) => {
            e.preventDefault();

            const path = link.getAttribute("href");
            if (!path || path === "#") return;

            window.history.pushState({}, "", path);

            if (adminRoutes.includes(path)) {
                await loadAdminContent(path);
            } else {
                await router();
            }

            document.querySelectorAll(".sidebar a").forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
};

const router = async () => {
    const currentPath = location.pathname;
    const appContainer = document.getElementById("root");

    if (!appContainer) {
        console.error("Élément #root introuvable");
        return;
    }

    const match = routes.find(r =>
        currentPath === r.path || currentPath === r.path + "/"
    );

    if (!match) {
        appContainer.innerHTML = "<h1>404</h1><p>Page introuvable</p>";
        return;
    }

    try {
        const module = await import(match.file);
        appContainer.innerHTML = module.default();

        // Fonctions post-rendu selon la route
        if (match.path === BASE_URL + "/Front-end/Home") {
            AfficheProduit();
        }

        if (match.path === BASE_URL + "/Front-end/detailProduit") {
            chargerDetailProduit();
        }

        if (adminRoutes.includes(match.path)) {
            fetchcall();
            listenSidebar();
        }

    } catch (error) {
        console.error(error);
        appContainer.innerHTML = "<h1>Erreur de chargement</h1>";
    }
};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);