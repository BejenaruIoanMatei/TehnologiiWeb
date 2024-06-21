const { db } = require('../../../firebaseInit');
const { collection, getDocs } = require('firebase/firestore');
const fs = require('fs');
const path = require('path');

// Function to fetch all souvenirs from the 'suveniruri' collection and save each to a separate folder as HTML
async function exportSouvenirsToHtml() {
  try {
    // Reference to the collection 'suveniruri'
    const suveniruriCollection = collection(db, 'suveniruri');

    // Get all documents from the collection
    const snapshot = await getDocs(suveniruriCollection);

    // Ensure the 'exports' directory exists
    const exportsDir = path.join(__dirname, 'exports');
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir);
    }

    // Iterate through documents and save each one to a separate folder
    snapshot.forEach(doc => {
      const data = doc.data();

      if (data.suvenir) {
        // Generate a folder name by removing spaces from the 'suvenir' field
        const folderName = data.suvenir.replace(/\s+/g, '');

        // Define the path to the folder
        const folderPath = path.join(exportsDir, folderName);

        // Create the folder if it doesn't exist
        if (!fs.existsSync(folderPath)) {
          fs.mkdirSync(folderPath);
        }

        // Define the path to the HTML file inside the folder
        const filePath = path.join(folderPath, 'souvenir.html');

        // Generate HTML content
        const htmlContent = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.suvenir}</title>
          </head>
          <body>
            <h1>${data.suvenir}</h1>
            <p>ID: ${doc.id}</p>
            <pre>${JSON.stringify(data, null, 2)}</pre>
          </body>
          </html>
        `;

        // Write the HTML content to a file
        fs.writeFileSync(filePath, htmlContent);

        // Log the successful export for each file
        console.log(`Exported souvenir with name: ${data.suvenir} to ${filePath}`);
      } else {
        console.warn(`Document with ID: ${doc.id} is missing the 'suvenir' field`);
      }
    });

  } catch (error) {
    console.error("Error fetching data: ", error);
    throw error;
  }
}

// Export the function to be used in other scripts
module.exports = exportSouvenirsToHtml;
