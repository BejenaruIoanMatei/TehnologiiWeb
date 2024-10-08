/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const fs = require('fs');
const jwt = require('jsonwebtoken');

const secretKey = 'I"th/80O{{+ptiLfNQX,)5&.IRy:^wno7KON>=:z7;;kAy{~+e$J7./O$9=!lH2/'; // Replace with a strong secret

const payload = {
  entityId: '02264657-509e-4ca1-8e04-892f7eb704b0', // Replace with the actual entity ID
  iat: Math.floor(Date.now() / 1000), // Issued at (current timestamp)
  exp: Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60) // Expires in 1 hour
};

const token = jwt.sign(payload, secretKey);

fs.writeFileSync('tokenSignUrl.json', JSON.stringify({ token }));

console.log('Token generated and saved to tokenSignUrl.json');
