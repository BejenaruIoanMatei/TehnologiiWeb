// adminComponent.js (Client-Side)
// Function to fetch signed URL from server for a specific endpoint

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6IjAyMjY0NjU3LTUwOWUtNGNhMS04ZTA0LTg5MmY3ZWI3MDRiMCIsImlhdCI6MTcxOTE3MDM3MywiZXhwIjoxNzE5MTczOTczfQ.4n4FqfW4puPvprbEO-ZZg6gJ7tqFvqoQ1t4yK3bubCU';
async function fetchSignedURL(urlToSign) {
  try {
    const response = await fetch('/generateSignedURL', {
        method: 'POST', // Adjust method as per your server route to generate signed URLs
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ url: urlToSign }),
    });
    if (!response.ok) {
      throw new Error('Failed to fetch signed URL');
    }
    const { signedURL } = await response.json();
    return signedURL;
  } catch (error) {
    console.error('Error fetching signed URL:', error);
    throw error;
  }
}

// Function to handle export to HTML
document.getElementById('exportToHTML').addEventListener('click', async () => {
  console.log("Export to HTML has been clicked!");
  try {
    const signedUrl = await fetchSignedURL('/exportToHTML');
    const exportResponse = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (exportResponse.ok) {
      const blob = await exportResponse.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'exported_souvenirs_HTML.zip');
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
    const signedUrl = await fetchSignedURL('/exportToCSV');
    const exportResponse = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (exportResponse.ok) {
      const blob = await exportResponse.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'exported_souvenirs_CSV.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      console.error('Error exporting to CSV:', exportResponse.statusText);
    }
  } catch (error) {
    console.error('Error exporting to CSV:', error);
  }
});

// Function to handle export to XML
document.getElementById('exportToXML').addEventListener('click', async () => {
  console.log('Export to XML button clicked');
  try {
    const signedUrl = await fetchSignedURL('/exportToXML');
    const exportResponse = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (exportResponse.ok) {
      const blob = await exportResponse.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'exported_souvenirs_XML.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      console.error('Error exporting to XML:', exportResponse.statusText);
    }
  } catch (error) {
    console.error('Error exporting to XML:', error);
  }
});

// Function to handle export to JSON
document.getElementById('exportToJSON').addEventListener('click', async () => {
  console.log('Export to JSON button clicked');
  try {
    const signedUrl = await fetchSignedURL('/exportToJSON');
    const exportResponse = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    if (exportResponse.ok) {
      const blob = await exportResponse.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'exported_souvenirs_JSON.zip');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      console.error('Error exporting to JSON:', exportResponse.statusText);
    }
  } catch (error) {
    console.error('Error exporting to JSON:', error);
  }
});
