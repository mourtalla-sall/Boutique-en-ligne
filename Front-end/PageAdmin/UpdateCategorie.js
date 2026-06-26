console.log("UpdateCategorie");

export default function UpdateCategorie(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
    setTimeout(() => {
        fetchCategorie(id);
        listenForm(id);
    }, 0);
    
    return initUpdate(); 
}

export function initAfterRender() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    fetchCategorie(id);
    listenForm(id);
}

export function initUpdate () {
    return `
        <div class="auth-page">
            <div class="auth-container">
                <h1>Modifier Categorie</h1>
                <div id="message-zone"></div>
                <form id="categorieForm">
                    <input type="text" id="nom" name="nom" placeholder="Nom de la catégorie" required>   
                    <button id="submit-formCategorie" type="button" class="btn">Modifier</button>
                    <button><a href="/Boutique-en-ligne/admin/categories" data-link class="btn">Annuler</a></button>
                </form>
            </div>
        </div>
    `;
}

async function fetchCategorie(id) {
    try {
        const response = await fetch(
            `http://localhost/Boutique-en-ligne/back-end/src/Traitement.php?action=getCategorie&id=${id}`
        );
        const data = await response.json();
        document.getElementById('nom').value = data.nom;
    } catch (error) {
        console.error("Erreur chargement catégorie:", error);
    }
}

function listenForm(id){
    const submitForm = document.getElementById("submit-formCategorie");

    if (submitForm) {
        submitForm.addEventListener('click', async (e) => {
            e.preventDefault();
            
            const form = document.getElementById("categorieForm");
            const data = new FormData(form);
            
            try {
                const response = await fetch(
                    `http://localhost/Boutique-en-ligne/back-end/src/Traitement.php?action=updateCategorie&id=${id}`,
                    { method: "POST", body: data }
                );
                
                const result = await response.json();
                const messageZone = document.getElementById('message-zone');

                if (result.status === 'success') {  
                    messageZone.innerHTML = `<p class="success">Catégorie modifiée avec succès !</p>`;
                } else {
                    messageZone.innerHTML = `<p class="error">${result.message}</p>`;
                }
            } catch (error) {
                console.error(error);
            }
        }); 
    } 
}