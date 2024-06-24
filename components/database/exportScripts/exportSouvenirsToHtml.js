/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { collection, getDocs } = require('firebase/firestore');

async function exportSouvenirsToHtml(archive, db) {
  try {
    const suveniruriCollection = collection(db, 'suveniruri');
    const snapshot = await getDocs(suveniruriCollection);

    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.suvenir)
      {
        const folderName = data.suvenir.replace(/\s+/g, '');
        const htmlContent = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <title>${data.suvenir}</title>
                    </head>
                    <body>
                        <h1>${data.suvenir}</h1>
                        <p>ID: ${doc.id}</p>
                        <pre>${JSON.stringify(data, null, 2)}</pre>
                    </body>
                    </html>
                `;
        archive.append(htmlContent, { name: `${folderName}/souvenir.html` });
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

module.exports = exportSouvenirsToHtml;
