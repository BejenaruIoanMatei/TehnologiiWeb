// Import Firebase modules
const { initializeApp } = require('firebase/app');

const firebaseConfig = {
  apiKey: "AIzaSyAlbteuD8V2X0lh1j6UnX01Ib6JV_lgL0k",
  authDomain: "sore-ff367.firebaseapp.com",
  projectId: "sore-ff367",
  storageBucket: "sore-ff367.appspot.com",
  messagingSenderId: "434942575310",
  appId: "1:434942575310:web:9e766a0e95a4f5b023069f",
  measurementId: "G-GCV4W3XF8M"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

const loginComponent = (req, res) => {
  // Always return success for now
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Login successful' }));
};
// Set the tenant ID on Auth instance.


module.exports = loginComponent;
