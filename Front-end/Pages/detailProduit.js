const detailProduit = () => {
    return `
    <div class="container mt-5">
        <div class="row g-5">

            <!-- IMAGE -->
            <div class="col-md-6">
                <div class="image-produit">
                    <img id="detail-image" src="" alt="" class="img-fluid">
                </div>
            </div>

            <!-- INFOS -->
            <div class="col-md-6 infos-produit">
                <span id="detail-categorie" class="categorie"></span>
                <h1 id="detail-nom"></h1>
                <div class="bloc-prix">
                    <span id="detail-prix" class="prix-actuel"></span>
                </div>
                <hr>
                <p id="detail-description" class="description-produit"></p>

                <p><strong>Taille :</strong></p>
                <select class="form-select mb-3">
                    <option>Choisir une taille</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>

                <p><strong>Couleur :</strong></p>
                <select class="form-select mb-3">
                    <option>Choisir une couleur</option>
                    <option>Rouge</option>
                    <option>Bleu</option>
                    <option>Noir</option>
                    <option>Marron</option>
                </select>

                <p><strong>Quantité :</strong></p>
                <input type="number" class="form-control mb-3" value="1" min="1">

                <button class="btn-panier">Ajouter au panier</button>
            </div>

        </div>
    </div>
    `;
};

// Appelée depuis le router après injection du HTML
export async function chargerDetailProduit() {
    const params = new URLSearchParams(window.location.search);
    const id  = params.get('id');

    if (!id) return;

    try {
        const response = await fetch(
            `http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?id=${id}`
        );
        const produit = await response.json();

        document.getElementById('detail-nom').textContent = produit.nom;
        document.getElementById('detail-prix').textContent = parseFloat(produit.prix).toFixed(2) + ' €';
        document.getElementById('detail-description').textContent = produit.description;
        document.getElementById('detail-categorie').textContent = produit.nom_categorie || '';
        
        const img = document.getElementById('detail-image');
        img.src = `/Boutique-en-ligne/Front-end/public/images/${produit.image}`;
        img.alt = produit.nom;

    } catch (error) {
        console.error("Erreur chargement produit :", error);
    }
}

export default detailProduit;