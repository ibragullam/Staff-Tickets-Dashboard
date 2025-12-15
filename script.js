const staffData = [
    { name: 'Ibrahim', image: 'images/ibrahim.jpg', open: 5, ongoing: 3, closed: 12 },
    { name: 'Amina', image: 'images/amina.jpg', open: 2, ongoing: 4, closed: 10 },
    { name: 'Urio', image: 'images/urio.jpg', open: 4, ongoing: 2, closed: 15 },
    { name: 'Monica', image: 'images/monica.jpg', open: 3, ongoing: 5, closed: 8 }
];

const staffTable = document.getElementById('staffTable');
staffData.forEach(staff => {
    const row = document.createElement('tr');
    row.innerHTML = 
        <td><img src='\' alt='\'> \</td>
        <td>\</td>
        <td>\</td>
        <td>\</td>
        <td>\</td>
    ;
    staffTable.appendChild(row);
});

const ctxBar = document.getElementById('ticketsBarChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: staffData.map(s => s.name),
        datasets: [
            { label: 'Open', data: staffData.map(s => s.open), backgroundColor: '#dc3545' },
            { label: 'Ongoing', data: staffData.map(s => s.ongoing), backgroundColor: '#ffc107' },
            { label: 'Closed', data: staffData.map(s => s.closed), backgroundColor: '#28a745' }
        ]
    },
    options: { responsive: true, plugins: { legend: { position: 'top' } } }
});

const ctxPie = document.getElementById('workPieChart').getContext('2d');
const totalCompleted = staffData.map(s => s.ongoing + s.closed);
new Chart(ctxPie, {
    type: 'pie',
    data: { labels: staffData.map(s => s.name), datasets: [{ data: totalCompleted, backgroundColor: ['#007bff','#ffc107','#28a745','#17a2b8'] }] },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            tooltip: { callbacks: { label: function(context) {
                const total = totalCompleted.reduce((a,b)=>a+b,0);
                const val = context.raw;
                const pct = ((val/total)*100).toFixed(1);
                return ${context.label}:  (\%);
            }}}
        }
    }
});
