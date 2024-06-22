
// Event listener for the signinForm submission
document.getElementById('signinForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/loginComponent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Login successful');

      // Determine the redirect URL based on user role from the server response
      let redirectUrl = '';
      if (result.role === 'admin') {
        redirectUrl = await generateSignedUrl('/redirectAdminRoute');
      } else {
        redirectUrl = await generateSignedUrl('/redirectUserRoute');
      }

      window.location.href = redirectUrl; // Redirect to the signed URL
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
