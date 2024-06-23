// Import the utility function for URL signing
const { generateSignedUrl } = require('../utils/urlSigningServer');

const statisticAdminRoute = async (req, res) => {
  try {
    // Generate signed URL for statistics.html
    const signedUrl = await generateSignedUrl('/views/statistics.html');

    // Redirect to the signed URL
    res.writeHead(302, { 'Location': signedUrl });
    res.end();
  } catch (error) {
    console.error('Error generating signed URL:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};

module.exports = statisticAdminRoute;
