// Import Firestore instance
const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs } = require('firebase/firestore');

// Function to fetch all distinct countries and cities from Firestore
async function fetchCountriesAndCitiesFromFirestore() {
  try {
    // Reference to the collection in Firestore (adjust 'souvenirs' to your collection name)
    const souvenirsCollection = collection(db, 'suveniruri');

    // Get all documents (souvenirs) from the collection
    const snapshot = await getDocs(souvenirsCollection);

    // Object to store countries and their cities
    const countries = {};

    // Iterate through documents
    snapshot.forEach(doc => {
      const data = doc.data(); // Get document data
      const { tara, oras } = data; // Assuming each document has 'tara' and 'oras' fields
      if (!countries[tara]) {
        countries[tara] = []; // Initialize the array if country doesn't exist
      }
      if (!countries[tara].includes(oras)) {
        countries[tara].push(oras); // Add city to the country's array if not already included
      }
    });

    // Log the countries object (or return it if you want to use it elsewhere)
    console.log(countries);

    return countries;
  } catch (error) {
    console.error("Error fetching countries and cities from Firestore: ", error);
    throw error;
  }
}

// Export the function to be used in other parts of your application
module.exports = fetchCountriesAndCitiesFromFirestore;
