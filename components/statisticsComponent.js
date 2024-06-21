// statisticsComponent.js

// Import Firestore database from firebaseInit.js
const { db } = require('../utils/firebaseInit');
const { collection, query, where, getDocs } = require('firebase/firestore');

// Function to update statistics values
async function updateStatistics() {
  try {
    // Fetch data from the database
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('loggedIn', '==', true)); // Query only loggedIn users
    const querySnapshot = await getDocs(q);
    // Update HTML elements with fetched data
    document.getElementById('loggedUsers').innerText = querySnapshot.size;
  } catch (error) {
    console.error('Error updating statistics:', error);
  }
}

// Automatically update statistics when the page loads
window.addEventListener('load', () => {
  updateStatistics();
});
