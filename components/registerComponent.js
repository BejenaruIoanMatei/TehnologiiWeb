/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('../utils/firebaseInit');
const { collection, query, where, getDocs, addDoc } = require('firebase/firestore');
const bcrypt = require('bcrypt');
const cookie = require('cookie');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');

/* Functia ce face handle endpointului de register */
const registerComponent = async (req, res, sessions) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', async () => {
    try {
      const { username, password, age, email } = JSON.parse(body);

      const usersRef = collection(db, 'users');

      const usernameQuery = query(usersRef, where('username', '==', username));
      const usernameSnapshot = await getDocs(usernameQuery);

      /* verificare daca username exista deja in baza de date */
      if (!usernameSnapshot.empty) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Username already exists' }));
        return;
      }

      /* Verificare daca email exista deja in baza de date */
      const emailQuery = query(usersRef, where('email', '==', email));
      const emailSnapshot = await getDocs(emailQuery);

      if (!emailSnapshot.empty) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Email already exists' }));
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const userId = crypto.randomBytes(16).toString('hex');

      const sessionId = uuidv4(undefined, undefined, undefined);


      await addDoc(usersRef, {
        userId,
        username,
        password: hashedPassword,
        age,
        email,
        role: 'user',
        loggedIn: true,
        sessionId: sessionId
      });

      sessions[sessionId] = {
        loggedIn: true,
        email: email,
        userRole: 'user',
        userId: userId
      };
      res.setHeader('Set-Cookie', cookie.serialize('sessionId', sessionId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        path: '/',
        sameSite: 'strict'
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
