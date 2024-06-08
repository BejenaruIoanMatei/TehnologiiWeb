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
      const sessionId = result.sessionId;
      console.log(`Session ID: ${sessionId}`); // Log the session ID

      if (result.email === 'admin@sore.com') {
        window.location.href = `/views/admin.html?sessionId=${sessionId}`;
      } else {
        window.location.href = `/views/explorePageLoggedIn.html?sessionId=${sessionId}`;
      }
    } else {
      alert('Login failed: ' + result.message);
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Login failed: An error occurred');
  }
});

document.getElementById('submitRegisterFromSignIn').addEventListener('click', function() {
  window.location.href = '/views/registerPage.html';  // Redirect to registerPage.html
});
