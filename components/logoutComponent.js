/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('../utils/firebaseInit');
const { collection, query, where, getDocs, updateDoc, doc } = require('firebase/firestore');
const cookie = require('cookie');

async function logoutComponent(req, res, sessions) {
  const cookies = req.headers.cookie;

  if (!cookies) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('No cookies found');
    return;
  }

  const parsedCookies = cookie.parse(cookies);
  const sessionId = parsedCookies.sessionId;

  if (sessions[sessionId]) {
    try {
      const usersRef = collection(db, 'users');
      const querySnapshot = await getDocs(query(usersRef, where('sessionId', '==', sessionId)));

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        await updateDoc(doc(db, 'users', userDoc.id), { loggedIn: false, sessionId: null });
        console.log(`User ${userDoc.id} signed out.`);
      } else {
        console.log('User not found in Firestore.');
      }
    } catch (error) {
      console.error('Error signing out:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error signing out');
      return;
    }

    delete sessions[sessionId];
    res.setHeader('Set-Cookie', cookie.serialize('sessionId', '', {
      httpOnly: true,
      maxAge: 0,
      path: '/',
      sameSite: 'strict'
    }));

    res.writeHead(302, { 'Location': '/signIn' });
    res.end();
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid session ID');
  }
}

module.exports = logoutComponent;
