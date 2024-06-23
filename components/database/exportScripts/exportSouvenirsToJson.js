const { collection, getDocs } = require('firebase/firestore');
const path = require('path');
const fs = require('fs');

async function exportSouvenirsToJson(archive, db) {  // Added db parameter
  try {
    const suveniruriCollection = collection(db, 'suveniruri');
    const snapshot = await getDocs(suveniruriCollection);

    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.suvenir) {
        const folderName = data.suvenir.replace(/\s+/g, '');
        const jsonContent = JSON.stringify({ id: doc.id, ...data }, null, 2);

        // Append JSON content to the archive
        archive.append(jsonContent, { name: `${folderName}/souvenir.json` });
      } else {
        console.warn(`Document with ID: ${doc.id} is missing the 'suvenir' field`);
      }
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

module.exports = exportSouvenirsToJson;
