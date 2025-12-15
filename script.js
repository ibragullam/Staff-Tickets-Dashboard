const staffData = [
  { name: 'Ibrahim', image: 'images/ibrahim.jpg', open: 5, ongoing: 3, closed: 2 },
  { name: 'Amina', image: 'images/amina.jpg', open: 2, ongoing: 2, closed: 6 },
  { name: 'Urio', image: 'images/urio.jpg', open: 3, ongoing: 1, closed: 4 },
  { name: 'Monica', image: 'images/monica.jpg', open: 4, ongoing: 2, closed: 3 }
];

function renderStaffCards() {
  const container = document.getElementById('staffCards');
  container.innerHTML = '';
  staffData.forEach(staff => {
    const totalCompleted = staff.ongoing + staff.closed;
    const card = document.createElement('div');
    card.className = 'card p-2';
    card.style.width = '150px';
    card.innerHTML = 
      <img src="\" class="card-img-top" alt="\" />
      <div class="card-body text-center">
        <h5>\</h5>
        <p>Open: \</p>
        <p>Ongoing: \</p>
        <p>Closed: \</p>
        <p>Total Completed: \</p>
      </div>
    ;
    container.appendChild(card);
  });
}

function renderCharts() {
  const ctxBar = document.getElementById('barChart').getContext('2d');
  const ctxPie = document.getElementById('pieChart').getContext('2d');

  // Bar chart
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: staffData.map(s => s.name),
      datasets: [
        { label: 'Open Tickets', data: staffData.map(s => s.open), backgroundColor: 'red' },
        { label: 'Ongoing Tickets', data: staffData.map(s => s.ongoing), backgroundColor: 'orange' },
        { label: 'Closed Tickets', data: staffData.map(s => s.closed), backgroundColor: 'green' }
      ]
    },
    options: { responsive: true, plugins: { legend: { position: 'top' } } }
  });

  // Pie chart for total completed
  const totalWork = staffData.map(s => s.ongoing + s.closed);
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: staffData.map(s => s.name),
      datasets: [{ data: totalWork, backgroundColor: ['#FF6384','#36A2EB','#FFCE56','#4BC0C0'] }]
    },
    options: { responsive: true, plugins: { legend: { position: 'right' } } }
  });
}

// Initial render
renderStaffCards();
renderCharts();
