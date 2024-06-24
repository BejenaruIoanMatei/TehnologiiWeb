/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const token = "m5CwxnhGPKjzcxU0nzlioeW6Mq4LEBCagiqfKP0Vpn8TyKcCFFegbL8/0rUGtXmJhXGvNRXQxvNtlvLLMdweiKgPgXZfa9gbsztC0PsPG2SDsscYOa9+v6zjHzgO+zNho7xGiOUYNje+nqFWqzs6kMDv4byuc85Uq9JCTeDT2/poWIO0PCQHOZ7+e2ZD2Qd0vOLV0Fiyp771c9lCL5lStM40zg5QLynx8hPb7/kni9g+K3R2iLMpWQZcZo6Wxk9UtBlfTY97hjo83NiACeBIbK4a4w==";

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
