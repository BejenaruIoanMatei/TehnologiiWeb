const crypto = require('crypto');

const secretKey = 'I"th/80O{{+ptiLfNQX,)5&.IRy:^wno7KON>=:z7;;kAy{~+e$J7./O$9=!lH2/';

const generateSignedUrl = (url, sessionId) => {
  const timestamp = Date.now();
  const nonce = crypto.randomBytes(16).toString('hex');

  const dataToSign = `${url}${timestamp}${sessionId}${nonce}`;
  console.log("Data to sign:", dataToSign);

  const hash = crypto.createHmac('sha256', secretKey)
    .update(dataToSign)
    .digest('hex');

  // Check if the URL already has query parameters
  const separator = url.includes('?') ? '&' : '?';

  const signedUrl = `${url}${separator}timestamp=${timestamp}&hash=${hash}&sessionId=${sessionId}&nonce=${nonce}`;
  console.log("Generated signed URL:", signedUrl);

  return signedUrl;
};

const verifySignedUrl = (req) => {
  console.log("Verifying URL:", req.url);

  const url = req.url.split('?')[0];
  const queryParams = new URLSearchParams(req.url.split('?')[1]);
  const timestamp = parseInt(queryParams.get('timestamp'), 10);
  const hash = queryParams.get('hash');
  const sessionId = queryParams.get('sessionId');
  const nonce = queryParams.get('nonce');

  if (!timestamp || !hash || !sessionId || !nonce) {
    console.error("Missing parameters in URL:", req.url);
    return false;
  }

  const dataToVerify = `${url}${timestamp}${sessionId}${nonce}`;

  const validHash = crypto.createHmac('sha256', secretKey)
    .update(dataToVerify)
    .digest('hex');

  const currentTime = Date.now();
  if (currentTime - timestamp > 5 * 60 * 1000) { // Expire after 5 minutes
    console.warn("URL expired:", req.url);
    return false;
  }

  if (hash === validHash) {
    console.log("URL verification successful:", req.url);
    return true;
  } else {
    console.error("URL verification failed:", req.url);
    return false;
  }
};


module.exports = {
  generateSignedUrl,
  verifySignedUrl,
};
