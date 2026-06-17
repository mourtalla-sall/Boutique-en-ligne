
    const connexion = () => {
    return `
    <div class="connexion-wrapper">
        <div class="connexion-box">

            <h1>Connexion</h1>

            <form id="form-connexion" method="post">

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="password">Mot de passe</label>
                <input type="password" id="password" name="password" required>

                <input type="submit" value="Se connecter">

                <p id="msg-erreur"></p>
                <p id="msg-succes"></p>

                <p class="account">
                    Pas de compte ?
                    <a href="#/inscription">S'inscrire</a>
                </p>

            </form>

        </div>
    </div>
    `;
};
export function initConnexionForm() {
    const form = document.getElementById('form-connexion')
    if (!form) return

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const errorElement = document.getElementById('msg-erreur');
        const successElement = document.getElementById('msg-succes');

        errorElement.style.display = 'none'
        successElement.style.display = 'none'

        const formData = new FormData(form)

        
        fetch('/boutique-en-ligne/connexion.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) throw new Error("Erreur serveur HTTP")
            return response.json();
        })
        .then(data => {
            if (data.success) {
                successElement.textContent = data.message
                successElement.style.display = 'block'
                form.reset();
                
            } else {
                errorElement.textContent = data.message
                errorElement.style.display = 'block'
            }
        })
        .catch(error => {
            console.error('Erreur Fetch:', error)
            errorElement.textContent = "Impossible de joindre le serveur."
            errorElement.style.display = 'block'
        })
    })
}
    export default connexion