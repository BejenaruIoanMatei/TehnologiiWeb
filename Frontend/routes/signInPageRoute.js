// Assuming you have a sessionId stored in a global variable or retrieved from cookies
let sessionId = '';

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

      // Redirect based on user role or condition
      if (result.email === 'admin@sore.com') {
        window.location.href = `/views/explorePageAdminLoggedIn.html`;
      } else {
        window.location.href = `/views/explorePageLoggedIn.html`;
      }
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
