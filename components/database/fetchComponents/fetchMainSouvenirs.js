// Import Firestore instance
const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs, query, where } = require('firebase/firestore');

// Function to fetch souvenirs based on oras, tara, and destinatari
const fetchSouvenirsByDestination = async (req, res) => {
  try {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const destination = JSON.parse(body);
      const { oras, tara, beneficiari } = destination;

      // Reference to the collection 'suveniruri'
      const suveniruriCollection = collection(db, 'suveniruri');

      // Query to filter documents based on oras, tara, and destinatari
      const q = query(suveniruriCollection,
        where('oras', '==', oras),
        where('tara', '==', tara),
        where('destinatari', 'array-contains-any', beneficiari)
      );

      // Get all matching documents from the collection
      const snapshot = await getDocs(q);

      // Array to store souvenirs
      const souvenirs = [];
      snapshot.forEach(doc => {
        souvenirs.push({ id: doc.id, ...doc.data() });
      });

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(souvenirs));
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
};

module.exports =  fetchSouvenirsByDestination;
