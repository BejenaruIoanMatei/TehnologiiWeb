const NodeRSA = require('node-rsa');
const fs = require('fs');
const path = require('path');

const encryptRSA = (data) => {
  try {
    // Load the public key from file (replace with your public key file path)
    const publicKey = '-----BEGIN PUBLIC KEY-----MIICITANBgkqhkiG9w0BAQEFAAOCAg4AMIICCQKCAgB+K8Muhs/lv4kv9Px5YsUEtvT4JbxEpnlITg2KwMavptOUvvDAyvWEvr41BFziPQqn/eVAQdpk0u9CK+hE1kTPXnVbu0OvkJbZtNbaReFWtWM0HGt4VqZpvaGq1il0bb5/YhcAsMFl1BrXkGte9ukfqBh2c2UlQ0wG5xczMQKbuPixgr3FpmUJkydg/P28K5/POJ3/muam50q0dIvp1h9cZiaK3isSguRYnifZ38Zrg2+mwZ19zOPocKI06XkXPCM1M6EBaOQHSHD8H8Zwx/AgC1XTswv0kD6xnOPvftN9JuNeRQeFQu5/gEdMvHWgrHSoMw8m4XZIDRW5OlRVzwk5uk079bb5DwTFtYtFPsJR3hOqGt9i/x+cf42NuYBoAsNONXTXCTDJxfm7pt6/emb9tmJnHyjfFDoFAu1lyK/7HUvtIK122kPhPlFfufvFZB7g4CloYr/KpqlV31xozgLY9/0GV792cvuYl6vMZbueJZO9Q1Gz6JA8VG9lGmUkMYpXpbQ8Hmqx+D/jd6JpUi/JqCqBS5jYEb+ETMqjOmOOAJ2FJkq+xLfBZOXhboJWKS9mUBYUMdE5S1fXlM03ZFxBHgXgiwwzd3P89ZWqBDM64FvUd81pf5TShlz2AE6lesBXuQkM7KyqsdMM+bIXHmLi5JzlGkM/HOw+MwwHEf3mhwIDAQAB-----END PUBLIC KEY-----';

    // Create a new NodeRSA object with the public key
    const key = new NodeRSA(publicKey, 'pkcs8-public');

    // Encrypt the data using the public key
    const encryptedData = key.encrypt(data, 'base64');

    return encryptedData;
  } catch (error) {
    console.error('Error encrypting with RSA:', error);
    throw error;
  }
};

// Function to handle export to HTML
document.getElementById('exportToHTML').addEventListener('click', async () => { // Assuming you have a button with the ID 'exportButton'
  try {
    console.log("Export to HTML has been clicked!");

    // Fetch signed URL from server
    const signedUrl = await encryptURL('/exportToHTML');
    // Use the signed URL in the POST request to /exportToHTML
    const exportResponse = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}),
    });

    if (exportResponse.ok) {
      const blob = await exportResponse.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'exported_souvenirs.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      console.error('Error exporting to HTML:', exportResponse.statusText);
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
