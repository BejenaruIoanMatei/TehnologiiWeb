const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs } = require('firebase/firestore');

// Function to fetch all users with selected fields
async function fetchAllUsers(req, res) {
  try {
    const usersCollection = collection(db, 'users');
    const snapshot = await getDocs(usersCollection);

    const allUsers = [];
    snapshot.forEach(doc => {
      const userData = doc.data(); // Get the data for this user
      // Check if the required fields exist in the data
      if (userData.email && userData.username && userData.role && userData.loggedIn !== undefined) {
        allUsers.push({
          id: doc.id, // Include the document ID
          email: userData.email,
          username: userData.username,
          role: userData.role,
          loggedIn: userData.loggedIn,
        });
      } else {
        console.warn(`Document with ID: ${doc.id} is missing one or more required fields`);
      }
    });

    console.log('All Users found (with selected fields):', allUsers);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(allUsers));

  } catch (error) {
    console.error("Error fetching users:", error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
}

module.exports = fetchAllUsers;
