import { initAutocomplete } from "./autocompletion.js";
import { chargerDetailProduit } from "./Front-end/Pages/detailProduit.js";
import { initInscriptionForm } from "./Front-end/Pages/inscription.js";
import { initConnexionForm } from "./Front-end/Pages/connexion.js";
import { AfficheProduit } from "./Front-end/PageAdmin/Admin.js";
import { initPagePanier } from "./Front-end/Pages/Panier.js";

initAutocomplete();

const BASE_URL = "/Boutique-en-ligne";

const routes = [
    { path: BASE_URL + "/Front-end/Home",    file: "./Front-end/Pages/Home.js" },
    { path: BASE_URL + "/Front-end/homme",  file: "./Front-end/Pages/homme.js" },
    { path: BASE_URL + "/Front-end/connexion", file: "./Front-end/Pages/connexion.js" },
    { path: BASE_URL + "/Front-end/femmes",  file: "./Front-end/Pages/femmes.js" },
    { path: BASE_URL + "/Front-end/Contact", file: "./Front-end/Pages/Contact.js" },
    { path: BASE_URL + "/Front-end/Panier", file: "./Front-end/Pages/Panier.js" },
    { path: BASE_URL + "/Front-end/Inscription", file: "./Front-end/Pages/inscription.js" },
    { path: BASE_URL + "/Front-end/detailProduit", file: "./Front-end/Pages/detailProduit.js" },
];

const router = async () => {
    const currentPath = location.pathname;
    const appContainer = document.getElementById("root");

    if (!appContainer) return;
    if (currentPath.startsWith(BASE_URL + "/admin")) return;

    const match = routes.find(r => currentPath === r.path || currentPath === r.path + "/");

    if (match) {
        try {
            const module = await import(match.file);
            appContainer.innerHTML = module.default();

            if (match.path.includes("Home"))          AfficheProduit();
            if (match.path.includes("inscription"))   initInscriptionForm();
            if (match.path.includes("connexion"))     initConnexionForm();
            if (match.path.includes("detailProduit")) chargerDetailProduit();
            if (match.path.includes("Panier"))        initPagePanier();

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