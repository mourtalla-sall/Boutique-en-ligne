export function ajouterAuPanier(produit) {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier.push(produit);
    localStorage.setItem("panier", JSON.stringify(panier));
    mettreAJourCompteur();
    ouvrirSidebar();
}

export function mettreAJourCompteur() {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    const pastille = document.querySelector(".pastille-panier");
    if (pastille) {
        pastille.textContent = panier.length > 0 ? panier.length : "";
    }
}

function afficherSidebar() {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    const contenu = document.getElementById("panier-contenu");
    const total = document.getElementById("panier-total");

    if (panier.length === 0) {
        contenu.innerHTML = "<p style='padding:1rem'>Votre panier est vide.</p>";
        total.textContent = "0.00 €";
        return;
    }

    contenu.innerHTML = panier.map((p, index) => `
        <div class="panier-item">
            <img src="/Boutique-en-ligne/Front-end/public/images/${p.image}" width="70">
            <div class="panier-item__infos">
                <p class="panier-item__nom">${p.nom}</p>
                <p class="panier-item__prix">${parseFloat(p.prix).toFixed(2)} €</p>
            </div>
            <button class="btn-supprimer" data-index="${index}">✕</button>
        </div>
    `).join("");

    total.textContent = panier.reduce((acc, p) => acc + parseFloat(p.prix), 0).toFixed(2) + " €";

    document.querySelectorAll(".btn-supprimer").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const panier = JSON.parse(localStorage.getItem("panier")) || [];
            panier.splice(e.target.dataset.index, 1);
            localStorage.setItem("panier", JSON.stringify(panier));
            mettreAJourCompteur();
            afficherSidebar();
        });
    });
}

export function ouvrirSidebar() {
    document.getElementById("sidebar-panier").classList.add("ouvert");
    document.getElementById("overlay-panier").classList.add("actif");
    afficherSidebar();
}

function fermerSidebar() {
    document.getElementById("sidebar-panier").classList.remove("ouvert");
    document.getElementById("overlay-panier").classList.remove("actif");
}

export function initSidebar() {
    document.getElementById("fermer-sidebar").addEventListener("click", fermerSidebar);
    document.getElementById("overlay-panier").addEventListener("click", fermerSidebar);
    document.querySelector(".icone-panier").addEventListener("click", (e) => {
        e.preventDefault();
        ouvrirSidebar();
    });
    mettreAJourCompteur();
}