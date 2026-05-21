console.log('script.js');


import AddProduits, { fetchCategories } from '../back-end/src/PageAdmin/AddProduits';

document.getElementById('main-container').innerHTML = AddProduits();

fetchCategories();
