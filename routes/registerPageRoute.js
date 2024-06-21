document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const age = document.getElementById('age').value;

  const response = await fetch('/registerComponent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password, age }),
  });

  const result = await response.json();
  if (response.ok) {
    alert('Registration successful!');
    window.location.href = '../views/explorePage.html';  // Redirect to explorePage.html
  } else {
    alert('Registration failed: ' + result.message);
  }
});
