const http = require('http');
const fs = require('fs');
const path = require('path');
const { db } = require('./firebaseInit'); // Adjust the path if needed
const { collection, getDocs, updateDoc, doc } = require('firebase/firestore');
const net = require('net');

const loginRoute = require('./components/loginComponent');
const explorePageRoute = require('./routes/indexToExplorePageButtonRoute');
const aboutUsRoute = require('./routes/indexToAboutButtonRoute');
const helpRoute = require('./routes/indexToHelpRoute');
const signInRoute = require('./routes/explorePageToSignInRoute');
const registerRoute = require('./components/registerComponent');
// const adminHandler = require('./routes/adminRoute');
// const userHandler = require('./routes/loggedUserRoute');
const PORT = process.env.PORT || 3000;


// Function to ensure port 3000 is free
const ensurePortFree = (port) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Port is currently in use
        const clientSocket = new net.Socket();

        clientSocket.once('error', (err) => {
          if (err.code === 'ECONNREFUSED') {
            // No server is actually listening on this port, so it is free
            resolve();
          } else {
            reject(err);
          }
        });

        clientSocket.once('connect', () => {
          // A server is still listening on this port, so we need to force close it
          clientSocket.end();
          reject(new Error(`Port ${port} is already in use`));
        });

        clientSocket.connect({ port });
      } else {
        reject(err);
      }
    });

    server.once('listening', () => {
      // Port is free to use
      server.close();
      resolve();
    });

    server.listen(port);
  });
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

// Function to set all users' loggedIn field to false
const resetLoggedInStatus = async () => {
  try {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);
    querySnapshot.forEach(async (userDoc) => {
      await updateDoc(doc(db, 'users', userDoc.id), { loggedIn: false });
    });
    console.log('All users loggedIn status set to false');
  } catch (error) {
    console.error('Error resetting loggedIn status:', error);
  }
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    let filePath;
    const extname = path.extname(req.url);

    if (req.url === '/') {
      filePath = path.join(__dirname, 'views', 'index.html');
    } else if (req.url === '/explore') {
      // Call the explorePage route handler
      explorePageRoute(req, res);
      return;
    } else if (req.url === '/aboutUs') {
      // Call the about us route handler
      aboutUsRoute(req, res);
      return;
    } else if (req.url === '/help') {
      // Call the help route handler
      helpRoute(req, res);
      return;
    } else if (req.url === '/signIn') {
      // Call the sign in route
      signInRoute(req, res);
      return;
    } else if (req.url === '/admin') {
      adminHandler(req, res);
      return;
    } else if (req.url === '/user') {
      userHandler(req, res);
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
    loginRoute(req, res);
  } else if (req.method === 'POST' && req.url === '/registerComponent') {
    // Call the register route handler
    registerRoute(req, res);
  } else {
    // Method not allowed
    res.writeHead(405, { 'Content-Type': 'text/html' });
    res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
  }
  server.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await resetLoggedInStatus(); // Reset loggedIn status when the server starts
  });
});

// Ensure the port is free before starting the server
ensurePortFree(PORT)
  .then(server)
  .catch((err) => {
    console.error(`Failed to start server: ${err.message}`);
  });
