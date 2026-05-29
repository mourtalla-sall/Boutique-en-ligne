export function initAutocomplete() {

    const searchInput = document.getElementById('site-search') ; 
   
    const suggestionsInput = document.getElementById('suggestions') ;

    if (searchInput) {
        console.log("Barre de recherche trouvée !");
    

searchInput.addEventListener("input", function() {
    let valeurTapee = searchInput.value

    
    console.log("L'utilisateur a tapé :", valeurTapee); 
}) 

fetch('autocompletion.php?query=' + valeurTapee)
    .then(response => response.json())
    .then(data => {
        console.log("Données reçues du PHP :", data);
    })}}