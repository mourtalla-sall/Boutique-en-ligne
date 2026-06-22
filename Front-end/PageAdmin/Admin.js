// Fonction principale exportée pour le routeur
export function initAfterRender() {
    fetchcall();
}

// Suppression
async function confirmerSuppression(id) {
    const ok = confirm("Voulez-vous vraiment supprimer ce produit ?");
    if (!ok) return;

    const response = await fetch(
        `http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?action=delete&id=${id}`
    );
    const result = await response.json();

    if (result.status === 'success') {
        alert("Produit supprimé !");
        fetchcall();
    }
}
window.confirmerSuppression = confirmerSuppression;

// Affichage des produits (page catalogue)
async function AfficheProduit() {
    const container = document.getElementById("grille-produits");
    if (!container) return;

    try {
        const response = await fetch(
            "http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php"
        );
        const produits = await response.json();

        if (!produits || produits.length === 0) {
            container.innerHTML = `<p class="aucun-produit">Aucun produit disponible.</p>`;
            return;
        }

        container.innerHTML = "";

        produits.forEach((produit, index) => {
            const carte = document.createElement("div");
            carte.classList.add("carte-produit");
            carte.setAttribute("data-categorie", (produit.nom_categorie || "").toLowerCase());
            carte.style.animationDelay = `${index * 0.08}s`;

            carte.innerHTML = `
                <div class="carte-produit__image">
                    <img
                        src="/Boutique-en-ligne/Front-end/public/images/${produit.image}"
                        alt="${produit.nom}"
                        loading="lazy"
                    >
                    <span class="carte-produit__badge">${produit.nom_categorie || ""}</span>
                </div>
                <div class="carte-produit__infos">
                    <h3 class="carte-produit__nom">${produit.nom}</h3>
                    <p class="carte-produit__description">${produit.description}</p>
                    <span class="carte-produit__prix">${parseFloat(produit.prix).toFixed(2)} €</span>
                    <div class="carte-produit__footer">
                        <a href="/Boutique-en-ligne/Front-end/detailProduit?id=${produit.id_produits}" class="bouton-voir">
                            Voir le produit
                        </a>
                        <button
                            class="bouton-panier"
                            onclick="ajouterAuPanier(${produit.id_produits})"
                        >
                            <i class="bi bi-cart3"></i>
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(carte);
        });

        initFiltres();

    } catch (error) {
        console.error("Erreur AfficheProduit :", error);
        container.innerHTML = `<p class="erreur-produit">Impossible de charger les produits.</p>`;
    }
}

function initFiltres() {
    const boutons = document.querySelectorAll(".bouton-filtre");
    const cartes  = document.querySelectorAll(".carte-produit");

    boutons.forEach((btn) => {
        btn.addEventListener("click", () => {
            boutons.forEach((b) => b.classList.remove("actif"));
            btn.classList.add("actif");

            const filtre = btn.getAttribute("data-filtre");

            cartes.forEach((carte) => {
                const cat = carte.getAttribute("data-categorie") || "";
                if (filtre === "tous" || cat.includes(filtre)) {
                    carte.style.display = "";
                } else {
                    carte.style.display = "none";
                }
            });
        });
    });
}

function ajouterAuPanier(idProduit) {
    console.log("Ajout au panier, id :", idProduit);
    // TODO: appel fetch vers ton endpoint panier
}

// Formulaires admin + tableau produits
function fetchcall() {

    /* ---- Ajout produit ---- */
    const submitForm = document.getElementById("submit-form");
    if (submitForm) {
        submitForm.addEventListener('click', async (e) => {
            e.preventDefault();
            const form   = document.getElementById("produitsForm");
            const fileUpload = document.getElementById("fileUpload");
            const data  = new FormData(form);
            console.log(fileUpload?.files[0]);

            try {
                const response = await fetch(
                    "http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php",
                    { method: "POST", body: data }
                );
                const result = await response.json();
                const messageZone = document.getElementById('message-zone');

                if (result.success === true) {
                    messageZone.innerHTML = `<p class="success">Produit ajouté avec succès !</p>`;
                    form.reset();
                } else {
                    messageZone.innerHTML = `<p class="error">${result.error}</p>`;
                }
            } catch (error) {
                console.error(error);
            }
        });
    }

    /* ---- Lecture de l'id en query string ---- */
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    /* ---- Récupère un produit par id ---- */
    async function getProduit() {
        try {
            const response = await fetch(
                `http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?id=${id}`
            );
            const produit = await response.json();
            document.querySelector('[name="nom"]').value = produit.nom;
            document.querySelector('[name="prix"]').value = produit.prix;
            document.querySelector('[name="description"]').value = produit.description;
            document.querySelector('[name="categorie"]').value  = produit.id_categorie;
        } catch (error) {
            console.error(error);
        }
    }

    /* ---- Peuple le <select> catégories ---- */
    async function getCategories() {
        try {
            const response   = await fetch(
                "http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?action=getCategories"
            );
            const categories = await response.json();
            const select     = document.getElementById("categorie");

            if (select) {
                categories.forEach((cat) => {
                    select.innerHTML += `<option value="${cat.id_categorie}">${cat.nom}</option>`;
                });
            }
            if (id) getProduit();
        } catch (error) {
            console.error(error);
        }
    }

    getCategories();

    /* ---- Modification produit ---- */
    const submitUpdate = document.getElementById("submitUpdate");
    if (submitUpdate) {
        submitUpdate.addEventListener('click', async (e) => {
            e.preventDefault();
            const form = document.getElementById("updateForm");
            const data = new FormData(form);
            data.append('id', id);

            try {
                const response = await fetch(
                    "http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php",
                    { method: "POST", body: data }
                );
                const result      = await response.json();
                const messageZone = document.getElementById('message-zone');

                if (result.success === true) {
                    messageZone.innerHTML = `<p class="success">Produit modifié avec succès !</p>`;
                } else {
                    messageZone.innerHTML = `<p class="error">${result.error}</p>`;
                }
            } catch (error) {
                console.error(error);
            }
        });
    }

    /* ---- Tableau admin des produits ---- */
    async function getProduits() {
        try {
            const response = await fetch(
                "http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php"
            );
            const produits = await response.json();
            const tbody    = document.getElementById("produitsBody");
            if (!tbody) return;

            tbody.innerHTML = "";
            produits.forEach((produit) => {
                tbody.innerHTML += `
                    <tr>
                        <td>${produit.id_produits}</td>
                        <td>${produit.nom}</td>
                        <td>${produit.description}</td>
                        <td>${produit.prix} €</td>
                        <td>${produit.nom_categorie}</td>
                        <td>
                            <img
                                src="/Boutique-en-ligne/Front-end/public/images/${produit.image}"
                                alt="${produit.nom}"
                                width="50"
                            >
                        </td>
                        <td>
                            <button class="btn-edit" onclick="goToUpdate(${produit.id_produits})">Modifier</button>
                            <button class="btn-delete" onclick="confirmerSuppression(${produit.id_produits})">Supprimer</button>
                        </td>
                    </tr>
                `;
            });
        } catch (error) {
            console.error(error);
        }
    }

    getProduits(); 

    window.goToUpdate = (id) => {
        const path = `/Boutique-en-ligne/Front-end/UpdateProduits?id=${id}`;
        window.history.pushState({}, "", path);

        const mainContent = document.getElementById("main-content");

        import("./UpdateProduits.js").then(module => {
            mainContent.innerHTML = module.default();
            if (module.initAfterRender) module.initAfterRender();
        });
    };
}

export { AfficheProduit, fetchcall };