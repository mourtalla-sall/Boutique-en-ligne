export default function UpdateProduits(){
    setTimeout(() => {
        fetchCategories();
        listenUpdate();
    }, 0);
    
    return initupdate(); 
}

export function initupdate () {
    return `
        <div class="auth-page">
            <div class="auth-container">
                <h1>Modifier un produit</h1>
                <div id="message-zone"></div>
                <form id="updateForm">
                    <input type="text" name="nom" placeholder="Nom du produit" required>
                    <select name="categorie" id="categorie" required>
                        <option value=""> Choisir une catégorie </option>
                    </select>
                    <input type="number" name="prix" placeholder="Prix" required>
                    <textarea name="description" placeholder="Description" required></textarea>
                    <input type="file" id="add-product-file" name="image">
                    <button id="submitUpdate" type="button" class="btn">Valider</button>
                </form>
                <a href="/Boutique-en-ligne/Front-end/Produits">
                    <button>Annuler</button>
                </a>
            </div>
        </div>
    `;
}

export async function fetchCategories() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const response = await fetch('/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?action=getCategories');
    const categories = await response.json();

    const select = document.getElementById('categorie');
    categories.forEach(cat => {
        select.innerHTML += `<option value="${cat.id_categorie}">${cat.nom}</option>`;
    });

    // Une fois les catégories chargées, on pré-remplit le formulaire
    if (id) {
        await getProduit(id);
    }
}

async function getProduit(id) {
    const response = await fetch(`/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?id=${id}`);
    const produit = await response.json();
     console.log(produit);
    document.querySelector('[name="nom"]').value = produit.nom;
    document.querySelector('[name="prix"]').value = produit.prix;
    document.querySelector('[name="description"]').value = produit.description;
    document.querySelector('[name="categorie"]').value = produit.id_categorie;
}

function listenUpdate() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const submitUpdate = document.getElementById("submitUpdate");
    if (submitUpdate) {
        submitUpdate.addEventListener('click', async (e) => {
            e.preventDefault();
            const form = document.getElementById("updateForm");
            const data = new FormData(form);
            data.append('id', id);

            const response = await fetch("/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php", {
                method: "POST",
                body: data
            });

            const result = await response.json();
            const messageZone = document.getElementById('message-zone');

            if (result.status === 'success') {
                messageZone.innerHTML = `<p class="success">Produit modifié avec succès !</p>`;
                document.getElementById("submitUpdate").reset();
            } else {
                messageZone.innerHTML = `<p class="error">${result.error}</p>`;
            }
        });
    }
}