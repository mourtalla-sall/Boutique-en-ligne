const Dashboard = () => {
    return `
    <div id="main-content">
        <h1>Dashboard</h1>

        <div class="dashboard-cards">

            <div class="card-stat">
                <i class="bi bi-box-seam"></i>
                <div>
                    <p>Produits</p>
                    <h2 id="count-produits">...</h2>
                </div>
            </div>

            <div class="card-stat">
                <i class="bi bi-tags"></i>
                <div>
                    <p>Catégories</p>
                    <h2 id="count-categories">...</h2>
                </div>
            </div>

            <div class="card-stat">
                <i class="bi bi-people"></i>
                <div>
                    <p>Utilisateurs</p>
                    <h2 id="count-users">...</h2>
                </div>
            </div>

        </div>
    </div>
    `;
};

export async function initAfterRender() {
    try {
        const response = await fetch('/Boutique-en-ligne/Front-end/PageAdmin/Traitement.php');
        const data = await response.json();

        document.getElementById('count-produits').textContent  = data.produits;
        document.getElementById('count-categories').textContent = data.categories;
        document.getElementById('count-users').textContent = data.users;

    } catch (err) {
        console.error('Erreur dashboard :', err);
    }
}

export default Dashboard;