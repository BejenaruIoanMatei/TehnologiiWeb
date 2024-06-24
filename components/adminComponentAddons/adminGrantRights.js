const { db } = require('../../utils/firebaseInit');
const { collection, doc, updateDoc } = require('firebase/firestore');

const adminGrantRights = async (req, res) => {
  let body = '';

  // Collect data chunks from request
  req.on('data', chunk => {
    body += chunk.toString();
  });

  // When request data is fully received
  req.on('end', async () => {
    try {
      const { userId } = JSON.parse(body);

      if (!userId) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User ID is required' }));
        return;
      }

      // Reference to the Firestore users collection
      const usersRef = collection(db, 'users');
      const userDocRef = doc(usersRef, userId);

      // Update the role field of the user document to 'admin'
      await updateDoc(userDocRef, { role: 'admin' });

      // Send success response
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
