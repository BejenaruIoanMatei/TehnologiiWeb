/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6IjAyMjY0NjU3LTUwOWUtNGNhMS04ZTA0LTg5MmY3ZWI3MDRiMCIsImlhdCI6MTcxOTE3NTY2MCwiZXhwIjoxNzE5NzgwNDYwfQ.EkeEZlSzRCwEMLnRuHWCUzDI_cG67ngYrRpWFR_UpUQ";

async function encryptJWTToken(token) {

  const encoder = new TextEncoder();
  const tokenData = encoder.encode(token);

  /* Generare cheiep pentru aes 256 gcm */
  const key = await crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );

  const exportedKey = await crypto.subtle.exportKey("jwk", key);

  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encryptedToken = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv
    },
    key,
    tokenData
  );

  const base64EncryptedToken = btoa(String.fromCharCode(...new Uint8Array(encryptedToken)));

  return {
    encryptedToken: base64EncryptedToken,
    key: exportedKey,
    iv: Array.from(iv)
  };
}

encryptJWTToken(token).then(result => {
  console.log("Encrypted Token:", result.encryptedToken);
  console.log("Encryption Key:", result.key);
  console.log("Initialization Vector:", result.iv);
});

