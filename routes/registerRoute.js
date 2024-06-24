


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
