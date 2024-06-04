// Import Firestore database from firebaseInit.js
const { db } = require('../firebaseInit');
const { collection, query, where, getDocs } = require('firebase/firestore');

const loginComponent = async (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const { email, password } = JSON.parse(body);

    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // No user found with the given email
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid email or password' }));
        return;
      }

      // Assuming email is unique, so we can just take the first document
      const userDoc = querySnapshot.docs[0];
      const user = userDoc.data();

      // Directly compare the provided password with the stored password
      if (password !== user.password) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid email or password' }));
        return;
      }

      // If login is successful
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Login successful', user }));
    } catch (error) {
      console.error('Error logging in:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Server error' }));
    }
  });
};

module.exports = loginComponent;
