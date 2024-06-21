const { db } = require('../firebaseInit');
const { collection, query, where, getDocs, addDoc, updateDoc, doc } = require('firebase/firestore');
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const { v4: uuidv4 } = require('uuid');

const registerComponent = async (req, res, sessions) => {
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

      // Generate new session ID
      const sessionId = uuidv4();

      // Add the new user with default role "user"
      const newUserRef = await addDoc(usersRef, {
        username,
        password: hashedPassword,
        age,
        email,
        role: 'user', // Set default role here
        loggedIn: true, // Registering means automatically logged in
        sessionId: sessionId // Store sessionId in Firestore
      });

      // Update session data
      sessions[sessionId] = { loggedIn: true, email }; // Store session in memory

      // Set session cookie
      res.setHeader('Set-Cookie', cookie.serialize('sessionId', sessionId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
        path: '/', // Ensure the cookie is sent with every request to the server
        sameSite: 'strict' // Ensure the cookie is only sent on same-site requests
      }));

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
