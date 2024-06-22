// Import the function to test
const fetchCountriesAndCitiesFromFirestore = require('../fetchCountriesAndCities');

// Function to run the test
async function runTest() {
  try {
    // Call the function to fetch countries and cities
    const countries = await fetchCountriesAndCitiesFromFirestore();

    // Log the retrieved countries and cities
    console.log("Countries and Cities:");
    console.log(countries);

    // Optionally, perform additional assertions or operations with the data
    // For example, check specific countries or cities, or assert expected output

  } catch (error) {
    // Handle any errors that occur during fetching
    console.error("Error fetching countries and cities:", error);
  }
}

// Execute the test function
runTest();
