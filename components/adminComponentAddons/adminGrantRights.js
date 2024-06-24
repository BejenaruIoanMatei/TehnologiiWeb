/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('../../utils/firebaseInit');
const { collection, doc, updateDoc } = require('firebase/firestore');

const adminGrantRights = async (req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const { userId } = JSON.parse(body);

      if (!userId) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User ID is required' }));
        return;
      }

      const usersRef = collection(db, 'users');
      const userDocRef = doc(usersRef, userId);

      await updateDoc(userDocRef, { role: 'admin' });

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User role updated to admin successfully' }));

    } catch (error) {
      console.error('Error updating user role:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Server error' }));
    }
  });
};

module.exports = adminGrantRights;
