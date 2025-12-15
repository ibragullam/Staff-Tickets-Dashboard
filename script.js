document.addEventListener("DOMContentLoaded", () => {

    const staffData = [
        { name: "Ibrahim", image: "images/ibrahim.jpg", open: 5, ongoing: 3, closed: 12 },
        { name: "Amina", image: "images/amina.jpg", open: 2, ongoing: 4, closed: 10 },
        { name: "Urio", image: "images/urio.jpg", open: 6, ongoing: 2, closed: 8 },
        { name: "Monica", image: "images/monica.jpg", open: 1, ongoing: 3, closed: 14 }
    ];

    // Staff cards
    const container = document.getElementById("staffContainer");
    staffData.forEach(s => {
        container.innerHTML += 
            <div class="staff-card">
                <img src="\">
                <h3>\</h3>
                <p>Open: \</p>
                <p>Ongoing: \</p>
                <p>Closed: \</p>
            </div>
        ;
    });

    // Doughnut (3D-style) chart
    new Chart(document.getElementById("pieChart"), {
        type: "doughnut",
        data: {
            labels: staffData.map(s => s.name),
            datasets: [{
                data: staffData.map(s => s.closed),
                backgroundColor: ["#0d6efd", "#198754", "#ffc107", "#dc3545"]
            }]
        },
        options: {
            cutout: "60%",
            plugins: { legend: { position: "bottom" } }
        }
    });

    // Bar chart
    new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: staffData.map(s => s.name),
            datasets: [
                { label: "Open", data: staffData.map(s => s.open), backgroundColor: "#dc3545" },
                { label: "Ongoing", data: staffData.map(s => s.ongoing), backgroundColor: "#ffc107" },
                { label: "Closed", data: staffData.map(s => s.closed), backgroundColor: "#198754" }
            ]
        }
    });

});
