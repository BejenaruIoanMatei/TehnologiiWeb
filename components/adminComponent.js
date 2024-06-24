// adminComponent.js (Client-Side)
// Function to fetch signed URL from server for a specific endpoint


async function fetchSignedURL(urlToSign) {
  try {
    const responseToken = await fetch('/getJWTToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      // Optionally, you can send a request body if required by your server
      body: JSON.stringify({})
    });

    if (!responseToken.ok) {
      throw new Error('Failed to fetch token');
    }

    const { token } = await responseToken.json();
    console.log('Token:', token);

    const response = await fetch('/generateSignedURL', {
        method: 'POST',
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
          <td><a id="deleteUser" href="/deleteUser" class="btn">Delete user</a></td>
          <td><a id="grantAdminPermision" href="/grantAdminPermision" class="btn">Grant admin permission</a></td>
          <td><a id="revokeAdminPermision" href="/revokeAdminPermision" class="btn">Revoke admin permission</a></td>
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
