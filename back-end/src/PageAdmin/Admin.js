
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

                const response = await fetch("http://localhost/php/Boutique-en-ligne/back-end/src/PageAdmin/Traitement.php", {
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
    
    // // fonction modifier un produit
    // if (submitUpdate) { 
    //    submitUpdate.addEventListener('click', async (e) => { 
    //         e.preventDefault();
    //         const form = document.getElementById("updateForm");
    //         const data = new FormData(form);
    //             console.log('apres modifier');

    //         try {
    //             const response = await fetch("http://localhost/php/Boutique-en-ligne/back-end/src/PageAdmin/Traitement.php", { 
    //                 method: "POST",
    //                 body: data
    //             });

    //             const result = await response.json();

    //             if (result.success === true) {
    //                 afficherMessage('success', 'Produit modifié avec succès !'); 
    //                 form.reset(); //  reset du bon formulaire
    //             } else {
    //                 afficherMessage('error', result.error);
    //             }

    //         } catch (error) {
    //             console.error(error);
    //         }
    //     });
    // }
    console.log('avant');
    
    async function getProduits() {
        try {
            const response = await fetch("http://localhost/php/Boutique-en-ligne/back-end/src/PageAdmin/Traitement.php");
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
                        <td>${produit.id_categorie}</td>
                        <td><img src="../../../Front-end/public/images/${produit.image}" alt="${produit.nom}" width="50"></td>
                        <td>
                            <button onclick="editer(${produit.id_produits})">Éditer</button>
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



// async function getDataContact() {
//     try {
//         const response = await fetch('Traitement.php');
        
//         if (!response.ok) {
//             throw new Error('Erreur: ' + response.status);
//         }

//         const dataContact = await response.json();
//         console.log(dataContact);

//         // remplit pagination avec les contacts
//         pagination = dataContact;

//         // affiche la première page
//         change(1);

//     } catch (error) {
//         console.error('ERREUR:', error.message);
//     }
// }

// getDataContact(); 
// fetchcall();

// });



               