// Import Firestore database from firebaseInit.js
const { db } = require('../firebaseInit');
const { collection, query, where, getDocs } = require('firebase/firestore');

// Logout function
async function logout() {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}

module.exports = { logout };
