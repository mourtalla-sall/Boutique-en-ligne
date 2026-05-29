console.log("addproduits");

export default function AddProduits(){
    setTimeout(() => {
        fetchCategories();
        listenForm();
    }, 0);
    
    return initAdd(); 
}

export function initAdd () {
    return `
       
        <div class="auth-page">
            <div class="auth-container">
                <h1>Ajout Produits</h1>
                <div id="message-zone"></div>
                <form id="produitsForm">
                    <input type="text" name="nom" placeholder="Nom du produits" required>
                    <select name="categorie" id="categorie" required>
                        <option value=""> Choisir une catégorie </option>
                    </select>
                    <input type="number" name="prix" placeholder="Le prix du produits" required>
                    <textarea name="description" placeholder="Description du produit" required></textarea>
                    <input type="file" id="add-product-file" name="image" required>
                   
                    <button id="submit-form" type="button" class="btn">Validez</button>
                </form>
                <a href="/Boutique-en-ligne/Front-end/Produits">
                     <button>Annuler</button>
                </a>
            </div>
        </div>
    `;
}
export async function fetchCategories() {
    const response = await fetch('http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?action=getCategories');
    const categories = await response.json();

    const select = document.getElementById('categorie');
    categories.forEach(cat => {
        select.innerHTML += `<option value="${cat.id_categorie}">${cat.nom}</option>`;
    });
}


function listenForm(){

        const submitForm = document.getElementById("submit-form");
        console.log(submitForm,'yoyo')
        if (submitForm) {
            console.log("envoyez donnez");
            
            submitForm.addEventListener('click', async (e) => {
        
        e.preventDefault();
        
        const form = document.getElementById("produitsForm");
        
        const data = new FormData(form);
        
        // console.log(fileUpload.files[0]);
        
        try {
            console.log(data,'hello')
            
            const response = await fetch("http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php", {
                method: "POST",
                body: data
            });
            
            const result = await response.json();
            console.log(result);
            
           const messageZone = document.getElementById('message-zone');

            if (result.status === 'success') {  
                messageZone.innerHTML = `<p class="success">Produit ajouté avec succès !</p>`;
                document.getElementById("produitsForm").reset();
            } else {
                messageZone.innerHTML = `<p class="error">${result.message}</p>`;
            }
            
        } catch (error) {
            
            console.error(error);
            
        }
        
    }); 

    } 

}