document.addEventListener("DOMContentLoaded", async function () {

  const response = await fetch('/getCountries');
  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }
  const countries = await response.json();
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
  countrySelect.addEventListener("change", function () {
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
  beneficiariesToggle.addEventListener("click", function () {
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
  addDestinationButton.addEventListener("click", function (event) {
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

    // Check if start date is before end date
    if (new Date(startDate) > new Date(endDate)) {
      alert("The start date cannot be later than the end date.");
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

  // Function to display destinations
  function displayDestinations() {
    destinationsList.innerHTML = "";
    destinations.forEach((destination, index) => {
      const listItem = document.createElement("li");
      listItem.style.marginBottom = "5px";
      listItem.textContent = `${destination.oras}, ${destination.tara} - from ${destination.startDate} to ${destination.endDate} - Beneficiaries: ${destination.beneficiari.join(', ')}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "-";
      deleteButton.style.marginLeft = "10px";
      deleteButton.addEventListener("click", function () {
        destinations.splice(index, 1);
        displayDestinations();
      });

      listItem.appendChild(deleteButton);
      destinationsList.appendChild(listItem);
    });
  }

  // Event listener for the "Create Trip" button
  const createTripButton = document.getElementById("submit-trip");
  createTripButton.addEventListener("click", function () {
    // Display popup with souvenir details
    const popupContainer = document.getElementById("popup-container");
    const closePopup = document.getElementById("close-popup");
    const souvenirList = document.getElementById("souvenir-list");

    souvenirList.innerHTML = ""; // Clear previous content

    destinations.forEach(destination => {
      const mainSouvenir = getMainSouvenir(destination);
      const otherSouvenirs = getOtherSouvenirs(destination);

      const destinationDiv = document.createElement("div");
      destinationDiv.classList.add("destination-souvenirs");
      destinationDiv.innerHTML = `
        <h2>${destination.oras}, ${destination.tara}</h2>
        <p><strong>Main Souvenir:</strong> ${mainSouvenir}</p>
        <p><strong>Other Souvenirs:</strong> ${otherSouvenirs.join(', ')}</p>
      `;
      souvenirList.appendChild(destinationDiv);
    });

    popupContainer.style.display = "block";

    // Close popup when clicking on close button
    closePopup.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });

  // Function to determine main souvenir
  function getMainSouvenir(destination) {
    const relevantSouvenirs = testSuveniruri.filter(souvenir =>
      souvenir.tara === destination.tara &&
      souvenir.oras === destination.oras &&
      souvenir.destinatari.includes(destination.beneficiari[0])
    );
    return relevantSouvenirs.length > 0 ? relevantSouvenirs[0].suvenir : "No main souvenir found";
  }

  // Function to get other souvenirs
  function getOtherSouvenirs(destination) {
    const otherSouvenirs = testSuveniruri.filter(souvenir =>
      souvenir.tara === destination.tara &&
      souvenir.oras === destination.oras &&
      souvenir.suvenir !== getMainSouvenir(destination)
    );
    return otherSouvenirs.map(souvenir => souvenir.suvenir);
  }
});
