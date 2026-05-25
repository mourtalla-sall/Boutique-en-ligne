
console.log('admin');

function fetchcall() {
    const submitForm = document.getElementById("submit-form");
    const fileUpload = document.getElementById("add-product-file");
    // fonction ajouter un produits 
    if (submitForm) {
        submitForm.addEventListener('click', async (e) => {
            e.preventDefault();
            const form = document.getElementById("produitsForm");
            const data = new FormData(form);

            console.log(fileUpload.files[0]);
            
            try {
                console.log(data,'hello')

                const response = await fetch("http://localhost/php/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php", {
                    method: "POST",
                    body: data
                });

                const result = await response.json();
                const messageZone = document.getElementById('message-zone')
                if (result.success === true) {  
                    messageZone.innerHTML = `<p class="success">Produit ajouté avec succès !</p>`;
                    document.getElementById("produitsForm").reset();
                } else {
                        messageZone.innerHTML = `<p class="error">${result.error}</p>`; 
                    }
            } catch (error) {

                console.error(error);

            }

        });

    }
    console.log('modifier');
   // Récupérer l'id 
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id, "id produit");
    

    // Pré-remplir le formulaire avec les données du produit
    async function getProduit() {
        try {
            const response = await fetch(`http://localhost/php/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?id=${id}`);
            const produit = await response.json();

            document.querySelector('[name="nom"]').value = produit.nom;
            document.querySelector('[name="prix"]').value = produit.prix;
            document.querySelector('[name="description"]').value = produit.description;
            document.querySelector('[name="categorie"]').value = produit.id_categorie;

        } catch (error) {
            console.error(error);
        }
    }

    // Charger les catégories dans le select
    async function getCategories() {
        try {
            const response = await fetch("http://localhost/php/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php?action=getCategories");
            const categories = await response.json();

            const select = document.getElementById("categorie");
            if (select) {
                categories.forEach((cat) => {
                    select.innerHTML += `<option value="${cat.id_categorie}">${cat.nom}</option>`;
                });
            }

            // Pré-remplir après chargement des catégories
            getProduit();

        } catch (error) {
            console.error(error);
        }
    }

    getCategories();

    // Modifier un produit
    const submitUpdate = document.getElementById("submitUpdate");

    if (submitUpdate) {
        submitUpdate.addEventListener('click', async (e) => {
            e.preventDefault();
            const form = document.getElementById("updateForm");
            const data = new FormData(form);
            data.append('id', id);
            console.log('apres modifier');

            try {
                const response = await fetch("http://localhost/php/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php", {
                    method: "POST",
                    body: data
                });

                const result = await response.json();

                const messageZone = document.getElementById('message-zone')
                if (result.success === true) {  
                    messageZone.innerHTML = `<p class="success">Produit modifié succès !</p>`;
                  
                } else {
                        messageZone.innerHTML = `<p class="error">${result.error}</p>`; 
                }

            } catch (error) {
                console.error(error);
            }
        });
    }
    console.log('avant');
    
    async function getProduits() {
        try {
            const response = await fetch("http://localhost/php/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php");
            const produits = await response.json();
            console.log(produits, 'sall');
            console.log(typeof produits, 'sall');
            
            const tbody = document.getElementById("produitsBody");
            tbody.innerHTML = "";

            produits.forEach((produit) => {
                tbody.innerHTML += `
                    <tr>
                        <td>${produit.id_produits}</td>
                        <td>${produit.nom}</td>
                        <td>${produit.description}</td>
                        <td>${produit.prix} €</td>
                        <td>${produit.nom_categorie}</td>
                        <td><img src="/php/Boutique-en-ligne/Front-end/public/images/${produit.image}" alt="${produit.nom}" width="50"></td>
                        <td>
                        <a href="/php/Boutique-en-ligne/Front-end/PageAdmin/UpdateProduits.html?id=${produit.id_produits}">
                            <button>Éditer</button>
                        </a>
                            <button onclick="supprimer(${produit.id_produits})">Supprimer</button>
                        </td>
                    </tr>
                `;
            });

        } catch (error) {
            console.error(error);
        }
    }

    getProduits();
}

fetchcall();






               