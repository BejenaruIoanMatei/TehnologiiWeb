// Import Firestore instance
const { db } = require('../../../firebaseInit');
const { collection, addDoc } = require('firebase/firestore');

// Function to add test data to the 'suveniruri' collection
async function addTestData() {
  try {
    // Reference to the collection 'suveniruri'
    const suveniruriCollection = collection(db, 'suveniruri');

    // Example documents to add
    const testSuveniruri = [
      {
        tara: 'Australia',
        oras: 'Sydney',
        suvenir: 'Boomerang',
        categorie: 'Traditional',
        destinatari: ['familie', 'prieteni']
      },
      {
        tara: 'Franta',
        oras: 'Paris',
        suvenir: 'Eiffel Tower Porcelain',
        categorie: 'Decor',
        destinatari: ['bunica', 'prieteni']
      },
      {
        tara: 'Romania',
        oras: 'Bucuresti',
        suvenir: 'Martisor',
        categorie: 'Seasonal',
        destinatari: ['prieteni', 'colegi']
      }
    ];

    // Add documents to the collection
    for (const suvenir of testSuveniruri) {
      await addDoc(suveniruriCollection, suvenir);
    }

    console.log('Test data added successfully.');
  } catch (error) {
    console.error("Error adding test data: ", error);
    throw error;
  }
}

// Call the function to add test data
addTestData();
