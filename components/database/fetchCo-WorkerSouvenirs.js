// Import Firestore instance
const { db } = require('../../firebaseInit');
const { collection, getDocs, query, where } = require('firebase/firestore');

// Function to fetch all souvenirs with destinatar of type "lover" based on oras and tara
async function fetchSouvenirsByDestinatarType(oras, tara) {
  try {
    // Reference to the collection 'suveniruri'
    const suveniruriCollection = collection(db, 'suveniruri');

    // Query to filter documents where destinatari array contains "lover" and matches oras and tara
    const q = query(suveniruriCollection,
      where('destinatari', 'array-contains', 'co-worker'),
      where('oras', '==', oras),
      where('tara', '==', tara)
    );

    // Get all matching documents from the collection
    const snapshot = await getDocs(q);

    // Array to store souvenirs
    const souvenirs = [];
    snapshot.forEach(doc => {
      souvenirs.push({ id: doc.id, ...doc.data() });
    });

    // Log the retrieved souvenirs
    console.log(souvenirs);

    return souvenirs;
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

// Example usage: Fetch souvenirs with destinatar of type "lover" in a specific city and country
const oras = 'Tamarindo'; // Replace with actual city name
const tara = 'Costa Rica (CR)'; // Replace with actual country name
fetchSouvenirsByDestinatarType(oras, tara);
