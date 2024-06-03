// Event listener for sign-in form submission
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
      window.location.href = '../views/explorePage.html';  // Redirect to explorePage.html
    } else {
      alert('Login failed: ' + result.message);
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Login failed: An error occurred');
  }
});

// Event listener for sign-out button click
document.getElementById('logoutBtn').addEventListener('click', async function() {
  try {
    const response = await fetch('/logoutComponent', {
      method: 'POST',
    });

    const result = await response.json();
    if (response.ok) {
      alert('Logout successful');
      window.location.reload(); // Reload the page to update UI
    } else {
      alert('Logout failed: ' + result.message);
    }
  } catch (error) {
    console.error('Error logging out:', error);
    alert('Logout failed: An error occurred');
  }
});

// Redirect to register page
document.getElementById('submitRegisterFromSignIn').addEventListener('click', function() {
  window.location.href = '../views/registerPage.html';  // Redirect to registerPage.html
});
