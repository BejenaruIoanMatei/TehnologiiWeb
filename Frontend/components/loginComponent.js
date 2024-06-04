// Import Firestore database and bcrypt from firebaseInit.js
const { db } = require('../firebaseInit');
const { collection, query, where, getDocs, updateDoc, doc } = require('firebase/firestore');
const bcrypt = require('bcrypt');

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

      // Check if the user is already logged in
      if (user.loggedIn) {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User already logged in' }));
        return;
      }

      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid email or password' }));
        return;
      }

      // Update the loggedIn field to true
      await updateDoc(doc(db, 'users', userDoc.id), {
        loggedIn: true
      });

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
