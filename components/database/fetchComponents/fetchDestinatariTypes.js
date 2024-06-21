// Import Firestore instance
const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs } = require('firebase/firestore');

// Function to fetch all distinct destinatari types from the 'suveniruri' collection
async function fetchDistinctDestinatari() {
  try {
    // Reference to the collection 'suveniruri'
    const suveniruriCollection = collection(db, 'suveniruri');

    // Get all documents from the collection
    const snapshot = await getDocs(suveniruriCollection);

    // Set to store distinct destinatari types
    const distinctDestinatari = new Set();

    // Iterate through documents and add unique destinatari types to the set
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.destinatari) {
        // If destinatari is a single value or an array of values
        if (Array.isArray(data.destinatari)) {
          data.destinatari.forEach(dest => distinctDestinatari.add(dest));
        } else {
          distinctDestinatari.add(data.destinatari);
        }
      }
    });

    // Convert set to array (if needed)
    const distinctDestinatariArray = Array.from(distinctDestinatari);

    // Log the distinct destinatari types
    console.log(distinctDestinatariArray);

    return distinctDestinatariArray;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

// Call the function to fetch distinct destinatari types
fetchDistinctDestinatari();
