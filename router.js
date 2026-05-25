const accueil = document.getElementsByClassName("link-home2")
const homme= document.getElementsByClassName("link-homme")
const connexion = document.getElementsByClassName("link-connexion")
const Contact = document.getElementsByClassName("link-Contact")
const Panier = document.getElementsByClassName("link-Panier")
const femmes= document.getElementsByClassName("link-femmes")
const inscription= document.getElementsByClassName("link-inscription")

const BASE_URL = "/Boutique-en-ligne"
const routes = [
    { path : BASE_URL + "/Home", file : "./Front-end/Pages/Home.js" },
    { path : BASE_URL + "/homme", file: "./Front-end/Pages/homme.js"},
    { path : BASE_URL + "/connexion", file: "./Front-end/Pages/connexion.js"},
    { path : BASE_URL + "/femmes", file: "./Front-end/Pages/femmes.js"},
    { path : BASE_URL + "/Contact", file: "./Front-end/Pages/Contact.js"},
    { path : BASE_URL + "/Panier", file: "./Front-end/Pages/Panier.js"},
    { path : BASE_URL + "/Inscription", file: "./Front-end/Pages/inscription.js"}
    
]

const router = async() =>{
    const currentPath = location.pathname
    let match = null;
    for (let i= 0; i < routes.length;i++){
        const route = routes[i];

        if (currentPath === route.path || currentPath === route.path + "/"){
            match =route;  
            break;
        }
        console.log(currentPath, route.path,'yoyoyo')
    } 
    const appContainer = document.getElementById("root")
    console.log(match, 'match')
    if ( match!== null){
        try {
            const module = await import(match.file)
            console.log(module,'ici')
            const render = module.default

            appContainer.innerHTML = render();
        } catch (error){
            appContainer.innerHTML ="<h1>Erreur de chargement</h1>" 
        }
    } else {
        appContainer.innerHTML = "<h1>404</h1><p>Page introuvable</p>"
    }
}
window.addEventListener("popstate", router);

// Exécution au chargement initial
document.addEventListener("DOMContentLoaded", router);