const { db } = require('../firebaseInit');
const { collection, query, where, getDocs, updateDoc, doc } = require('firebase/firestore');
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const { v4: uuidv4 } = require('uuid');

const loginComponent = async (req, res, sessions) => {
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
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid email or password' }));
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const user = userDoc.data();

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Invalid email or password' }));
        return;
      }

      // Generate new session ID
      const sessionId = uuidv4();

      // Update session to logged in
      const cookies = cookie.parse(req.headers.cookie || '');
      const existingSessionId = cookies.sessionId;
      if (existingSessionId && sessions[existingSessionId]) {
        sessions[existingSessionId].loggedIn = true;
        sessions[existingSessionId].email = user.email;
      }

      // Update session in Firestore
      await updateDoc(doc(db, 'users', userDoc.id), {
        loggedIn: true,
        sessionId: sessionId
      });

      // Update session in memory
      sessions[sessionId] = { loggedIn: true, email: user.email };

      // Set session cookie
      res.setHeader('Set-Cookie', cookie.serialize('sessionId', sessionId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
        path: '/', // Ensure the cookie is sent with every request to the server
        sameSite: 'strict' // Ensure the cookie is only sent on same-site requests
      }));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Login successful', email: user.email }));
    } catch (error) {
      console.error('Error logging in:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Server error' }));
    }
  });
};

module.exports = loginComponent;
