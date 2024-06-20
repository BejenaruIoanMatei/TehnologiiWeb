const signOutComponent = require('../components/logoutComponent');

const signOutRoute = async () => {
  try {
    const response = await fetch('/logoutComponent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Logout successful');
      // Optionally redirect or perform any other action upon successful logout
    } else {
      throw new Error('Logout failed');
    }
  } catch (error) {
    console.error('Error logging out:', error);
    alert('Logout failed: An error occurred');
  }
};


module.exports = signOutRoute;
