import { fetchcall } from "/Boutique-en-ligne/Front-end/PageAdmin/Admin.js";

const BASE_URL = "/Boutique-en-ligne/admin";

const adminRoutes = [
    { path: BASE_URL + "/dashboard",      file: "/Boutique-en-ligne/Front-end/PageAdmin/Dashboard.js" },
    { path: BASE_URL + "/produits",       file: "/Boutique-en-ligne/Front-end/PageAdmin/Produits.js" },
    { path: BASE_URL + "/add-produit",    file: "/Boutique-en-ligne/Front-end/PageAdmin/AddProduits.js" },
    { path: BASE_URL + "/update-produit", file: "/Boutique-en-ligne/Front-end/PageAdmin/UpdateProduits.js" },
    { path: BASE_URL + "/delete-produit", file: "/Boutique-en-ligne/Front-end/PageAdmin/DeleteProduits.js" },
    { path: BASE_URL + "/stock",       file: "/Boutique-en-ligne/Front-end/PageAdmin/Stock.js" },
    { path: BASE_URL + "/profil",      file: "/Boutique-en-ligne/Front-end/PageAdmin/Profil.js" },
];

// const isAdmin = () => {
//     const user = JSON.parse(localStorage.getItem("user") || "{}");
//     return user?.role === "admin";
// };

const adminRouter = async () => {
    const currentPath = location.pathname;
    const appContainer = document.getElementById("main-content");

    if (!appContainer) return;

    // if (!isAdmin()) {
    //     window.location.href = "/Boutique-en-ligne/Front-end/connexion";
    //     return;
    // }

    const match = adminRoutes.find(
        r => currentPath === r.path || currentPath === r.path + "/"
    );

    const fileToLoad = match 
        ? match.file 
        : "/Boutique-en-ligne/Front-end/PageAdmin/Dashboard.js";

    try {
        const module = await import(fileToLoad);
        appContainer.innerHTML = module.default();
        fetchcall();
    } catch (error) {
        console.error("Erreur:", error);
        appContainer.innerHTML = "<h1>Erreur de chargement</h1>";
    }
};
document.addEventListener("click", (e) => {
    console.log("clic détecté", e.target);
    const link = e.target.closest("[data-link]");
    console.log("link trouvé:", link);
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    history.pushState(null, "", href);
    adminRouter();
});
document.addEventListener("DOMContentLoaded", adminRouter);
window.addEventListener("popstate", adminRouter);