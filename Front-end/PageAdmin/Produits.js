export default function Produits () {
    return `
        <a href="/Boutique-en-ligne/Front-end/AddProduits">
            <button>Add Produits</button>
         </a>
       <table>
            <thead>
                <tr>
                    <th>id_produits</th>
                    <th>nom</th>
                    <th>description</th>
                    <th>prix</th>
                    <th>Categorie</th>
                    <th>image</th>  
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="produitsBody">
               
            </tbody>
        </table>
        
    `;
}
