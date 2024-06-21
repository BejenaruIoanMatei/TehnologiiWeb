const fs = require('fs');
const path = require('path');
const exportSouvenirsToJson = require('./exportSouvenirsToJson');
const exportSouvenirsToXml = require('./exportSouvenirsToXml');
const exportSouvenirsToHtml = require('./exportSouvenirsToHtml');
const exportSouvenirsToCsv = require('./exportSouvenirsToCsv');

// Function to delete all contents of the 'exports' directory
function clearExportsDirectory() {
  const exportsDir = path.join(__dirname, 'exports');

  if (fs.existsSync(exportsDir)) {
    fs.readdirSync(exportsDir).forEach((file) => {
      const currentPath = path.join(exportsDir, file);

      if (fs.lstatSync(currentPath).isDirectory()) {
        // Recursively delete folder
        fs.rmSync(currentPath, { recursive: true, force: true });
      } else {
        // Delete file
        fs.unlinkSync(currentPath);
      }
    });

    console.log('Cleared all contents from the exports directory.');
  } else {
    // Create the 'exports' directory if it doesn't exist
    fs.mkdirSync(exportsDir);
  }
}

// Function to call both JSON and XML export functions
async function exportAllSouvenirs() {
  try {
    console.log("Clearing exports directory...");
    clearExportsDirectory();

    console.log("Starting JSON export...");
    await exportSouvenirsToJson();
    console.log("JSON export completed.");

    console.log("Starting XML export...");
    await exportSouvenirsToXml();
    console.log("XML export completed.");

    console.log("Starting HTML export...");
    await exportSouvenirsToHtml();
    console.log("HTML export completed.");

    console.log("Starting CSV export...");
    await exportSouvenirsToCsv();
    console.log("CSV export completed.");
  } catch (error) {
    console.error("Error during export: ", error);
  }
}

// Call the function to export souvenirs to both JSON and XML
exportAllSouvenirs();
