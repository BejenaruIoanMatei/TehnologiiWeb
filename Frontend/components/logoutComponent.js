const { db } = require('../firebaseInit');
const { collection, query, where, getDocs, updateDoc, doc } = require('firebase/firestore');

// Function to reset the loggedIn field for the current user to false
async function logout(req, res, sessions) {
  const sessionId = req.cookies.sessionId;

  if (sessions[sessionId]) {
    // Update the loggedIn status in Firestore
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

    // Remove session from in-memory storage
    delete sessions[sessionId];
    res.setHeader('Set-Cookie', cookie.serialize('sessionId', '', {
      httpOnly: true,
      maxAge: 0, // Expire cookie immediately
      path: '/', // Same path as when it was set
      sameSite: 'strict' // SameSite attribute for security
    }));

    res.writeHead(302, { 'Location': '/signIn' }); // Redirect to sign-in page after sign-out
    res.end();
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid session ID');
  }
}

module.exports = logout;
