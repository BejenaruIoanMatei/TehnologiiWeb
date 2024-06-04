// Import Firestore database from firebaseInit.js
const { db } = require('../firebaseInit');
const { collection, query, where, getDocs } = require('firebase/firestore');
// Register route
const registerComponent = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Register successful' }));
};

module.exports = registerComponent;
