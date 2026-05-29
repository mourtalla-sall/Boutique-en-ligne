console.log('admin');

async function confirmerSuppression(id) {
    const ok = confirm("Voulez-vous vraiment supprimer ce produit ?");
    if (!ok) return;
    const response = await fetch(`http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?action=delete&id=${id}`);
    const text = await response.json();
    if (result.status === 'success') {
        alert("Produit supprimé !");
        fetchcall(); 
    }
}
window.confirmerSuppression = confirmerSuppression;
function fetchcall() {
    console.log("jhklmù");

    async function getProduitsAdmin() {
        try {
            const response = await fetch("http://localhost/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php");
            const produits = await response.json();

            const tbody = document.getElementById("produitsBody");
            if (!tbody) return;
            tbody.innerHTML = "";

            produits.forEach((produit) => {
                tbody.innerHTML += `
                    <tr>
                        <td>${produit.id_produits}</td>
                        <td>${produit.nom}</td>
                        <td>${produit.description}</td>
                        <td>${produit.prix} €</td>
                        <td>${produit.nom_categorie}</td>
                        <td><img src="/Boutique-en-ligne/Front-end/public/images/${produit.image}" alt="${produit.nom}" width="50"></td>
                        <td>
                            <a href="/Boutique-en-ligne/Front-end/UpdateProduits?id=${produit.id_produits}">
                                <button>Éditer</button>
                            </a>
                            <button onclick="confirmerSuppression(${produit.id_produits})">Supprimer</button>
                        </td>
                    </tr>
                `;
            });

        } catch (error) {
            console.error(error);
        }
    }
    getProduitsAdmin();
}

fetchcall();