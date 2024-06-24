let map;

// Function to initialize the Leaflet map
function initMap() {
    map = L.map('map').setView([45.9432, 24.9668], 6);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  addMarkersForDestinations();
}

// Function to add markers for each destination
async function addMarkersForDestinations() {
  const destinations = await getDestinations(); // Fetch destinations from your logic (e.g., 'destinations' array)

  destinations.forEach(destination => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${destination.oras},${destination.tara}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          L.marker([lat, lon]).addTo(map)
            .bindPopup(`<b>${destination.oras}, ${destination.tara}</b>`)
            .openPopup();
        } else {
          console.error("Geocoding failed for:", destination);
        }
      });
  });
}

// Function to get the destination data (you'll need to implement this)
async function getDestinations() {
  // ... Your logic to fetch destinations from your application state ...
  // Example:
  // return fetch('/getChosenDestinations') // Assuming this endpoint returns the chosen destinations
  //   .then(response => response.json())
  //   .catch(error => {
  //     console.error("Error fetching destinations:", error);
  //     return []; // Return an empty array in case of an error
  //   });
}

window.initMap = initMap; // Make initMap globally accessible for the callback
