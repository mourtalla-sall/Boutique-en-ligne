import { initAutocomplete } from "./autocompletion.js";
import { chargerDetailProduit } from "./Front-end/Pages/detailProduit.js";
import { initInscriptionForm } from "./Front-end/Pages/inscription.js";
import { initConnexionForm } from "./Front-end/Pages/connexion.js";
import { AfficheProduit } from "./Front-end/PageAdmin/Admin.js";
import { initPagePanier } from "./Front-end/Pages/Panier.js";

initAutocomplete();

const BASE_URL = "/Boutique-en-ligne";

const routes = [
    { path: BASE_URL + "/Front-end/", file: "./Front-end/Pages/Home.js" },
    { path: BASE_URL + "/Front-end/home", file: "./Front-end/Pages/Home.js" },
    { path: BASE_URL + "/Front-end/homme",   file: "./Front-end/Pages/homme.js" },
    { path: BASE_URL + "/Front-end/connexion", file: "./Front-end/Pages/connexion.js" },
    { path: BASE_URL + "/Front-end/femmes", file: "./Front-end/Pages/femmes.js" },
    { path: BASE_URL + "/Front-end/contact", file: "./Front-end/Pages/Contact.js" },
    { path: BASE_URL + "/Front-end/panier", file: "./Front-end/Pages/Panier.js" },
    { path: BASE_URL + "/Front-end/inscription", file: "./Front-end/Pages/inscription.js" },
    { path: BASE_URL + "/Front-end/detailProduit", file: "./Front-end/Pages/detailProduit.js" },
];

const router = async () => {
    // Normalisation : on retire les / en trop et on compare en minuscule
    const currentPath = location.pathname.replace(/\/+$/, "").toLowerCase();
    const appContainer = document.getElementById("root");

    if (!appContainer) return;
    if (currentPath.startsWith((BASE_URL + "/admin").toLowerCase())) return;

    const match = routes.find(r => {
        const routePath = r.path.replace(/\/+$/, "").toLowerCase();
        return currentPath === routePath;
    });

    if (match) {
        try {
            const module = await import(match.file);
            appContainer.innerHTML = module.default();

            // Comparaison insensible à la casse sur match.path
            const lowerPath = match.path.toLowerCase();

            if (lowerPath.includes("home"))    AfficheProduit();
            if (lowerPath.includes("inscription")) initInscriptionForm();
            if (lowerPath.includes("connexion")) initConnexionForm();
            if (lowerPath.includes("detailproduit")) chargerDetailProduit();
            if (lowerPath.includes("panier"))  initPagePanier();

        } catch (error) {
            console.error(error);
            appContainer.innerHTML = "<h1>Erreur de chargement</h1>";
        }
    } else {
        appContainer.innerHTML = "<h1>404</h1><p>Page introuvable</p>";
    }
};

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", router);