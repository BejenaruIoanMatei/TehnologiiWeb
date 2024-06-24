/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs } = require('firebase/firestore');


async function fetchAllUsers(req, res) {
  try {
    const usersCollection = collection(db, 'users');
    const snapshot = await getDocs(usersCollection);

    const allUsers = [];
    snapshot.forEach(doc => {
      const userData = doc.data(); // Get the data for this user

      const missingFields = [];
      if (!userData.email) missingFields.push('email');
      if (!userData.username) missingFields.push('username');
      if (!userData.role) missingFields.push('role');
      if (userData.loggedIn === undefined) missingFields.push('loggedIn');
      if (userData.userId === undefined) missingFields.push('userId');

      if (missingFields.length === 0) {
        allUsers.push({
          id: doc.id,
          email: userData.email,
          username: userData.username,
          role: userData.role,
          loggedIn: userData.loggedIn,
          userId: userData.userId,
        });
      } else {
        console.warn(`Document with ID: ${doc.id} is missing the following fields: ${missingFields.join(', ')}`);
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
