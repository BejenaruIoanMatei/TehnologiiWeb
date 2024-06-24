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
      // Optionally, you can send a request body if required by your server
      body: JSON.stringify({})
    });

    if (!responseToken.ok) {
      throw new Error('Failed to fetch token');
    }

    const { token } = await responseToken.json();
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

document.getElementById('submitRegister').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;

  const formData = {
    username,
    email,
    password,
    age
  };

  try {
    const signedUrl = await fetchSignedURL('/registerComponent');
    const response = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const responseData = await response.json();
    alert(responseData.message);

    if (response.ok) {
      window.location.href = '/';
    }
  } catch (error) {
    console.error('Error registering:', error);
    alert('Error registering. Please try again.');
  }
});
