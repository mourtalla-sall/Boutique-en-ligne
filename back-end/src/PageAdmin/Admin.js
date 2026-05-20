document.addEventListener('DOMContentLoaded', function() {
console.log('admin');

    function fetchcall() {
        const submitForm = document.getElementById("submit-form");
        if (submitForm) {
            submitForm.addEventListener('click', async (e) => {
                e.preventDefault();

                async function envoyerDonnees() {
                    const data = new FormData(document.getElementById("produitsForm"));
                    const obj = Object.fromEntries(data);
                    console.log('Données envoyées:', obj)

                    try {
                        const response = await fetch("/php/Boutique-en-ligne/back-end/src/PageAdmin/Traitement.php", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(obj)
                        });
                         const text = await response.text();
                        console.log('Réponse brute PHP:', text);
                        if (!response.ok) {
                            throw new Error(`Erreur HTTP: ${response.status}`);
                        }

                        const result = await response.json();
                          
                        const messageZone = document.getElementById('message-zone');

                        if (result.status === "success") {
                            messageZone.innerHTML = `<p class="success">${result.message}</p>`;

                            let container = document.getElementById('tableauxContact');
                            let tr = document.createElement("tr");
                            let td = document.createElement("td");
                            td.innerHTML = "toto";
                            tr.appendChild(td);
                            container.appendChild(tr);

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

    fetchcall();
});


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



               