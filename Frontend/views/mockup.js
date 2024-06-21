document.addEventListener("DOMContentLoaded", function() {
    const testSuveniruri = [
      { tara: 'France (FR)', oras: 'Paris', suvenir: 'Eiffel Tower Miniature', categorie: 'Art', destinatari: ['family', 'friend'] },
      { tara: 'France (FR)', oras: 'Paris', suvenir: 'Parisian Perfume', categorie: 'Beauty', destinatari: ['relative', 'lover'] },
      { tara: 'France (FR)', oras: 'Paris', suvenir: 'French Cooking Book', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },
      { tara: 'France (FR)', oras: 'Nice', suvenir: 'Côte d\'Azur Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
      { tara: 'France (FR)', oras: 'Nice', suvenir: 'Provence Lavender Soap', categorie: 'Beauty', destinatari: ['relative', 'acquaintance'] },
      { tara: 'France (FR)', oras: 'Nice', suvenir: 'French Wine Assortment', categorie: 'Food', destinatari: ['lover', 'co-worker'] },
      { tara: 'France (FR)', oras: 'Lyon', suvenir: 'Lyon Cathedral Model', categorie: 'Art', destinatari: ['family', 'friend'] },
      { tara: 'France (FR)', oras: 'Lyon', suvenir: 'Silk Scarf', categorie: 'Fashion', destinatari: ['relative', 'lover'] },
      { tara: 'France (FR)', oras: 'Lyon', suvenir: 'Lyon Gastronomy Guide', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },
      { tara: 'France (FR)', oras: 'Marseille', suvenir: 'Calanques Landscape Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
      { tara: 'France (FR)', oras: 'Marseille', suvenir: 'Marseille Soap Set', categorie: 'Beauty', destinatari: ['relative', 'lover'] },
      { tara: 'France (FR)', oras: 'Marseille', suvenir: 'Bouillabaisse Recipe Book', categorie: 'Books', destinatari: ['acquaintance', 'co-worker'] },
      { tara: 'France (FR)', oras: 'Bordeaux', suvenir: 'Bordeaux Vineyard Painting', categorie: 'Art', destinatari: ['family', 'friend'] },
      { tara: 'France (FR)', oras: 'Bordeaux', suvenir: 'Wine Stoppers Set', categorie: 'Food', destinatari: ['relative', 'acquaintance'] },
      { tara: 'France (FR)', oras: 'Bordeaux', suvenir: 'Bordeaux Wine Guide', categorie: 'Books', destinatari: ['lover', 'co-worker'] },
    ];
  
    const countries = {};
    testSuveniruri.forEach(item => {
      if (!countries[item.tara]) {
        countries[item.tara] = [];
      }
      if (!countries[item.tara].includes(item.oras)) {
        countries[item.tara].push(item.oras);
      }
    });
  
    const beneficiaries = ["Family", "Friend", "Relative", "Lover", "Acquaintance", "Co-worker"];
  
    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");
    const beneficiariesToggle = document.getElementById("beneficiaries-toggle");
    const checkboxOptions = document.getElementById("checkbox-options");
    const addDestinationButton = document.querySelector(".form-actions button");
    const destinationsList = document.createElement("ul");
    const formContainer = document.querySelector(".form-container");
  
    formContainer.appendChild(destinationsList);
  
    // Populate country dropdown
    for (let country in countries) {
      let option = document.createElement("option");
      option.value = country;
      option.text = country;
      countrySelect.appendChild(option);
    }
  
    // Populate city dropdown based on selected country
    countrySelect.addEventListener("change", function() {
      let selectedCountry = countrySelect.value;
      let cities = countries[selectedCountry];
  
      // Clear previous city options
      citySelect.innerHTML = "<option value='' disabled selected>Select a City</option>";
  
      // Add new city options
      cities.forEach(city => {
        let option = document.createElement("option");
        option.value = city;
        option.text = city;
        citySelect.appendChild(option);
      });
    });
  
    // Toggle beneficiaries options visibility
    beneficiariesToggle.addEventListener("click", function() {
      if (checkboxOptions.style.display === "none") {
        checkboxOptions.style.display = "block";
      } else {
        checkboxOptions.style.display = "none";
      }
    });
  
    // Populate beneficiaries options
    beneficiaries.forEach(beneficiary => {
      let label = document.createElement("label");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "beneficiaries";
      checkbox.value = beneficiary.toLowerCase();
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(beneficiary));
      checkboxOptions.appendChild(label);
      checkboxOptions.appendChild(document.createElement("br"));
    });
  
    // Array to store destinations
    const destinations = [];
  
    // Add event listener for the add destination button
    addDestinationButton.addEventListener("click", function(event) {
      event.preventDefault();
  
      const selectedCountry = countrySelect.value;
      const selectedCity = citySelect.value;
      const startDate = document.getElementById("start").value;
      const endDate = document.getElementById("end").value;
      const selectedBeneficiaries = Array.from(document.querySelectorAll("input[name='beneficiaries']:checked")).map(cb => cb.value);
  
      if (!selectedCountry || !selectedCity || !startDate || !endDate || selectedBeneficiaries.length === 0) {
        alert("Please fill in all fields and select at least one beneficiary.");
        return;
      }
  
      const destinationExists = destinations.some(dest => dest.oras === selectedCity && dest.tara === selectedCountry);
  
      if (destinationExists) {
        alert("This destination is already added.");
        return;
      }
  
      const destination = {
        tara: selectedCountry,
        oras: selectedCity,
        startDate: startDate,
        endDate: endDate,
        beneficiari: selectedBeneficiaries
      };
  
      destinations.push(destination);
      displayDestinations();
    });
  
    function displayDestinations() {
      destinationsList.innerHTML = "";
      destinations.forEach((destination, index) => {
        const listItem = document.createElement("li");
        listItem.style.marginBottom = "5px";
        listItem.textContent = `${destination.oras}, ${destination.tara} - from ${destination.startDate} to ${destination.endDate}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "-";
        deleteButton.style.marginLeft = "10px";
        deleteButton.addEventListener("click", function() {
          destinations.splice(index, 1);
          displayDestinations();
        });
  
        listItem.appendChild(deleteButton);
        destinationsList.appendChild(listItem);
      });
    }
  });
  