const http = require('http');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { db } = require('./firebaseInit');
const { collection, getDocs, updateDoc, doc } = require('firebase/firestore');
const cookie = require('cookie');

// Components and routes
const loginComponent = require('./components/loginComponent');
const explorePageRoute = require('./routes/indexToExplorePageButtonRoute');
const aboutUsRoute = require('./routes/indexToAboutButtonRoute');
const helpRoute = require('./routes/indexToHelpRoute');
const signInRoute = require('./routes/explorePageToSignInRoute');
const registerComponent = require('./components/registerComponent');
const logoutComponent = require('./components/logoutComponent');
const standardUserRoute = require('./routes/redirectExploreUserRoute');
const adminUserRoute = require('./routes/redirectExploreAdminRoute');
const adminPageUserRoute = require('./routes/redirectAdminPageRoute');
const adminStatisticsUserRoute = require('./routes/statisticsRoute');

const PORT = process.env.PORT || 3000;

// In-memory session store
const sessions = {};

// Helper functions
const generateSession = () => {
  const sessionId = uuidv4();
  sessions[sessionId] = { loggedIn: false, userRole: 'user' };
  return sessionId;
};

const getSessionIdFromCookies = (req) => {
  const cookies = cookie.parse(req.headers.cookie || '');
  return cookies.sessionId;
};

const getContentType = (extname) => {
  const contentTypes = {
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.ico': 'image/x-icon',
    '.html': 'text/html',
  };
  return contentTypes[extname] || 'text/html';
};

const serveStaticFile = (res, filePath, contentType) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.readFile(path.join(__dirname, 'views', '404.html'), (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      const extname = path.extname(filePath);
      let cacheControl = 'no-store';
      if (extname === '.html') {
        cacheControl = 'no-cache, no-store, must-revalidate';
      } else if (extname === '.css' || extname === '.js' || extname === '.json') {
        cacheControl = 'public, max-age=86400';
      } else if (extname === '.png' || extname === '.jpg' || extname === '.ico') {
        cacheControl = 'public, max-age=604800';
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': cacheControl,
      });
      res.end(content, 'utf8');
    }
  });
};

const resetLoggedInStatus = async () => {
  try {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);
    querySnapshot.forEach(async (userDoc) => {
      await updateDoc(doc(db, 'users', userDoc.id), { loggedIn: false, sessionId: false });
    });
    console.log('All users\' loggedIn status set to false');
  } catch (error) {
    console.error('Error resetting loggedIn status:', error);
  }
};

const isLoggedIn = (req) => {
  const sessionId = getSessionIdFromCookies(req);
  return sessionId && sessions[sessionId] && sessions[sessionId].loggedIn;
};

const redirectIfNotLoggedIn = (req, res) => {
  if (!isLoggedIn(req)) {
    res.writeHead(302, { 'Location': '/signIn' });
    res.end();
    return true;
  }
  return false;
};

const redirectIfNotLoggedInAdmin = (req, res) => {
  const sessionId = getSessionIdFromCookies(req);
  if (!sessionId || !sessions[sessionId] || sessions[sessionId].userRole !== 'admin') {
    res.writeHead(302, { 'Location': '/explore' });
    res.end();
    return true;
  }
  return false;
};

const routes = {
  '/': (req, res) => serveStaticFile(res, path.join(__dirname, 'views', 'index.html'), 'text/html'),
  '/explore': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    if( sessions[getSessionIdFromCookies(req)].userRole === 'admin' )
    {
      adminUserRoute(req,res);
    }
    else
    {
      explorePageRoute(req, res);
    }
  },
  '/aboutUs': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    aboutUsRoute(req, res);
  },
  '/help': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    helpRoute(req, res);
  },
  '/redirectAdminRoute': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    if (sessions[getSessionIdFromCookies(req)].userRole === 'admin')
    {
      adminUserRoute(req, res);
    }
  },
  '/redirectUserRoute': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    if (sessions[getSessionIdFromCookies(req)].userRole === 'user')
    {
      standardUserRoute(req, res);
    }
  },
  '/redirectStatistics': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    const sessionId = getSessionIdFromCookies(req);
    if (sessions[sessionId].userRole === 'admin')
    {
      adminStatisticsUserRoute(req, res);
    } else
    {
      res.writeHead(302, { 'Location': '/explorePageLoggedIn.html' });
      res.end();
    }
  },
  '/redirectAdmin': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    const sessionId = getSessionIdFromCookies(req);
    if (sessions[sessionId].userRole === 'admin') {
      adminPageUserRoute(req, res);
    } else {
      res.writeHead(302, { 'Location': '/explorePageLoggedIn.html' });
      res.end();
    }
  },
  '/signOut': async (req, res) => {
    await logoutComponent(req, res, sessions);
  },
  '/signIn': (req, res) => {
    signInRoute(req, res, sessions);
  },
};

const server = http.createServer(async (req, res) => {
  let sessionId = getSessionIdFromCookies(req);

  if (!sessionId || !sessions[sessionId]) {
    sessionId = generateSession();
    res.setHeader('Set-Cookie', cookie.serialize('sessionId', sessionId, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: '/',
      sameSite: 'strict'
    }));
  }

  console.log(`Session ID: ${sessionId}`);

  if (req.method === 'GET')
  {
    const handler = routes[req.url] || (() => {
      const filePath = path.join(__dirname, req.url);
      serveStaticFile(res, filePath, getContentType(path.extname(filePath)));
    });
    handler(req, res);
  }
  else if (req.method === 'POST')
  {
    if (req.url === '/loginComponent')
    {
      await loginComponent(req, res, sessions);
    }
    else if (req.url === '/registerComponent')
    {
      await registerComponent(req, res, sessions);
    }
    else
    {
      res.writeHead(405, { 'Content-Type': 'text/html' });
      res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
    }
  }
});

server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await resetLoggedInStatus();
});
