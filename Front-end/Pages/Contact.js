const Contact = () => {
    return ` <div class="connexion-wrapper">
        <div class="connexion-box">

            <h1>Contact</h1>

            <form id="form-connexion" method="post">

                <label for="email">Prenom</label>
                <input type="text"  name="prenom" required>

                <label for="email">Nom</label>
                <input type="text"  name="nom" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="story">Message</label>

                <textarea id="story" name="story" rows="5" cols="33">
                votre message svp...
                </textarea>

                <input type="submit" value="Envoyer">

              

                

            </form>

        </div>
    </div>
    `;
};

export default Contact