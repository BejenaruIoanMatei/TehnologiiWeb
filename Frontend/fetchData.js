// Import Firestore instance
const { db } = require('./firebaseInit');
const { collection, getDocs } = require('firebase/firestore');

// Function to fetch data from the 'suveniruri' collection
async function fetchData() {
  try {
    // Reference to the collection 'suveniruri'
    const suveniruriCollection = collection(db, 'suveniruri');

    // Get all documents from the collection
    const snapshot = await getDocs(suveniruriCollection);

    // Extract data from documents
    const suveniruri = [];
    snapshot.forEach(doc => {
      suveniruri.push({ id: doc.id, ...doc.data() });
    });

    // Log the retrieved data to see the structure
    console.log(suveniruri);
    return suveniruri;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

// Call the function to fetch data
fetchData();
