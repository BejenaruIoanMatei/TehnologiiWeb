const NodeRSA = require('node-rsa');
const fs = require('fs');
const path = require('path');

// Example RSA encryption function
const encryptRSA = (data) => {
  try {
    // Load the public key from file (replace with your public key file path)
    const publicKeyPath = path.join(__dirname, 'public_key.pem');
    const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

    // Create a new NodeRSA object with the public key
    const key = new NodeRSA(publicKey, 'pkcs8-public');

    // Encrypt the data using the public key
    const encryptedData = key.encrypt(data, 'base64');

    return encryptedData;
  } catch (error) {
    console.error('Error encrypting with RSA:', error);
    throw error;
  }
};

module.exports = { encryptRSA };
