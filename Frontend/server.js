const http = require('http');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { db } = require('./firebaseInit'); // Adjust the path if needed
const { collection, getDocs, updateDoc, doc } = require('firebase/firestore');
const cookie = require('cookie');
const cookieParser = require('cookie-parser'); // Import cookie-parser

const loginComponent = require('./components/loginComponent');
const explorePageRoute = require('./routes/indexToExplorePageButtonRoute');
const aboutUsRoute = require('./routes/indexToAboutButtonRoute');
const helpRoute = require('./routes/indexToHelpRoute');
const signInRoute = require('./routes/explorePageToSignInRoute');
const registerComponent = require('./components/registerComponent');
const signOutComponent = require('./components/logoutComponent'); // Adjust the path if needed

const PORT = process.env.PORT || 3000;

// In-memory session store
const sessions = {};

// Initialize cookie-parser middleware
app.use(cookieParser());

// Helper function to generate a new session token
const generateSession = () => {
  const sessionId = uuidv4();
  sessions[sessionId] = { loggedIn: false }; // Initialize session data
  return sessionId;
};

// Helper function to get session ID from cookies
const getSessionIdFromCookies = (req) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  return cookies.sessionId;
};

// Helper function to determine content type based on file extension
const getContentType = (extname) => {
  switch (extname) {
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpg';
    case '.ico':
      return 'image/x-icon';
    default:
      return 'text/html';
  }
};

// Helper function to serve static files
const serveStaticFile = (res, filePath, contentType) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        fs.readFile(path.join(__dirname, 'views', '404.html'), (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        });
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Serve file
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
};

// Function to reset all users' loggedIn field to false
const resetLoggedInStatus = async () => {
  try {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);
    querySnapshot.forEach(async (userDoc) => {
      await updateDoc(doc(db, 'users', userDoc.id), { loggedIn: false });
    });
    console.log('All users\' loggedIn status set to false');
  } catch (error) {
    console.error('Error resetting loggedIn status:', error);
  }
};

// Helper function to check if a user is logged in
const isLoggedIn = (req) => {
  const sessionId = getSessionIdFromCookies(req);
  return sessionId && sessions[sessionId] && sessions[sessionId].loggedIn;
};

// Helper function to redirect if not logged in
const redirectIfNotLoggedIn = (req, res) => {
  if (!isLoggedIn(req)) {
    res.writeHead(302, { 'Location': '/signIn' }); // Redirect to the login page if not logged in
    res.end();
    return true; // Indicate that a redirect has occurred
  }
  return false; // No redirect occurred
};

// Main server code
const server = http.createServer((req, res) => {
  let sessionId = getSessionIdFromCookies(req);

  if (!sessionId || !sessions[sessionId]) {
    // Generate a new session ID if not present or invalid
    sessionId = generateSession();
    res.setHeader('Set-Cookie', cookie.serialize('sessionId', sessionId, {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 day
      path: '/', // Ensure the cookie is sent with every request to the server
      sameSite: 'strict' // Ensure the cookie is only sent on same-site requests
    }));
  }

  console.log(`Session ID: ${sessionId}`);

  if (req.method === 'GET') {
    let filePath;
    const extname = path.extname(req.url);

    if (req.url === '/') {
      filePath = path.join(__dirname, 'views', 'index.html');
    } else if (req.url === '/explore') {
      if (redirectIfNotLoggedIn(req, res)) return;
      // Call the explorePage route handler
      explorePageRoute(req, res);
      return;
    } else if (req.url === '/aboutUs') {
      if (redirectIfNotLoggedIn(req, res)) return;
      // Call the about us route handler
      aboutUsRoute(req, res);
      return;
    } else if (req.url === '/help') {
      if (redirectIfNotLoggedIn(req, res)) return;
      // Call the help route handler
      helpRoute(req, res);
      return;
    } else if (req.url === '/signOut') {
      // Call the sign out component to handle the logout process
      signOutComponent(req, res, sessions);
      return;
    } else if (req.url === '/signIn') {
      // Call the sign in route
      signInRoute(req, res, sessions);
      return;
    } else {
      filePath = path.join(__dirname, req.url);
      // If no extension, default to .html
      if (!extname) {
        filePath += '.html';
      }
    }

    // Determine content type
    const contentType = getContentType(extname);

    // Serve the requested file
    serveStaticFile(res, filePath, contentType);
  } else if (req.method === 'POST' && req.url === '/loginComponent') {
    // Call the login route handler
    loginComponent(req, res, sessions);
  } else if (req.method === 'POST' && req.url === '/registerComponent') {
    // Call the register route handler
    registerComponent(req, res, sessions);
  } else {
    // Method not allowed
    res.writeHead(405, { 'Content-Type': 'text/html' });
    res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
  }
});

server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await resetLoggedInStatus();
});
