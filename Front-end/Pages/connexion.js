
    const connexion = () => {
    return `<h1>Connexion</h1>
    
       

        <form method="post">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>

            <label for="password">Mot de passe</label>
            <input type="password" id="password" name="password" required>

            <input type="submit" name="submit" value="Se connecter">

            <p class="account">
                Pas de compte ? <a href="inscription.php">S'inscrire</a>
            </p>
        </form>`
     }

    export default connexion