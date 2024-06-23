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
    alert(responseData.message); // Show response message

    if (response.ok) {
      // Redirect or handle success as needed
      window.location.href = '/'; // Redirect to home page after successful registration
    }
  } catch (error) {
    console.error('Error registering:', error);
    alert('Error registering. Please try again.'); // Show generic error message
  }
});
