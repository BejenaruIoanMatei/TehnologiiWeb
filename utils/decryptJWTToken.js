/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
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

  const encryptedData = base64ToBuffer(encryptedToken);

  const ivBuffer = Buffer.from(iv);

  const importedKey = await importKey(key);

  const decryptedTokenData = await crypto.webcrypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: ivBuffer
    },
    importedKey,
    encryptedData
  );

  const decoder = new TextDecoder();
  return decoder.decode(decryptedTokenData);
}

module.exports = decryptJWTToken;
