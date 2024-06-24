// adminComponent.js (Client-Side)
// Function to fetch signed URL from server for a specific endpoint

const token = "m5CwxnhGPKjzcxU0nzlioeW6Mq4LEBCagiqfKP0Vpn8TyKcCFFegbL8/0rUGtXmJhXGvNRXQxvNtlvLLMdweiKgPgXZfa9gbsztC0PsPG2SDsscYOa9+v6zjHzgO+zNho7xGiOUYNje+nqFWqzs6kMDv4byuc85Uq9JCTeDT2/poWIO0PCQHOZ7+e2ZD2Qd0vOLV0Fiyp771c9lCL5lStM40zg5QLynx8hPb7/kni9g+K3R2iLMpWQZcZo6Wxk9UtBlfTY97hjo83NiACeBIbK4a4w==";

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

async function loadUsersToTable() {
  try {


    const signedUrl = await fetchSignedURL('/fetchAllUsers');
    const response = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const users = await response.json();

    // Get the table body element
    const tableBody = document.querySelector('.recent-payments table tbody');

    // Clear any existing rows
    tableBody.innerHTML = '';

    const heading = '\'<tr>\n' +
      '            <th>Username</th>\n' +
      '            <th>Email</th>\n' +
      '            <th>Role</th>\n' +
      '            <th>Login Status</th>\n' +
      '            <th>Action</th>\n' +
      '          </tr>\n' +
      '\''
    tableBody.innerHTML += heading;
    // Add rows for each user
    users.forEach(user => {
      const row = `
        <tr>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>${user.loggedIn ? 'Active' : 'Inactive'}</td>
          <td><a href="#" class="btn">Delete user</a></td>
          <td><a href="#" class="btn">Grant admin permission</a></td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error('Error fetching or displaying users:', error);
    // You might want to display an error message to the user here
  }
}

window.addEventListener('load', loadUsersToTable);

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
