
console.log('admin');

  function fetchcall() {

    const submitForm = document.getElementById("submit-form");
    const fileUpload = document.getElementById("add-product-file");

    if (submitForm) {

        submitForm.addEventListener('click', async (e) => {

            e.preventDefault();

            const form = document.getElementById("produitsForm");

            const data = new FormData(form);

            // OR manually:
            // data.append("image", fileUpload.files[0]);
            console.log(fileUpload.files[0]);
            
            try {
                console.log(data,'hello')

                const response = await fetch("http://localhost/php/boutique-en-ligne/back-end/src/PageAdmin/Traitement.php", {
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



               