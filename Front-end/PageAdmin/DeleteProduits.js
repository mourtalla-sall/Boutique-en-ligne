console.log("deleteproduits");

export default function DeleteProduits(){
    setTimeout(() => {
        listenDelete();
    }, 0);
    
    return initDelete(); 
}

export function initDelete () {
    return `
        <div class="auth-page">
            <div class="auth-container">
                <h1>Supprimer un produit</h1>
                <div id="message-zone"></div>
                <div id="produit-info"></div>
                    <button id="confirm-delete" type="button" class="btn">Confirmer la suppression</button>
                <a href="/Boutique-en-ligne/Front-end/Produits">
                    <button>Annuler</button>
                </a>
            </div>
        </div>
    `;
}

function listenDelete(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const confirmDelete = document.getElementById("confirm-delete");

    if (confirmDelete) {
        confirmDelete.addEventListener('click', async (e) => {
            e.preventDefault();

            try {
                const response = await fetch(`http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?action=delete&id=${id}`);
                
                const result = await response.json();
                console.log(result);

                const messageZone = document.getElementById('message-zone');

                if (result.status === 'success') {
                    messageZone.innerHTML = `<p class="success">Produit supprimé avec succès !</p>`;
                } else {
                    messageZone.innerHTML = `<p class="error">${result.error}</p>`;
                }

            } catch (error) {
                console.error(error);
            }
        });
    }
}