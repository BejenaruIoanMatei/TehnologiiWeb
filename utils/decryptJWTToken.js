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
  k: 'xZGZ1TkHJAJ8wVAN3ntLFyAjZuCnfdQG-uF_H0XooKU',
  alg: 'A256GCM'
};
const iv = [
  133, 249,  90, 121,
  70, 107, 59, 19,
  17, 176, 77,  224
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
