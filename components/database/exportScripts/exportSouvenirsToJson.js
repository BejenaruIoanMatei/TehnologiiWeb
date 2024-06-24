/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { collection, getDocs } = require('firebase/firestore');

async function exportSouvenirsToJson(archive, db) {
  try {
    const suveniruriCollection = collection(db, 'suveniruri');
    const snapshot = await getDocs(suveniruriCollection);

    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.suvenir) {
        const folderName = data.suvenir.replace(/\s+/g, '');
        const jsonContent = JSON.stringify({ id: doc.id, ...data }, null, 2);

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
