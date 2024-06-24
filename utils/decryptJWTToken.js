/*
 * Copyright (c) 2024. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */
const crypto = require('crypto');

const key = {
  key_ops: ['encrypt', 'decrypt'],
  ext: true,
  kty: 'oct',
  k: 'afT04ZU0eMCCR0w_nLpg2MMGeAB7hWkutxMRK2hXdQ4',
  alg: 'A256GCM'
};
const iv = [
  140, 123,  35, 183,
  148, 228, 170, 130,
  73, 117, 131,  64
];

function base64ToBuffer(base64) {
  return Buffer.from(base64, 'base64');
}

async function importKey(jwk) {
  return crypto.webcrypto.subtle.importKey(
    "jwk",
    jwk,
    {
      name: "AES-GCM"
    },
    true,
    ["decrypt"]
  );
}

async function decryptJWTToken(encryptedToken) {
  // Convert the base64 encrypted token to a Buffer
  const encryptedData = base64ToBuffer(encryptedToken);

  // Convert the IV to a Buffer
  const ivBuffer = Buffer.from(iv);

  // Import the key for decryption
  const importedKey = await importKey(key);

  // Decrypt the token
  const decryptedTokenData = await crypto.webcrypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: ivBuffer
    },
    importedKey,
    encryptedData
  );

  // Convert the decrypted token data back to a string
  const decoder = new TextDecoder();
  const decryptedToken = decoder.decode(decryptedTokenData);

  return decryptedToken;
}

module.exports = decryptJWTToken;
