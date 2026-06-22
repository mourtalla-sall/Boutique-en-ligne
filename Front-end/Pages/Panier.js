// ───── LOCALSTORAGE ─────

export function getPanier() {
    return JSON.parse(localStorage.getItem('panier')) || [];
}

function savePanier(panier) {
    localStorage.setItem('panier', JSON.stringify(panier));
}

export function ajouterAuPanier(produit) {
    const panier = getPanier();
    const index = panier.findIndex(p => p.id === produit.id);
    if (index !== -1) {
        panier[index].quantite += produit.quantite;
    } else {
        panier.push(produit);
    }
    savePanier(panier);
    mettreAJourBadge();
}

export function supprimerDuPanier(id) {
    let panier = getPanier().filter(p => p.id !== id);
    savePanier(panier);
    mettreAJourBadge();
    initPagePanier();
}

export function mettreAJourBadge() {
    const panier = getPanier();
    const total = panier.reduce((acc, p) => acc + p.quantite, 0);
    const badge = document.querySelector('.pastille-panier');
    if (badge) badge.textContent = total > 0 ? total : '';
}

// ───── PAGE PANIER (template HTML) ─────

const pagePanier = () => {
    return `
    <div class="page-panier">

        <!-- HEADER PANIER -->
        <div class="panier-header">
            <label class="tout-selectionner">
                <input type="checkbox" id="checkbox-tout"> Tout
            </label>
            <h2 class="titre-panier">Panier <span id="nb-articles"></span></h2>
        </div>

        <!-- LISTE PRODUITS -->
        <div id="liste-produits-panier"></div>

        <!-- BARRE BAS -->
        <div class="barre-bas-panier">
            <div class="total-bas">
                <span id="total-panier">0,00 €</span>
            </div>
            <button class="btn-payer">PAYER</button>
        </div>

    </div>
    `;
};

// ───── INIT PAGE PANIER ─────

export function initPagePanier() {
    const panier = getPanier();
    const liste = document.getElementById('liste-produits-panier');
    const nbArticles = document.getElementById('nb-articles');
    const totalEl = document.getElementById('total-panier');

    if (!liste) return;

    const totalArticles = panier.reduce((acc, p) => acc + p.quantite, 0);
    if (nbArticles) nbArticles.textContent = `(${totalArticles})`;

    if (panier.length === 0) {
        liste.innerHTML = `
            <div class="panier-vide">
                <i class="bi bi-cart-x"></i>
                <p>Votre panier est vide.</p>
                <a href="/Boutique-en-ligne/Front-end/Home" data-link class="btn-continuer">Continuer mes achats</a>
            </div>
        `;
        if (totalEl) totalEl.textContent = '0,00 €';

        document.querySelectorAll('[data-link]').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                history.pushState(null, null, a.href);
                window.dispatchEvent(new PopStateEvent('popstate'));
            });
        });
        return;
    }

    liste.innerHTML = panier.map(p => `
        <div class="carte-panier">

            <!-- ROND À COCHER -->
            <label class="rond-cocher">
                <input type="checkbox" class="checkbox-produit" data-id="${p.id}">
                <span class="rond"></span>
            </label>

            <!-- IMAGE -->
            <img src="/Boutique-en-ligne/Front-end/public/images/${p.image}" alt="${p.nom}">

            <!-- INFOS DROITE -->
            <div class="infos-droite">
                <div class="ligne-haut">
                    <p class="nom-produit">${p.nom}</p>
                    <button class="btn-suppr" onclick="supprimerArticle(${p.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
                <p class="prix-produit">${parseFloat(p.prix).toFixed(2)} €</p>
                <div class="ligne-quantite">
                    <div class="controle-quantite">
                        <button onclick="changerQuantite(${p.id}, -1)">−</button>
                        <span>${p.quantite}</span>
                        <button onclick="changerQuantite(${p.id}, 1)">+</button>
                    </div>
                </div>
            </div>

        </div>
    `).join('');

    // Calcul total
    const montant = panier.reduce((acc, p) => acc + parseFloat(p.prix) * p.quantite, 0);
    if (totalEl) totalEl.textContent = montant.toFixed(2) + ' €';

    // Checkbox "Tout sélectionner"
    const checkboxTout = document.getElementById('checkbox-tout');
    if (checkboxTout) {
        checkboxTout.addEventListener('change', () => {
            document.querySelectorAll('.checkbox-produit').forEach(cb => {
                cb.checked = checkboxTout.checked;
            });
        });
    }
}

// ───── FONCTIONS GLOBALES ─────

window.supprimerArticle = function(id) {
    supprimerDuPanier(id);
};

window.changerQuantite = function(id, delta) {
    const panier = getPanier();
    const index = panier.findIndex(p => p.id === id);
    if (index !== -1) {
        panier[index].quantite += delta;
        if (panier[index].quantite <= 0) panier.splice(index, 1);
        savePanier(panier);
        mettreAJourBadge();
        initPagePanier();
    }
};

export default pagePanier;