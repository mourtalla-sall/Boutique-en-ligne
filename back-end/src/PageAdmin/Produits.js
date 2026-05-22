export default function Produits () {
    return `
       <table>
            <thead>
                <tr>
                    <th>id_produits</th>
                    <th>nom</th>
                    <th>description</th>
                    <th>prix</th>
                    <th>id_categorie</th>
                    <th>image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="produitsBody">
               
            </tbody>
        </table>
        
    `;
}
