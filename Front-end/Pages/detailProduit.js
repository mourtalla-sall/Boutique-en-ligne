const detailProduit = () => {
    return `
    <div class="container mt-5">
        <div class="row g-5">

            <!-- IMAGE -->
            <div class="col-md-6">
                <div class="image-produit">
                </div>
            </div>

            <!-- INFOS -->
            <div class="col-md-6 infos-produit">
                <h1></h1>
                <p class="categorie"></p>
                <div class="bloc-prix">
                    <span class="prix-actuel"></span>
                </div>
                <hr>
                <p class="description-produit"></p>

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
                    <option>Choisir une couleurs</option>
                    <option>Rouge</option>
                    <option>bleu</option>
                    <option>Noir</option>
                    <option>Marron</option>
                </select>

                <p><strong>Quantité :</strong></p>
                <input type="number" class="form-control mb-3">

                <button class="btn-panier">Ajouter au panier</button>

            </div>

        </div>
    </div>

    
    `;
}

export default detailProduit;