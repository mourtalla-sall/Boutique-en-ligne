
console.log("addCategorie");

export default function AddCategorie(){
    setTimeout(() => {
        // fetchCategories();
        listenForm();
    }, 0);
    
    return initAdd(); 
}

export function initAdd () {
    return `
    
        <div class="auth-page">
            <div class="auth-container">
                <h1>Ajout Categorie</h1>
                <div id="message-zone"></div>
                <form id="categorieForm">
                    <input type="text" name="nom" placeholder="Nom du produits" required>   
                    <button id="submit-formCategorie" type="button" class="btn">Validez</button>
                    <button><a href="/Boutique-en-ligne/admin/categories" data-link class="btn">Annuler</a></button>

                </form>
              
            </div>
        </div>
    `;
}


function listenForm(){

        const submitForm = document.getElementById("submit-formCategorie");
        // console.log(submitForm,'yoyo')
        if (submitForm) {
            console.log("envoyez donnez");
            submitForm.addEventListener('click', async (e) => {
        e.preventDefault();
        
        const form = document.getElementById("categorieForm");
        
        const data = new FormData(form);
        
        // console.log(fileUpload.files[0]);
        
        try {
            // console.log(data,'hello')
            
            const response = await fetch("http://localhost/Boutique-en-ligne/back-end/src/Traitement.php?action=addCategorie", {
                method: "POST",
                body: data
            });
            
            const result = await response.json();
            console.log(result);
            
           const messageZone = document.getElementById('message-zone');

            if (result.status === 'success') {  
                messageZone.innerHTML = `<p class="success">Categorie ajouté avec succès !</p>`;
                document.getElementById("categorieForm").reset();
            } else {
                messageZone.innerHTML = `<p class="error">${result.message}</p>`;
            }
            
        } catch (error) {
            
            console.error(error);
            
        }
        
    }); 

    } 
    } 
