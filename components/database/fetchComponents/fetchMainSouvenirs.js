/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs, query, where, limit } = require('firebase/firestore');

const fetchMainSouvenirByDestination = async (req, res) => {
  try {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const destination = JSON.parse(body);
      const { oras, tara, beneficiari } = destination;

      console.log("Informatiile primite de la server sunt: ", oras, tara, beneficiari[0]);
      const suveniruriCollection = collection(db, 'suveniruri');

      const q = query(suveniruriCollection,
        where('oras', '==', oras),
        where('tara', '==', tara),
        where('destinatari', 'array-contains', beneficiari[0]),
        limit(1)
      );

      const snapshot = await getDocs(q);

      let souvenir = null;
      snapshot.forEach(doc => {
        souvenir = { id: doc.id, ...doc.data() };
      });

      console.log('Suvenirul gasit de catre componenta este: ', souvenir);

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(souvenir));
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

module.exports = fetchMainSouvenirByDestination;
