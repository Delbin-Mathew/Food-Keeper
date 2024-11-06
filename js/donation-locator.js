// Initialize Leaflet map for Donation Locator
const map = L.map('map').setView([34.0522, -118.2437], 12); // Centered on Los Angeles, CA

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample donation center locations
const locations = [
    { lat: 34.0622, lng: -118.2439, name: "Donation Center 1" },
    { lat: 34.0722, lng: -118.2539, name: "Donation Center 2" },
    { lat: 34.0522, lng: -118.2337, name: "Donation Center 3" }
];

// Add markers for each donation center location
locations.forEach(location => {
    L.marker([location.lat, location.lng]).addTo(map)
        .bindPopup(location.name)
        .openPopup();
});

// Inventory Sharing form event
const shareInventoryForm = document.getElementById('share-inventory-form');

if (shareInventoryForm) {
    shareInventoryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Inventory shared successfully!");
    });
}
