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

// Register route
const registerComponent = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Register successful' }));
};

module.exports = registerComponent;
