const staffData = [
    { name: 'Ibrahim', open: 5, ongoing: 3, closed: 2 },
    { name: 'Amina', open: 2, ongoing: 4, closed: 4 },
    { name: 'Urio', open: 1, ongoing: 2, closed: 7 },
    { name: 'Monica', open: 3, ongoing: 3, closed: 4 }
];

// Render staff profiles
function renderStaff() {
    const container = document.getElementById('staffContainer');
    container.innerHTML = '';
    staffData.forEach(staff => {
        const div = document.createElement('div');
        div.className = 'col-md-3';
        div.innerHTML = `
            <div class="card p-3 shadow-sm">
                <img src="images/${staff.name.toLowerCase()}.jpg" alt="${staff.name}">
                <h5 class="mt-2">${staff.name}</h5>
                <p>Open: ${staff.open} | Ongoing: ${staff.ongoing} | Closed: ${staff.closed}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

// Render charts
function renderCharts() {
    const barCtx = document.getElementById('barChart').getContext('2d');
    const pieCtx = document.getElementById('pieChart').getContext('2d');

    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: staffData.map(s => s.name),
            datasets: [
                { label: 'Open Tickets', data: staffData.map(s => s.open), backgroundColor: 'orange' },
                { label: 'Ongoing Tickets', data: staffData.map(s => s.ongoing), backgroundColor: 'blue' },
                { label: 'Closed Tickets', data: staffData.map(s => s.closed), backgroundColor: 'green' }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } },
            scales: { y: { beginAtZero: true } }
        }
    });

    new Chart(pieCtx, {
        type: 'pie',
        data: {
            labels: staffData.map(s => s.name),
            datasets: [{
                data: staffData.map(s => s.open + s.ongoing + s.closed),
                backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0']
            }]
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
}

// Initialize dashboard
renderStaff();
renderCharts();
