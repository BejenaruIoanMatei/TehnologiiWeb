let map; // Variabilă globală pentru hartă

function initMap() {
  if (typeof L === 'undefined') {
    console.error('Leaflet nu este încărcat');
    return;
  }

  const mapContainer = document.getElementById('map');
  if (!mapContainer) {
    console.error('Containerul pentru hartă nu a fost găsit');
    return;
  }

  // Verificăm dacă harta este deja inițializată
  if (!map) {
    map = L.map('map').setView([45.9432, 24.9668], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }

  // Ne asigurăm că containerul hărții este vizibil și are dimensiune
  mapContainer.style.display = 'block';
  map.invalidateSize();
}

// Funcție pentru eliminarea diacriticelor dintr-un șir
function removeDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function addMarkersForDestinations(destinations) {
  if (!map) {
    console.error("Harta nu este inițializată");
    return;
  }

  if (!destinations || !Array.isArray(destinations) || destinations.length === 0) {
    console.error("Datele despre destinații nu sunt valide");
    return;
  }

  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  destinations.forEach(destination => {
    const normalizedCity = removeDiacritics(destination.oras);
    const normalizedCountry = removeDiacritics(destination.tara);

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(normalizedCity)},${encodeURIComponent(normalizedCountry)}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          L.marker([lat, lon]).addTo(map)
            .bindPopup(`<b>${destination.oras}, ${destination.tara}</b>`)
            .openPopup();
        } else {
          // Dacă orașul nu este găsit, afișează mesaj și caută țara
          console.warn("We could not locate the city:", destination.oras);

          fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(normalizedCountry)}`)
            .then(response => response.json())
            .then(countryData => {
              if (countryData.length > 0) {
                const { lat, lon } = countryData[0];
                L.marker([lat, lon]).addTo(map)
                  .bindPopup(`<b>${destination.tara}</b> (We could not locate the city ${destination.oras})`)
                  .openPopup();
              } else {
                console.error("Geocodarea a eșuat complet pentru:", destination);
              }
            })
            .catch(error => console.error("Eroare la preluarea datelor pentru țară:", error));
        }
      })
      .catch(error => console.error("Eroare la preluarea datelor de locație:", error));
  });
}

window.initMap = initMap;
window.addMarkersForDestinations = addMarkersForDestinations;
