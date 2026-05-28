export function initAutocomplete() {
    // 1. On attrape l'input de recherche
    const searchInput = document.getElementById('site-search') ; 
    
    // 2. On attrape la zone où s'afficheront les suggestions
    const suggestionsInput = document.getElementById('suggestions') ;

    // On vérifie que la barre de recherche existe bien sur la page avant de coder la suite
    if (searchInput) {
        console.log("Barre de recherche trouvée !");
    
    
}
searchInput.addEventListener("input", function() {
    let valeurTapee = searchInput.value

    
    console.log("L'utilisateur a tapé :", valeurTapee); 
});  
}
fetch('Database.php?query=' + valeurTapee)
    .then(response => response.json())
    .then(data => {
        console.log("Données reçues du PHP :", data);
    });