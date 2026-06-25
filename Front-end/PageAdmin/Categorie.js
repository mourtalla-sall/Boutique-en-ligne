export { initAfterRender } from './Admin.js'

export default function Produits() {
    return `
        <div id="main-content">
            <h1>Categorie</h1>
            <button><a href="/Boutique-en-ligne/admin/add-categorie" data-link class="btn-continuer">Ajout Catégorie</a></button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="categorieBody"></tbody>
            </table>
        </div>
    `;
}