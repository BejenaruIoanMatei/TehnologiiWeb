const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs } = require('firebase/firestore');

// Function to fetch all users
async function fetchAllUsers(req, res) {
  try {
    // Get a reference to the 'users' collection (adjust if your collection name is different)
    const usersCollection = collection(db, 'users');

    // Fetch all documents from the collection
    const snapshot = await getDocs(usersCollection);

    // Extract user data from each document
    const allUsers = [];
    snapshot.forEach(doc => {
      allUsers.push({ id: doc.id, ...doc.data() }); // Include the document ID for reference
    });

    console.log('All Users found:', allUsers);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(allUsers));
  } catch (error) {
    console.error("Error fetching users:", error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
}

module.exports = fetchAllUsers;
