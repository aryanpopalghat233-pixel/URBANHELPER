// Fetch Workers for the Map
async function loadWorkersOnMap() {
    const response = await fetch('/api/workers');
    const workers = await response.json();
    
    workers.forEach(worker => {
        L.marker([worker.lat, worker.lng])
            .addTo(map)
            .bindPopup(`${worker.name} - ${worker.specialization}`);
    });
}

// Submit Booking to MongoDB
async function confirmBooking() {
    const bookingData = {
        serviceName: "Salon for Women",
        customerName: "Aryan Popalghat",
        address: document.querySelector('input[placeholder="Enter street address"]').value,
        price: 499
    };

    const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
    });

    if (response.ok) {
        alert("Booking Saved to Database!");
        showPage('activity');
    }
}
