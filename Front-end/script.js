
    // import AddProduits, { fetchCategories } from '../back-end/src/PageAdmin/AddProduits';
    import UpdateProduits from './PageAdmin/UpdateProduits';
    import Produits from './PageAdmin/Produits';

document.addEventListener('DOMContentLoaded', () => {
  
    console.log('script.js');
    
    

    
    // document.getElementById('main-container').innerHTML = AddProduits();
    // document.getElementById('main-container').innerHTML = UpdateProduits();
    document.getElementById('main-container').innerHTML = Produits();
    
    // fetchCategories();
});