const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6IjAyMjY0NjU3LTUwOWUtNGNhMS04ZTA0LTg5MmY3ZWI3MDRiMCIsImlhdCI6MTcxOTE3NTY2MCwiZXhwIjoxNzE5NzgwNDYwfQ.EkeEZlSzRCwEMLnRuHWCUzDI_cG67ngYrRpWFR_UpUQ";
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
    console.log("The signed url is: ", signedURL);
    return signedURL;
  } catch (error) {
    console.error('Error fetching signed URL:', error);
    throw error;
  }
}

document.getElementById('signinForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const signedUrl = await fetchSignedURL('/loginComponent');
    const response = await fetch(signedUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (response.ok) {
      // Redirect or handle success as needed
      alert('Login Successful!');
      window.location.href = '/'; // Redirect to home page after successful registration
    } else {
      alert('Login failed: ' + result.message);
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Login failed: An error occurred');
  }
});

// Event listener for the register link click
document.getElementById('submitRegisterFromSignIn').addEventListener('click', function() {
  window.location.href = '/views/registerPage.html';  // Redirect to registerPage.html
});
