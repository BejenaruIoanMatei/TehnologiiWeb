/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {

  apiKey: "AIzaSyAlbteuD8V2X0lh1j6UnX01Ib6JV_lgL0k",

  authDomain: "sore-ff367.firebaseapp.com",

  projectId: "sore-ff367",

  storageBucket: "sore-ff367.appspot.com",

  messagingSenderId: "434942575310",

  appId: "1:434942575310:web:8a31de4a7edda06a23069f",

  measurementId: "G-1QHYEZCS1V"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db };
