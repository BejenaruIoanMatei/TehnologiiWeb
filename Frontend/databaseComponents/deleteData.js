// Import Firestore instance
const { db } = require('../firebaseInit');
const { collection, getDocs, deleteDoc, doc } = require('firebase/firestore');

// Function to delete all documents from the 'suveniruri' collection
async function deleteTestData() {
  try {
    // Reference to the collection 'suveniruri'
    const suveniruriCollection = collection(db, 'suveniruri');

    // Get all documents from the collection
    const snapshot = await getDocs(suveniruriCollection);

    // Delete each document
    const deletePromises = snapshot.docs.map(document => {
      return deleteDoc(doc(db, 'suveniruri', document.id));
    });

    // Wait for all deletions to complete
    await Promise.all(deletePromises);

    console.log('Test data deleted successfully.');
  } catch (error) {
    console.error("Error deleting test data: ", error);
    throw error;
  }
}

// Call the function to delete test data
deleteTestData();
