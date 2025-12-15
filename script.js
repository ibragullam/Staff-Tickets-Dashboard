// Sample staff data
const staffData = [
    { name: "Ibrahim", img: "images/ibrahim.jpg", open: 2, ongoing: 3, closed: 5, completed: 5 },
    { name: "Amina", img: "images/amina.jpg", open: 1, ongoing: 2, closed: 6, completed: 6 },
    { name: "Urio", img: "images/urio.jpg", open: 0, ongoing: 1, closed: 7, completed: 7 },
    { name: "Monica", img: "images/monica.jpg", open: 3, ongoing: 1, closed: 4, completed: 4 }
];

// Populate staff cards
const staffCardsContainer = document.getElementById("staff-cards");
staffData.forEach(staff => {
    const card = document.createElement("div");
    card.classList.add("col-md-3");
    card.innerHTML = `
        <div class="card text-center shadow-sm">
            <div class="card-body">
                <img src="${staff.img}" alt="${staff.name}" class="staff-img mb-2">
                <h5>${staff.name}</h5>
                <p>Open: ${staff.open}</p>
                <p>Ongoing: ${staff.ongoing}</p>
                <p>Closed: ${staff.closed}</p>
                <p>Total Completed: ${staff.completed}</p>
            </div>
        </div>`;
    staffCardsContainer.appendChild(card);
});

// Populate tickets table
const tableBody = document.querySelector("#tickets-table tbody");
staffData.forEach(staff => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${staff.name}</td>
        <td>${staff.open}</td>
        <td>${staff.ongoing}</td>
        <td>${staff.closed}</td>
        <td>${staff.completed}</td>`;
    tableBody.appendChild(row);
});

// Work percentage pie chart
const ctx = document.getElementById("workPieChart").getContext("2d");
const workPieChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: staffData.map(s => s.name),
        datasets: [{
            data: staffData.map(s => s.completed),
            backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545"],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Percentage of Work Completed by Staff"
            }
        }
    }
});
