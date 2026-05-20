export default function AddProduits () {
    return `
       
        <div class="auth-page">
            <div class="auth-container">
                <h1>Ajout Produits</h1>
                <div id="message-zone"></div>
                <form id="produitsForm">
                    <input type="text" name="nom" placeholder="Nom du produits" required>
                    <input type="text" name="description" placeholder="Description du produits" required>
                    <input type="number" name="prix" placeholder="Le prix du produits" required>
                    <select name="categorie" id="categorie" required>
                        <option value="">Choisir une catégorie </option>
                    </select>

                    <button id="submit-form" type="button" class="btn">Validez</button>
                </form>
            </div>
        </div>
    `;
}