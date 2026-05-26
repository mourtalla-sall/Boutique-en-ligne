console.log('script.js');


import AddProduits, { fetchCategories } from './compents/AddProduits';

document.getElementById('root').innerHTML = AddProduits();

fetchCategories();
