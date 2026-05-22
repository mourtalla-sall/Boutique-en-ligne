const Home = () => {
    return ` <h1>Bienvenue chez lamal</h1>
        <p class="p">Découvrez les meilleurs vetements.</p>
        <a href="/boutique-en-ligne/boutique" class="fil">Decouvrez</a>
        
      `
}

export default Home



export function afterRender() {

    let search = document.getElementById("search");
    let suggestions = document.getElementById("suggestions");

    search.addEventListener("input", async function () {

        let value = search.value;

        if (value === "") {
            suggestions.innerHTML = "";
            return;
        }

        let response = await fetch("http://localhost/Boutique-en-ligne/api/public/index.php?action=search&name=" + value);
        let data = await response.json();

        suggestions.innerHTML = "";

        for (let i = 0; i < data.length; i++) {

            let contact = data[i];

            let div = document.createElement("div");
            div.textContent = contact.nom + " " + contact.prenom;

            div.onclick = function () {
                search.value = contact.nom + " " + contact.prenom;
                suggestions.innerHTML = "";
            };

            suggestions.appendChild(div);
        }
    });
}

setTimeout(()=>{
afterRender()
},500)