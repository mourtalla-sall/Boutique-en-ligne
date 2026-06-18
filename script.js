import { mettreAJourBadge } from './Front-end/Pages/Panier.js';

document.addEventListener('DOMContentLoaded', () => {
    mettreAJourBadge();
});

window.addEventListener('popstate', () => {
    mettreAJourBadge();
});