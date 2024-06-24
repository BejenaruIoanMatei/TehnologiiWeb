/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { collection, getDocs } = require('firebase/firestore');
const xml2js = require('xml2js');

async function exportSouvenirsToXml(archive, db) {
  try {
    const suveniruriCollection = collection(db, 'suveniruri');
    const snapshot = await getDocs(suveniruriCollection);

    const builder = new xml2js.Builder();

    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.suvenir) {
        const folderName = data.suvenir.replace(/\s+/g, '');
        const xmlContent = builder.buildObject({ id: doc.id, ...data });

        // Append XML content to the archive
        archive.append(xmlContent, { name: `${folderName}/souvenir.xml` });
      } else {
        console.warn(`Document with ID: ${doc.id} is missing the 'suvenir' field`);
      }
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

module.exports = exportSouvenirsToXml;
