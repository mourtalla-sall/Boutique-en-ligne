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
    //les page Admin
    { path : BASE_URL + "/Front-end/Produits", file: "./Front-end/PageAdmin/Produits.js"},
    { path : BASE_URL + "/Front-end/AddProduits", file: "./Front-end/PageAdmin/AddProduits.js"},
    { path : BASE_URL + "/Front-end/UpdateProduits", file: "./Front-end/PageAdmin/UpdateProduits.js"},
    { path : BASE_URL + "/Front-end/DeleteProduits", file: "./Front-end/PageAdmin/DeleteProduits.js"},
    { path : BASE_URL + "/Front-end/Dashboard", file: "./Front-end/PageAdmin/Dashboard.js"},
    
]

const router = async() =>{
    const currentPath = location.pathname
    let match = null;
    for (let i= 0; i < routes.length;i++){
        const route = routes[i];
        // console.log(currentPath, route.path, "currentPath + route.path")
        if (currentPath === route.path || currentPath === route.path + "/"){
            match =route;  
            break;
        }
        // console.log(currentPath, route.path,'yoyoyo')
    } 
    const appContainer = document.getElementById("root")
    // console.log(match, 'match')
    if ( match!== null){
        try {
            const module = await import(match.file)
            // console.log(module,'ici')
            const render = module.default

            appContainer.innerHTML = render();
        } catch (error){
            appContainer.innerHTML ="<h1>Erreur de chargement</h1>" 
        }
    } else {
        appContainer.innerHTML = "<h1>404</h1>><p>Page introuvable</p>"
    }
}
window.addEventListener("popstate", router);

// Exécution au chargement initial
document.addEventListener("DOMContentLoaded", router);