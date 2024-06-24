/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

async function fetchSignedURL(urlToSign) {
  try {
    const responseToken = await fetch('/getJWTToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });


    if (!responseToken.ok) {
      throw new Error('Failed to fetch token');
    }

    const { token } = await responseToken.json();

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

    const tableBody = document.getElementById('tableBody');

    if (!tableBody) {
      throw new Error('Table body element not found');
    }

    tableBody.innerHTML = '';

    users.forEach(user => {
      const row = `
        <tr>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>${user.loggedIn ? 'Active' : 'Inactive'}</td>
          <td>${user.userId}</td>
          <td>
            <button class="btn deleteUser" data-user-id="${user.id}">Delete user</button>
            <button class="btn grantAdminPermission" data-user-id="${user.id}">Grant admin permission</button>
            <button class="btn revokeAdminPermission" data-user-id="${user.id}">Revoke admin permission</button>
          </td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });

    tableBody.addEventListener('click', async (event) => {
      const target = event.target;

      if (target.classList.contains('deleteUser')) {
        const userId = target.getAttribute('data-user-id');
        await deleteUser(userId);
      } else if (target.classList.contains('grantAdminPermission')) {
        const userId = target.getAttribute('data-user-id');
        await grantAdminPermission(userId);
      } else if (target.classList.contains('revokeAdminPermission')) {
        const userId = target.getAttribute('data-user-id');
        await revokeAdminPermission(userId);
      }
    });

  } catch (error) {
    console.error('Error fetching or displaying users:', error);
  }
}

async function deleteUser(userId) {
  try {
    const signedUrl = await fetchSignedURL(`/adminDeleteUser`);
    const response = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId }) // Include the userId in the request body
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user with ID ${userId}`);
    }

    await loadUsersToTable();

  } catch (error) {
    console.error(`Error deleting user with ID ${userId}:`, error);
  }
}


async function grantAdminPermission(userId) {
  try {
    const signedUrl = await fetchSignedURL(`/adminGrantRights`);
    const response = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    });

    if (!response.ok) {
      throw new Error(`Failed to grant admin permission to user with ID ${userId}`);
    }

    await loadUsersToTable();

  } catch (error) {
    console.error(`Error granting admin permission to user with ID ${userId}:`, error);
  }
}

async function revokeAdminPermission(userId) {
  try {
    const signedUrl = await fetchSignedURL(`/adminRevokeRights`);
    const response = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId })
    });

    if (!response.ok) {
      throw new Error(`Failed to revoke admin permission from user with ID ${userId}`);
    }

    await loadUsersToTable();

  } catch (error) {
    console.error(`Error revoking admin permission from user with ID ${userId}:`, error);
  }
}

window.addEventListener('load', loadUsersToTable);

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
