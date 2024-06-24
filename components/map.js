let map;

function initMap(destinations) {
  if (typeof L === 'undefined') {
    console.error('Leaflet is not loaded');
    return;
  }

  const mapContainer = document.getElementById('map');
  if (!mapContainer) {
    console.error('Map container not found');
    return;
  }

  if (!map) {
    map = L.map('map').setView([45.9432, 24.9668], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }

  // Clear existing markers
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  // Add markers for destinations
  addMarkersForDestinations(destinations);

  // Ensure the map container is visible and has a size
  mapContainer.style.display = 'block';
  map.invalidateSize();
}

function addMarkersForDestinations(destinations) {
  if (!destinations || !Array.isArray(destinations) || destinations.length === 0) {
    console.error("No valid destinations data");
    return;
  }

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
      })
      .catch(error => console.error("Error fetching location data:", error));
  });
}

window.initMap = initMap;