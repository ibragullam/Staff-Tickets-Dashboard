const staffData = [
    { name: 'Ibrahim', image: 'images/ibrahim.jpg', open: 3, ongoing: 5, closed: 7 },
    { name: 'Amina', image: 'images/amina.jpg', open: 2, ongoing: 6, closed: 8 },
    { name: 'Urio', image: 'images/urio.jpg', open: 4, ongoing: 3, closed: 5 },
    { name: 'Monica', image: 'images/monica.jpg', open: 1, ongoing: 4, closed: 9 }
];

// Render staff cards
const staffCards = document.getElementById('staffCards');
staffData.forEach(staff => {
    const totalCompleted = staff.ongoing + staff.closed;
    const card = document.createElement('div');
    card.className = 'col-md-3 staff-card';
    card.innerHTML = 
        <div class='card text-center p-3'>
            <img src='' alt=''>
            <h5></h5>
            <p class='card-text'>Open Tickets: <span></span></p>
            <p class='card-text'>Ongoing Tickets: <span></span></p>
            <p class='card-text'>Closed Tickets: <span></span></p>
            <p class='card-text'>Total Completed: <span></span></p>
        </div>
    ;
    staffCards.appendChild(card);
});

// Pie Chart - Total Completed Tickets per Staff
const ctx = document.getElementById('ticketsPieChart').getContext('2d');
const pieData = {
    labels: staffData.map(s => s.name),
    datasets: [{
        label: 'Total Work Completed',
        data: staffData.map(s => s.ongoing + s.closed),
        backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0']
    }]
};

new Chart(ctx, {
    type: 'pie',
    data: pieData,
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: { enabled: true }
        }
    }
});
