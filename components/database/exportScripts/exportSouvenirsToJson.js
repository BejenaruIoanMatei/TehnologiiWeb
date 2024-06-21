const { db } = require('../../../firebaseInit');
const { collection, getDocs } = require('firebase/firestore');
const fs = require('fs');
const path = require('path');

// Function to fetch all souvenirs from the 'suveniruri' collection and save each to a separate folder as JSON
async function exportSouvenirsToJson() {
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

        // Define the path to the JSON file inside the folder
        const filePath = path.join(folderPath, 'souvenir.json');

        // Convert document data to JSON string
        const jsonSouvenir = JSON.stringify({ id: doc.id, ...data }, null, 2);

        // Write the JSON string to a file
        fs.writeFileSync(filePath, jsonSouvenir);

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

// Export the function to be used in the master file
module.exports = exportSouvenirsToJson;
