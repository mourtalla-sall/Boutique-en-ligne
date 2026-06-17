export function initAutocomplete() {

    const searchInput = document.getElementById('site-search') ; 
   
    const suggestionsInput = document.getElementById('suggestions') ;

    if (searchInput && suggestionsInput) {
        console.log("Barre de recherche et container trouvé !");
    

    searchInput.addEventListener("input", function(){ 
    let valeurTapee = searchInput.value
    
    if (valeurTapee.length > 0) {
         fetch('/boutique-en-ligne/autocompletion.php?query=' + valeurTapee)
    .then(response => response.json())
    .then(data => {
        console.log("Données reçues du PHP :", data);
         suggestionsInput.classList.remove('d-none');
         suggestionsInput.innerHTML = '';
    if (data.length > 0) {
        data.forEach(produit => {
            
            const suggestionItem = document.createElement('div');
            
           
            suggestionItem.classList.add('suggestion-item'); 
             suggestionItem.style.padding = "8px 12px";
            suggestionItem.style.cursor = "pointer";
            
            suggestionItem.textContent = produit.nom;
           

            
            suggestionItem.addEventListener('click', function() {
                searchInput.value = produit.nom;
                suggestionsInput.classList.add('d-none'); 
                window.location.href = "produit.php?id=" + produit.id;
            });

            suggestionsInput.appendChild(suggestionItem);
            
        });
    } else {
        
        suggestionsInput.innerHTML = "<div class='no-result'>Aucun produit trouvé</div>";
    }

    })
               
               
            } else {
                
                suggestionsInput.classList.add('d-none');
                suggestionsInput.innerHTML = ''; 
            }
    
    console.log("L'utilisateur a tapé :", valeurTapee)
    


        })
    }
}
const monFormulaire = document.querySelector('form'); 

if (monFormulaire) {
    monFormulaire.addEventListener('submit', function(event) {
       
        event.preventDefault(); 
    });
}