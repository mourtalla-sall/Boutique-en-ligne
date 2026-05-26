const accueil = document.getElementsByClassName("link-home2")
const homme= document.getElementsByClassName("link-homme")
const connexion = document.getElementsByClassName("link-connexion")
const Contact = document.getElementsByClassName("link-Contact")
const Panier = document.getElementsByClassName("link-Panier")
const femmes= document.getElementsByClassName("link-femmes")
const inscription= document.getElementsByClassName("link-inscription")

const BASE_URL = "/boutique-en-ligne/Front-end"
const routes = [
    { path : BASE_URL + "/Home", file : "/Pages/Home.js" },
    { path : BASE_URL + "/homme", file: "/Pages/homme.js"},
    { path : BASE_URL + "/connexion", file: "/Pages/connexion.js"},
    { path : BASE_URL + "/femmes", file: "/Pages/femmes.js"},
    { path : BASE_URL + "/Contact", file: "/Pages/Contact.js"},
    { path : BASE_URL + "/Panier", file: "/Pages/Panier.js"},
    { path : BASE_URL + "/inscription", file: "/Pages/inscription.js"}
    
]

const router = async() =>{
    const currentPath = location.pathname
    let match = null;
    for (let i= 0; i < routes.length;i++){
        const route = routes[i];
        console.log(currentPath, route)
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
            const module = await import(BASE_URL + match.file)
            console.log(module,'ici')
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