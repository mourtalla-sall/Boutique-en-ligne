 const inscription = () => {
    return `
    
    <div class="connexion-wrapper">
        <div class="connexion-box">
            <h1>Inscription</h1>

        
            <form id = 'form-inscription' method="post">
                <label>Nom</label>
                <input type="text" name="lastName" placeholder="Votre nom" required>

                <label>Prénom</label>
                <input type="text" name="FirstName" placeholder="Votre prénom" required>

                <label>Email</label>
                <input type="email" name="email" placeholder="exemple@email.com" required>

                <label>Mot de passe</label>
                <input type="password" name="password" placeholder="••••••••" required>

                <label>Confirmer le mot de passe</label>
                <input type="password" name="confirm_password" placeholder="••••••••" required>

                <input type="submit" name="submit" value="S'inscrire">

                <p class="account">
                    Déjà un compte ? <a href="connexion.js">Se connecter</a>
                </p>
                <p id="msg-erreur" style="color: #ff4d4d; font-weight: bold; display: none; margin-bottom: 15px;"></p>
                <p id="msg-succes" style="color: #2ecc71; font-weight: bold; display: none; margin-bottom: 15px;"></p>
            </form>
        </div>
    </div>` }
    export function initInscriptionForm() {
    const form = document.getElementById('form-inscription');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault()

        const errorElement = document.getElementById('msg-erreur')
        const successElement = document.getElementById('msg-succes')

       
        errorElement.style.display = 'none'
        successElement.style.display = 'none'

        
        const formData = new FormData(form);

       
        fetch('/boutique-en-ligne/inscription.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) throw new Error("Erreur serveur HTTP")
            return response.json()
        })
        .then(data => {
           
            if (data.success) {
                successElement.textContent = data.message
                successElement.style.display = 'block'
                form.reset()
            } else {
                errorElement.textContent = data.message
                errorElement.style.display = 'block'
            }
        })
        .catch(error => {
            console.error('Erreur Fetch:', error)
            errorElement.textContent = "Impossible de joindre le serveur."
            errorElement.style.display = 'block'
        });
    });
}

export default inscription

    