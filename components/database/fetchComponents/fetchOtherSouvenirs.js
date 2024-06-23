// Import Firestore instance
const { db } = require('../../../utils/firebaseInit');
const { collection, getDocs, query, where } = require('firebase/firestore');

// Function to fetch souvenirs based on oras and tara, excluding the main souvenir
const fetchOtherSouvenirsByDestination = async (req, res) => {
  try {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const destination = JSON.parse(body);
      const { oras, tara } = destination;

      // Fetch the main souvenir first (if needed)
      // const mainSouvenir = await fetchMainSouvenir(destination);

      // Reference to the collection 'suveniruri'
      const suveniruriCollection = collection(db, 'suveniruri');

      // Query to filter documents based on oras and tara
      const q = query(suveniruriCollection,
        where('oras', '==', oras),
        where('tara', '==', tara),
        // You can exclude the main souvenir here if needed
        // where('suvenir', '!=', mainSouvenir)
      );

      // Get all matching documents from the collection
      const snapshot = await getDocs(q);

      // Array to store all souvenirs
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
