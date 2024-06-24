/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs } = require('firebase/firestore');

async function fetchCountriesAndCitiesFromFirestore() {
  try {
    const souvenirsCollection = collection(db, 'suveniruri');

    const snapshot = await getDocs(souvenirsCollection);

    const countries = {};

    snapshot.forEach(doc => {
      const data = doc.data();
      const { tara, oras } = data;
      if (!countries[tara]) {
        countries[tara] = [];
      }
      if (!countries[tara].includes(oras)) {
        countries[tara].push(oras);
      }
    });

    console.log(countries);

    return countries;
  } catch (error) {
    console.error("Error fetching countries and cities from Firestore: ", error);
    throw error;
  }
}

module.exports = fetchCountriesAndCitiesFromFirestore;
