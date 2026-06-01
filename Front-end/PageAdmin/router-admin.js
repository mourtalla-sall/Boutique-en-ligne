import { fetchcall } from "./Front-end/PageAdmin/Admin.js";

const BASE_URL = "/Boutique-en-ligne";

const adminRoutes = [
    { path: BASE_URL + "/Front-end/Dashboard",      file: "./Front-end/PageAdmin/Dashboard.js" },
    { path: BASE_URL + "/Front-end/Produits",       file: "./Front-end/PageAdmin/Produits.js" },
    { path: BASE_URL + "/Front-end/AddProduits",    file: "./Front-end/PageAdmin/AddProduits.js" },
    { path: BASE_URL + "/Front-end/UpdateProduits", file: "./Front-end/PageAdmin/UpdateProduits.js" },
    { path: BASE_URL + "/Front-end/DeleteProduits", file: "./Front-end/PageAdmin/DeleteProduits.js" },
];

const matchRoute = (path) =>
    adminRoutes.find(r =>
        path.toLowerCase() === r.path.toLowerCase() ||
        path.toLowerCase() === r.path.toLowerCase() + "/"
    );

const loadPage = async (path) => {
    const mainContent = document.getElementById("main-content");
    if (!mainContent) return;

    const match = matchRoute(path);

    // Pas de route connue → Dashboard par défaut
    if (!match) {
        window.history.replaceState({}, "", BASE_URL + "/Front-end/Dashboard");
        return loadPage(BASE_URL + "/Front-end/Dashboard");
    }

    // Normalise la casse dans l'URL
    if (location.pathname !== match.path) {
        window.history.replaceState({}, "", match.path);
    }

    try {
        const module = await import(match.file);
        mainContent.innerHTML = module.default();
        await new Promise(resolve => setTimeout(resolve, 0));
        if (module.initAfterRender) {
            module.initAfterRender();
        } else {
            fetchcall();
        }
    } catch (error) {
        console.error(error);
        mainContent.innerHTML = `<h2>Erreur de chargement</h2><p>${error.message}</p>`;
    }

    updateActiveLink();
};

const updateActiveLink = () => {
    document.querySelectorAll(".sidebar-link").forEach(link => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", location.pathname.toLowerCase() === href.toLowerCase());
    });
};

const listenSidebar = () => {
    document.querySelectorAll(".sidebar-link").forEach(link => {
        const href = link.getAttribute("href");

        // Lien "Retour au site" → navigation normale
        if (!adminRoutes.some(r => r.path.toLowerCase() === href.toLowerCase())) return;

        link.addEventListener("click", async (e) => {
            e.preventDefault();
            window.history.pushState({}, "", href);
            await loadPage(href);
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    listenSidebar();
    loadPage(location.pathname);
});

window.addEventListener("popstate", () => loadPage(location.pathname));