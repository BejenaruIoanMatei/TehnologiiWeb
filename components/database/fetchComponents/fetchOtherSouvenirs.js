/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs, query, where } = require('firebase/firestore');

const fetchOtherSouvenirsByDestination = async (req, res) => {
  try {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const destination = JSON.parse(body);
      const { oras, tara } = destination;

      const suveniruriCollection = collection(db, 'suveniruri');

      const q = query(suveniruriCollection,
        where('oras', '==', oras),
        where('tara', '==', tara),
      );

      const snapshot = await getDocs(q);

      const allSouvenirs = [];
      snapshot.forEach(doc => {
        allSouvenirs.push({ id: doc.id, ...doc.data() });
      });

      console.log('All Souvenirs found:', allSouvenirs);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(allSouvenirs));
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

module.exports = fetchOtherSouvenirsByDestination;
