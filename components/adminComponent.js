// adminComponent.js (Client-Side)

// Function to handle export to HTML
document.getElementById('exportToHTML').addEventListener('click', async () => { // Assuming you have a button with the ID 'exportButton'
  try {
    console.log("Export to HTML has been clicked!");

    const response = await fetch('/exportToHTML', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'exported_souvenirs.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// Function to handle export to CSV
document.getElementById('exportToCSV').addEventListener('click', async () => {
  console.log('Export to CSV button clicked');
  try {
    const response = await fetch('/exportToCSV', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
      alert('CSV export successful!');
    } else {
      alert('Failed to export CSV');
    }
  } catch (error) {
    console.error('Error exporting CSV:', error);
    alert('Failed to export CSV');
  }
});

// Function to handle export to XML
document.getElementById('exportToXML').addEventListener('click', async () => {
  console.log('Export to XML button clicked');
  try {
    const response = await fetch('/exportToXML', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
      alert('XML export successful!');
    } else {
      alert('Failed to export XML');
    }
  } catch (error) {
    console.error('Error exporting XML:', error);
    alert('Failed to export XML');
  }
});

// Function to handle export to JSON
document.getElementById('exportToJSON').addEventListener('click', async () => {
  console.log('Export to JSON button clicked');
  try {
    const response = await fetch('/exportToJSON', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    });

    if (response.ok) {
      alert('JSON export successful!');
    } else {
      alert('Failed to export JSON');
    }
  } catch (error) {
    console.error('Error exporting JSON:', error);
    alert('Failed to export JSON');
  }
});
