const { generateSignedUrl } = require('../utils/urlSigning');
const { getSessionIdFromCookies } = require('../utils/sessionUtils'); // Import session utilities if needed

const adminRoute = (req, res, sessions ) => {
  const sessionId = getSessionIdFromCookies(req); // Get the session ID from cookies

  if (!sessionId || !sessions[sessionId]) {
    // Handle case where session ID is missing or session is not valid
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 Forbidden</h1>', 'utf8');
    return;
  }

  // Generate a signed URL for admin.html including the session ID
  const signedUrl = generateSignedUrl('/views/admin.html', sessionId);

  // Redirect to admin.html using the signed URL
  res.writeHead(302, { 'Location': signedUrl });
  res.end();
};

module.exports = adminRoute;
