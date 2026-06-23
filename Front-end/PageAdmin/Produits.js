export { initAfterRender } from './Admin.js'

export default function Produits() {
    return `
        <div id="main-content">
            <h1>Produits</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>description</th>
                        <th>prix</th>
                        <th>Categorie</th>
                        <th>image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="produitsBody"></tbody>
            </table>
        </div>
    `;
}