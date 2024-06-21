const cookie = require('cookie');

// Function to extract session ID from cookies
const getSessionIdFromCookies = (req) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  return cookies.sessionId;
};

module.exports = { getSessionIdFromCookies };
