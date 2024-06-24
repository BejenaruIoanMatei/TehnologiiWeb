/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { generateSignedUrl } = require('../utils/urlSigningServer');

const statisticAdminRoute = async (req, res) => {
  try {

    const signedUrl = await generateSignedUrl('/views/statistics.html');

    res.writeHead(302, { 'Location': signedUrl });
    res.end();
  } catch (error) {
    console.error('Error generating signed URL:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
};

module.exports = statisticAdminRoute;
