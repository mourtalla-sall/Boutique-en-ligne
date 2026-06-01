import { AfficheProduit } from "./Front-end/PageAdmin/Admin.js";
import { chargerDetailProduit } from "./Front-end/Pages/detailProduit.js";

const BASE_URL = "/Boutique-en-ligne";
// const BASE_URL = "/php/Boutique-en-ligne"; // Mourtalla

const routes = [
    { path: BASE_URL + "/Front-end/Home",          file: "./Front-end/Pages/Home.js" },
    { path: BASE_URL + "/Front-end/homme",         file: "./Front-end/Pages/homme.js" },
    { path: BASE_URL + "/Front-end/connexion",     file: "./Front-end/Pages/connexion.js" },
    { path: BASE_URL + "/Front-end/femmes",        file: "./Front-end/Pages/femmes.js" },
    { path: BASE_URL + "/Front-end/Contact",       file: "./Front-end/Pages/Contact.js" },
    { path: BASE_URL + "/Front-end/Panier",        file: "./Front-end/Pages/Panier.js" },
    { path: BASE_URL + "/Front-end/Inscription",   file: "./Front-end/Pages/inscription.js" },
    { path: BASE_URL + "/Front-end/detailProduit", file: "./Front-end/Pages/detailProduit.js" },
];

const matchRoute = (currentPath) =>
    routes.find(r =>
        currentPath.toLowerCase() === r.path.toLowerCase() ||
        currentPath.toLowerCase() === r.path.toLowerCase() + "/"
    );

const navigate = async (path) => {
    window.history.pushState({}, "", path);
    await router();
};

const listenLinks = () => {
    document.querySelectorAll(`a[href^="${BASE_URL}"]`).forEach(link => {
        const href = link.getAttribute("href");

        // Laisser admin.html se charger normalement par le navigateur
        if (href.includes("admin.html")) return;

        link.addEventListener("click", async (e) => {
            e.preventDefault();
            await navigate(href);
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

    // Redirection racine → Home
    const isRoot = ["/", BASE_URL, BASE_URL + "/", BASE_URL + "/Front-end/", BASE_URL + "/Front-end/index.html"]
        .some(p => currentPath.toLowerCase() === p.toLowerCase());

    if (isRoot) {
        window.history.replaceState({}, "", BASE_URL + "/Front-end/Home");
        return router();
    }

    const match = matchRoute(currentPath);

    if (!match) {
        appContainer.innerHTML = `<h1>404</h1><p>Page introuvable — chemin : ${currentPath}</p>`;
        return;
    }

    if (location.pathname !== match.path) {
        window.history.replaceState({}, "", match.path);
    }

    try {
        const module = await import(match.file);
        appContainer.innerHTML = module.default();

        listenLinks();

        if (match.path === BASE_URL + "/Front-end/Home") {
            AfficheProduit();
        }

        if (match.path === BASE_URL + "/Front-end/detailProduit") {
            chargerDetailProduit();
        }

    } catch (error) {
        console.error(error);
        appContainer.innerHTML = `<h1>Erreur de chargement</h1><p>${error.message}</p>`;
    }
};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
    listenLinks();
    router();
});