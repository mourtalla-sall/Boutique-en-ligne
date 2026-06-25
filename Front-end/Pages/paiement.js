let stripe;
let elements;

const URL_CREATE_PAYMENT = 'http://localhost/Boutique-en-ligne/back-end/src/Pages/create-payment.php';
const ROUTE_MERCI = '/Boutique-en-ligne/merci';

const pagePaiement = () => {
    const panier = JSON.parse(localStorage.getItem('panier')) || [];

    if (panier.length === 0) {
        return `
        <div class="page-paiement container py-5">
            <h2>Paiement</h2>
            <p>Votre panier est vide.</p>
            <a href="/Boutique-en-ligne/panier" data-link class="btn-continuer">Retour au panier</a>
        </div>
        `;
    }

    const total = panier.reduce((acc, p) => acc + parseFloat(p.prix) * p.quantite, 0);

    return `
    <div class="page-paiement container py-5">
        <h2>Paiement</h2>

        <div id="recap-panier">
            <ul>
                ${panier.map(p => `<li>${p.nom} × ${p.quantite} :  ${(p.prix * p.quantite).toFixed(2)} €</li>`).join('')}
            </ul>
            <p><strong>Total : ${total.toFixed(2)} €</strong></p>
        </div>

        <div id="chargement-formulaire">Chargement du formulaire de paiement...</div>

        <form id="payment-form" style="display:none;">
            <div id="card-element"></div>
            <div id="card-errors" role="alert" style="color:#e3342f; margin-top:10px;"></div>
            <button type="submit" id="submit-paiement" class="btn-payer" style="margin-top:16px;">
                Confirmer le paiement
            </button>
        </form>

        <p id="payment-message" style="font-weight:bold;"></p>
    </div>
    `;
};

export function initPagePaiement() {
    const panier = JSON.parse(localStorage.getItem('panier')) || [];

    if (panier.length === 0) {
        return; // rien à initialiser, le HTML affiche déjà "panier vide"
    }

    initialiserPaiementStripe(panier);
}

async function initialiserPaiementStripe(panier) {
    const chargement = document.getElementById('chargement-formulaire');
    const form = document.getElementById('payment-form');
    const cardErrors = document.getElementById('card-errors');

    try {
        const response = await fetch(URL_CREATE_PAYMENT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cart: panier })
        });

        const result = await response.json();

        if (result.error) {
            chargement.textContent = '';
            cardErrors.textContent = result.error;
            return;
        }

        stripe = Stripe(result.publicKey);
        elements = stripe.elements({ clientSecret: result.clientSecret });
        const paymentElement = elements.create('payment');
        paymentElement.mount('#card-element');

        // Affiche le formulaire dès que la carte Stripe est montée
        chargement.style.display = 'none';
        form.style.display = 'block';

    } catch (err) {
        chargement.textContent = '';
        cardErrors.textContent = "Impossible de charger le formulaire de paiement.";
        console.error(err);
    }
}

document.addEventListener('submit', async (e) => {
    if (e.target.id !== 'payment-form') return;
    e.preventDefault();

    const submitBtn = document.getElementById('submit-paiement');
    const cardErrors = document.getElementById('card-errors');
    const paymentMessage = document.getElementById('payment-message');

    submitBtn.disabled = true;
    submitBtn.textContent = 'Traitement...';

    const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: window.location.origin + ROUTE_MERCI,
        },
        redirect: 'if_required'
    });

    if (error) {
        cardErrors.textContent = error.message;
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirmer le paiement';
        return;
    }

    if (paymentIntent && paymentIntent.status === 'succeeded') {
        paymentMessage.textContent = 'Paiement réussi ! Redirection...';
        localStorage.removeItem('panier');

        const badge = document.querySelector('.pastille-panier');
        if (badge) badge.textContent = '';

        setTimeout(() => {
            history.pushState(null, null, ROUTE_MERCI);
            window.dispatchEvent(new PopStateEvent('popstate'));
        }, 1500);
    }
});

export default pagePaiement;