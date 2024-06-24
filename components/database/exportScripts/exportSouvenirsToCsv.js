/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { collection, getDocs } = require('firebase/firestore');
const { Parser } = require('json2csv');

async function exportSouvenirsToCsv(archive, db) {
  try {
    const suveniruriCollection = collection(db, 'suveniruri');
    const snapshot = await getDocs(suveniruriCollection);

    const json2csvParser = new Parser();

    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.suvenir)
      {
        const folderName = data.suvenir.replace(/\s+/g, '');
        const csvData = json2csvParser.parse([{ id: doc.id, ...data }]);
        archive.append(csvData, { name: `${folderName}/souvenir.csv` });
      }
      else
      {
        console.warn(`Document with ID: ${doc.id} is missing the 'suvenir' field`);
      }
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

module.exports = exportSouvenirsToCsv;
