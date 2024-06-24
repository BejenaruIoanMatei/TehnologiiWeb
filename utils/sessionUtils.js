/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const cookie = require('cookie');

const getSessionIdFromCookies = (req) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  return cookies.sessionId;
};

module.exports = { getSessionIdFromCookies };
