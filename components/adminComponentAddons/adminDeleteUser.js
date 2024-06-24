const { db } = require('../../utils/firebaseInit');
const { collection, doc, deleteDoc } = require('firebase/firestore');

const adminDeleteUser = async (req, res) => {
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

      // Delete the user document
      await deleteDoc(userDocRef);

      // Send success response
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'User deleted successfully' }));

    } catch (error) {
      console.error('Error deleting user:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Server error' }));
    }
  });
};

module.exports = adminDeleteUser;
