const { db } = require('../utils/firebaseInit');
const { collection, query, where, getDocs, addDoc } = require('firebase/firestore');
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

const registerComponent = async (req, res, sessions) => {
  let body = '';

  // Collect data chunks from request
  req.on('data', chunk => {
    body += chunk.toString();
  });

  // When request data is fully received
  req.on('end', async () => {
    try {
      const { username, password, age, email } = JSON.parse(body);

      // Initialize Firestore collection reference
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

      // Generate userId
      const userId = crypto.randomBytes(16).toString('hex');

      // Generate new session ID
      const sessionId = uuidv4();


      const newUserRef = await addDoc(usersRef, {
        userId,
        username,
        password: hashedPassword,
        age,
        email,
        role: 'user', // Set default role here
        loggedIn: true, // Registering means automatically logged in
        sessionId: sessionId // Store sessionId in Firestore
      });

      // Update session data in memory
      sessions[sessionId] = { loggedIn: true, email };

      // Set session cookie
      res.setHeader('Set-Cookie', cookie.serialize('sessionId', sessionId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
        path: '/', // Ensure the cookie is sent with every request to the server
        sameSite: 'strict' // Ensure the cookie is only sent on same-site requests
      }));

      // Send success response
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
