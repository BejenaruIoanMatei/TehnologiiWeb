/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

let destinations = [];
async function fetchSignedURL(urlToSign)
{
  try {
    const responseToken = await fetch('/getJWTToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });


    if (!responseToken.ok) {
      throw new Error('Failed to fetch token');
    }

    const { token } = await responseToken.json();

    const response = await fetch('/generateSignedURL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ url: urlToSign }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch signed URL');
    }
    const { signedURL } = await response.json();
    return signedURL;
  } catch (error) {
    console.error('Error fetching signed URL:', error);
    throw error;
  }
}
async function getMainSouvenir(destination)
{
  const response = await fetch('/getMainSouvenir', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(destination)
  });

  if (!response.ok) {
    throw new Error('Failed to fetch main souvenir');
  }

  const relevantSouvenir = await response.json();
  console.log('Componenta de recomandare main souvenir a primit', relevantSouvenir);
  return relevantSouvenir || { suvenir: "No main souvenir found" };
}
async function getOtherSouvenirs(destination)
{
  try {
    const response = await fetch('/getOtherSouvenirs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(destination)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch other souvenirs');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching other souvenirs:', error);
    throw error;
  }
}
async function sendFeedback(destination, feedback) {
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log(`Feedback sent to backend for ${feedback}:`, destination);
}
async function sendNumberOfSouvenirs(numberOfSouvenirs)
{

  const signedUrl = await fetchSignedURL('/updateStatisticsDataSouvenirsSuggested');
  fetch(signedUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value: numberOfSouvenirs }),
  }).catch(error => {
    console.error('Error sending number of souvenirs:', error);
  });
}
document.addEventListener("DOMContentLoaded", async function () {
  const response = await fetch('/getCountries');
  if (!response.ok) {
    throw new Error('Failed to fetch countries');
  }
  const countries = await response.json();
  console.log(response);
  console.log(countries);
  const beneficiaries = ["Family", "Friend", "Relative", "Lover", "Acquaintance", "Co-worker"];

  const countrySelect = document.getElementById("country");
  const citySelect = document.getElementById("city");
  const beneficiariesToggle = document.getElementById("beneficiaries-toggle");
  const checkboxOptions = document.getElementById("checkbox-options");
  const addDestinationButton = document.querySelector(".form-actions button");
  const destinationsList = document.createElement("ul");
  const formContainer = document.querySelector(".form-container");

  formContainer.appendChild(destinationsList);

  for (let country in countries) {
    let option = document.createElement("option");
    option.value = country;
    option.text = country;
    countrySelect.appendChild(option);
  }

  countrySelect.addEventListener("change", function () {
    let selectedCountry = countrySelect.value;
    let cities = countries[selectedCountry];

    citySelect.innerHTML = "<option value='' disabled selected>Select a City</option>";

    cities.forEach(city => {
      let option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.appendChild(option);
    });
  });

  beneficiariesToggle.addEventListener("click", function () {
    if (checkboxOptions.style.display === "none") {
      checkboxOptions.style.display = "block";
    } else {
      checkboxOptions.style.display = "none";
    }
  });

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


  const createTripButton = document.getElementById("submit-trip");
  createTripButton.addEventListener("click", async function () {

    const mapPopupContainer = document.getElementById("map-popup-container");
    mapPopupContainer.style.display = "block";


    const closeMapPopup = document.getElementById("close-map-popup");
    closeMapPopup.addEventListener("click", function () {
      mapPopupContainer.style.display = "none";

      if (map) {
        map.remove();
        map = null;
      }
      document.getElementById("map").innerHTML = "";
    });

    initMap();
    addMarkersForDestinations(destinations);

    const popupContainer = document.getElementById("popup-container");
    const closePopup = document.getElementById("close-popup");
    const souvenirList = document.getElementById("souvenir-list");

    souvenirList.innerHTML = ""; // Clear previous content

    console.log('Recommend component destinations: ', destinations);
    try {
      const fetchPromises = destinations.map(async (destination) => {
        try {
          const mainSouvenir = await getMainSouvenir(destination);
          const otherSouvenirs = await getOtherSouvenirs(destination);

          const numberOfSouvenirs = 1 + otherSouvenirs.length;
          console.log("The number of suggested souvenirs is: ", numberOfSouvenirs);
          sendNumberOfSouvenirs(numberOfSouvenirs);

          const destinationDiv = document.createElement("div");
          destinationDiv.classList.add("destination-souvenirs");
          destinationDiv.innerHTML = `
            <h2 class="location">${destination.oras}, ${destination.tara}</h2>
            <p class="main-souvenir"><strong>Main Souvenir:</strong> ${mainSouvenir.suvenir} (Like Ratio: ${mainSouvenir.likeRatio}%)</p>
            <p><strong>Other Souvenirs:</strong></p>
            <ul>
              ${otherSouvenirs.map(souvenir => `
                <li>${souvenir.suvenir} (Like Ratio: ${souvenir.likeRatio}%)
                  <br>Category: ${souvenir.categorie}
                </li>
              `).join('')}
            </ul>
            <div class="feedback-section">
              <p>Do you like the recommendation?</p>
              <button class="like-button">Yes</button>
              <button class="dislike-button">No</button>
            </div>
          `;

          const likeButton = destinationDiv.querySelector(".like-button");
          const dislikeButton = destinationDiv.querySelector(".dislike-button");

          likeButton.addEventListener("click", async () => {
            try {
              console.log("Liked:", destination);
              await sendFeedback(destination, 'like');
            } catch (error) {
              console.error("Error handling like:", error);
            }
          });

          dislikeButton.addEventListener("click", async () => {
            try {
              console.log("Disliked:", destination);
              await sendFeedback(destination, 'dislike');
            } catch (error) {
              console.error("Error handling dislike:", error);
            }
          });

          souvenirList.appendChild(destinationDiv);
        } catch (error) {
          console.error("Error fetching or displaying souvenirs:", error);
        }
      });

      await Promise.all(fetchPromises);
    } catch (error) {
      console.error("Error fetching or displaying souvenirs:", error);
    }

    popupContainer.style.display = "block";

    closePopup.addEventListener("click", function () {
      popupContainer.style.display = "none";
    });
  });
  function displayDestinations()
  {
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
  window.initMap = initMap;
});

