// Import Firestore database from firebaseInit.js
const { db } = require('../firebaseInit');
const { collection, query, where, getDocs, addDoc } = require('firebase/firestore');
const bcrypt = require('bcrypt');

const registerComponent = async (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    const { username, password, age, email } = JSON.parse(body);

    try {
      const usersRef = collection(db, 'users');

      // Check if username already exists
      const usernameQuery = query(usersRef, where('username', '==', username));
      const usernameSnapshot = await getDocs(usernameQuery);

      if (!usernameSnapshot.empty) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Username already exists' }));
        return;
      }

      // Check if email already exists
      const emailQuery = query(usersRef, where('email', '==', email));
      const emailSnapshot = await getDocs(emailQuery);

      if (!emailSnapshot.empty) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Email already exists' }));
        return;
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Add the new user to the database
      await addDoc(usersRef, {
        username,
        password: hashedPassword,
        age,
        email,
        loggedIn: false // Default to false
      });

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Register successful' }));
    } catch (error) {
      console.error('Error registering:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Server error' }));
    }
  });
};

module.exports = registerComponent;
