// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlbteuD8V2X0lh1j6UnX01Ib6JV_lgL0k",
  authDomain: "sore-ff367.firebaseapp.com",
  projectId: "sore-ff367",
  storageBucket: "sore-ff367.appspot.com",
  messagingSenderId: "434942575310",
  appId: "1:434942575310:web:9e766a0e95a4f5b023069f",
  measurementId: "G-GCV4W3XF8M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
