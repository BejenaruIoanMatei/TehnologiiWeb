// ... your existing import statements ...

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const exportSouvenirsToJson = require('../components/database/exportScripts/exportSouvenirsToJson');
const exportSouvenirsToXml = require('../components/database/exportScripts/exportSouvenirsToXml');
const exportSouvenirsToHtml = require('../components/database/exportScripts/exportSouvenirsToHtml');
const exportSouvenirsToCsv = require('../components/database/exportScripts/exportSouvenirsToCsv');

const exportsDir = path.join(__dirname, 'exports');

// Helper function to get all files of a certain type from a directory
function getFilesByType(dir, ext) {
  return fs
    .readdirSync(dir)
    .filter(
      (file) => fs.statSync(path.join(dir, file)).isFile() && path.extname(file) === ext
    );
}

// Function to create a ZIP archive of selected files and initiate download
function createAndDownloadZipArchive(files, archiveName) {
  const archive = archiver('zip', { zlib: { level: 9 } });

  res.writeHead(200, {
    'Content-Type': 'application/zip',
    'Content-disposition': `attachment; filename=${archiveName}`,
  });

  archive.on('error', (err) => {
    res.writeHead(500);
    res.end(`Error creating archive: ${err.message}`);
    throw err; 
  });

  archive.pipe(res);

  files.forEach((file) => {
    archive.file(path.join(exportsDir, file.split('/').slice(0, -1).join('/'), file), {
      name: file,
    });
  });

  archive.finalize();
}

document.getElementById('exportToHTML').addEventListener('click', async () => {
  await exportSouvenirsToHtml(); // Export to HTML first

  const htmlFiles = [];
  fs.readdirSync(exportsDir).forEach((dir) => {
    if (fs.statSync(path.join(exportsDir, dir)).isDirectory()) {
      htmlFiles.push(...getFilesByType(path.join(exportsDir, dir), '.html').map(file => `${dir}/${file}`));
    }
  });

  if (htmlFiles.length > 0) {
    createAndDownloadZipArchive(htmlFiles, 'html_exports.zip');
  } else {
    console.log("No HTML files found to export.");
  }
});

// ... similar event listeners for exportToCSV, exportToXML, exportToJSON ...

// Example for exportToJSON:

document.getElementById('exportToJSON').addEventListener('click', async () => {
  await exportSouvenirsToJson(); 

  const jsonFiles = [];
  fs.readdirSync(exportsDir).forEach((dir) => {
    if (fs.statSync(path.join(exportsDir, dir)).isDirectory()) {
      jsonFiles.push(...getFilesByType(path.join(exportsDir, dir), '.json').map(file => `${dir}/${file}`));
    }
  });

  if (jsonFiles.length > 0) {
    createAndDownloadZipArchive(jsonFiles, 'json_exports.zip');
  } else {
    console.log("No JSON files found to export.");
  }
});
