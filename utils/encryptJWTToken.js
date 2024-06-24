const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRpdHlJZCI6IjAyMjY0NjU3LTUwOWUtNGNhMS04ZTA0LTg5MmY3ZWI3MDRiMCIsImlhdCI6MTcxOTE3NTY2MCwiZXhwIjoxNzE5NzgwNDYwfQ.EkeEZlSzRCwEMLnRuHWCUzDI_cG67ngYrRpWFR_UpUQ";

async function encryptJWTToken(token) {
  // Convert the token to a Uint8Array
  const encoder = new TextEncoder();
  const tokenData = encoder.encode(token);

  // Generate a random 256-bit key for AES-256-GCM
  const key = await crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );

  // Export the key to be able to store it or use it for decryption later
  const exportedKey = await crypto.subtle.exportKey("jwk", key);

  // Generate a random initialization vector
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Encrypt the token
  const encryptedToken = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv
    },
    key,
    tokenData
  );

  // Convert the encrypted token to a base64 string
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

/*
Token: m5CwxnhGPKjzcxU0nzlioeW6Mq4LEBCagiqfKP0Vpn8TyKcCFFegbL8/0rUGtXmJhXGvNRXQxvNtlvLLMdweiKgPgXZfa9gbsztC0PsPG2SDsscYOa9+v6zjHzgO+zNho7xGiOUYNje+nqFWqzs6kMDv4byuc85Uq9JCTeDT2/poWIO0PCQHOZ7+e2ZD2Qd0vOLV0Fiyp771c9lCL5lStM40zg5QLynx8hPb7/kni9g+K3R2iLMpWQZcZo6Wxk9UtBlfTY97hjo83NiACeBIbK4a4w==
Encryption Key: {
  key_ops: [ 'encrypt', 'decrypt' ],
  ext: true,
  kty: 'oct',
  k: 'afT04ZU0eMCCR0w_nLpg2MMGeAB7hWkutxMRK2hXdQ4',
  alg: 'A256GCM'
}
Initialization Vector: [
  140, 123,  35, 183,
  148, 228, 170, 130,
   73, 117, 131,  64
]

 */
