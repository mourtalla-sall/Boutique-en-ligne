console.log("Dashboard");

export default function Dashboard() {
    setTimeout(() => {
        // hamburger();
    }, 0);
    return initDashboard();
}

export function initDashboard() {
    return `
      <div class="admin-content">
            <h2>Bienvenue sur le Dashboard</h2>
        </div>
    `;
}