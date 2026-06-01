console.log("addproduits");

export default function Dashboard(){
    setTimeout(() => {
        // listenNav();
        hamburger()
    }, 0);
    
    return initDashboard(); 
}

export function initDashboard () {
    return `
                
        <!DOCTYPE html>
        <!-- Created By JV Codes - www.jvcodes.com -->
        <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <!-- Stylesheet and Font Awesome Icons for Sidebar Menu -->
            <link rel="stylesheet" href="./AdminCss.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <title> Responsive Sidebar Menu with Active Link | JV Codes </title>
        </head>
        <body>
        <!-- Checkbox for Sidebar Toggle -->
             <input type="checkbox" id="check">
        <label for="check">
            <i class="fas fa-bars" id="btn"></i>
            <i class="fas fa-times" id="cancel"></i>
        </label>

        <div class="sidebar">
            <header>My Menu</header>
            <a href="/Boutique-en-ligne/Front-end/Dashboard">
                <i class="fas fa-qrcode"></i>
                <span>Dashboard</span>
            </a>
            <a href="/Boutique-en-ligne/Front-end/Produits">
                <i class="fas fa-link"></i>
                <span>Produits</span>
            </a>
            <a href="/Boutique-en-ligne/Front-end/AddProduits">
                <i class="fas fa-plus"></i>
                <span>Add Produits</span>
            </a>
           <!-- Stock -->
            <a href="#">
                <i class="fas fa-boxes"></i>
                <span>Stock</span>
            </a>

            <!-- Profil / Users -->
            <a href="#">
                <i class="fas fa-users"></i>
                <span>Profil</span>
            </a>
        </div>

        <!--  EN DEHORS de la sidebar -->
        <div id="main-content"></div>
    
                
    `;
}





