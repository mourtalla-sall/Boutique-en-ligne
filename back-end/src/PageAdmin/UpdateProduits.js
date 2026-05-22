export default function UpdateProduits () {
    return `
       
        <div class="auth-page">
            <div class="auth-container">
                <h1>Modifier un produits</h1>
                <div id="message-zone"></div>
                <form id="updateForm">
                    <input type="text" name="nom" placeholder="Nom du produits" required>
                    <select name="categorie" id="categorie" required>
                        <option value=""> Choisir une catégorie </option>
                    </select>
                    <input type="number" name="prix" placeholder="Le prix du produits" required>
                    <textarea name="description" placeholder="Description du produit" required></textarea>
                    <input type="file" id="add-product-file" name="image" required>
                   
                    <button id="submitUpdate" type="button" class="btn">Validez</button>
                </form>
            </div>
        </div>
    `;
}
export async function fetchCategories() {
    const response = await fetch('/php/Boutique-en-ligne/back-end/src/PageAdmin/Traitement.php?action=getCategories');
    const categories = await response.json();

    const select = document.getElementById('categorie');
    categories.forEach(cat => {
        select.innerHTML += `<option value="${cat.id_categorie}">${cat.nom}</option>`;
    });
}