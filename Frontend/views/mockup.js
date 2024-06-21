// mockup.js

document.addEventListener("DOMContentLoaded", function() {
    const countries = {
      "USA": ["New York", "Los Angeles", "Chicago"],
      "France": ["Paris", "Lyon", "Marseille"],
      "Japan": ["Tokyo", "Kyoto", "Osaka"]
    };
  
    const beneficiaries = ["Family", "Friends", "Colleagues"];
  
    const countrySelect = document.getElementById("country");
    const citySelect = document.getElementById("city");
    const beneficiariesToggle = document.getElementById("beneficiaries-toggle");
    const checkboxOptions = document.getElementById("checkbox-options");
  
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
      checkbox.value = beneficiary;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(beneficiary));
      checkboxOptions.appendChild(label);
      checkboxOptions.appendChild(document.createElement("br"));
    });
  });
  