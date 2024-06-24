/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const { generateSignedUrl } = require('../utils/urlSigningServer');
const { getSessionIdFromCookies } = require('../utils/sessionUtils');

const redirectExploreAdminRoute = (req, res, sessions ) => {
  const sessionId = getSessionIdFromCookies(req);

  if (!sessionId || !sessions[sessionId]) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 Forbidden</h1>', 'utf8');
    return;
  }

  const signedUrl = generateSignedUrl('/views/explorePageAdminLoggedIn.html', sessionId);
  res.writeHead(302, { 'Location': signedUrl });
  res.end();
};

module.exports = redirectExploreAdminRoute;
