document.addEventListener('DOMContentLoaded', function() {
console.log("admin")

const BASE_PATH = 'localhost/php/Boutique-en-ligne'

function fetchcall() {
    const submitForm = document.getElementById("submit-form");
    if (submitForm) {
        submitForm.addEventListener('click', async (e) => {
            e.preventDefault();

            async function envoyerDonnees() {
                const data = new FormData(document.getElementById("produitsForm"));
                const obj = Object.fromEntries(data);

                try {
                    const response = await fetch("/php/Boutique-en-ligne/src/PageAdmin/Traitement.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(obj)
                    });

                    if (!response.ok) {
                        throw new Error(`Erreur HTTP: ${response.status}`);
                    }

                    const result = await response.json();
                    const messageZone = document.getElementById('message-zone');
                    if (result.status === "success") {

                        messageZone.innerHTML = `<p class="success">${result.message}</p>`;
                        let container  = document.getElementById('tableauxContact')
                        let tr = document.createElement("tr")
                        let td = document.createElement("td")

                        tr.appendChild(td)
                        td.innerHTML = "toto"
                        container.appendChild(tr)

                    } else {
                        messageZone.innerHTML = `<p class="error">${result.message}</p>`;
                    }
                } catch (error) {
                    console.error("Erreur lors de l'envoi:", error.message);
                }
            }

            envoyerDonnees();
        });
    }

}


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
fetchcall();

});



               