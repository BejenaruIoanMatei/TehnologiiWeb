/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const token = "2icxBR71f99bbGqgQrhTgDypFKtJbuQpnMcjHUat24v4pkCaxWyaqb6JSddRL4bySieRdxLyvtGOtgepSE63hIf3V6V5UnWn+uIXfX20nWIxjQ4neZsFqhUwDP38HQ4SrgJwu2Y7wVfUjwO7E0tjydvBfB7HhdWhetLamq2rIcQvQF2Fr5lwSVR5mmmhTVRhdQqW4XL1rVG3KxuMphhoiX6+55rUmuId9JlRzrdsuo7aLXRiCXUNrH1Nhix0xkrwR8H0b3ABmvPafg00AOvfLm6yZA==";

const getJWTToken = (req, res) => {
  try {

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ token }));
  } catch (error) {
    console.error('Error generating or retrieving token:', error);
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
};

module.exports = getJWTToken;
