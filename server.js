
/* Dependencies definitions */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const { db } = require('./utils/firebaseInit');
const { collection, getDocs, updateDoc, doc } = require('firebase/firestore');
const cookie = require('cookie');

/* Components and routes definitions */
const { generateSignedUrl, verifySignedUrl } = require('./utils/urlSigning'); // Importing generateSignedUrl and verifySignedUrl
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
const fetchCountriesAndCities = require("./components/database/fetchComponents/fetchCountriesAndCities");

/* Protected routes to be hashed definitions */

const protectedRoutes = ['/explore', '/aboutUs', '/help', '/redirectAdminRoute', '/redirectUserRoute', '/redirectStatistics', '/redirectAdmin','/adminUserRoute','/standardUserRoute'];
const PORT = process.env.PORT || 3000;

/* Global variables definition */
const sessions = {};
let countries={};

async function initializeCountries() {
  try {
    countries = await fetchCountriesAndCities();
    console.log('Countries and cities fetched:', countries);
  } catch (error) {
    console.error('Error fetching countries and cities:', error);
    throw error;
  }
}

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
        res.end('Server Error: ${err.code}');
      }
    } else {
      const extname = path.extname(filePath);
      let cacheControl = 'no-store';
      if (extname === '.html') {
        cacheControl = 'no-cache, no-store, must-revalidate';
      } else if (extname === '.css' || extname === '.js' || extname === '.json') {
        cacheControl = 'public, max-age=100';
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

/* Functie care reseteaza statusul de logare a userilor cand lansam serverul */
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

/* Functie care verifica daca un user este logat */
const isLoggedIn = (req) => {
  const sessionId = getSessionIdFromCookies(req);
  return sessionId && sessions[sessionId] && sessions[sessionId].loggedIn;
};

/* Functie care redirectioneaza userul care pagina de sign in daca nu este logat */
const redirectIfNotLoggedIn = (req, res) => {
  if (!isLoggedIn(req)) {
    res.writeHead(302, { 'Location': '/signIn' });
    res.end();
    return true;
  }
  return false;
};

/* structura ce contine toate rutele */
const routes = {
  '/': (req, res) => {
    if (req.url === '/' && !verifySignedUrl(req)) {
      const signedUrl = generateSignedUrl('/', getSessionIdFromCookies(req));
      res.writeHead(302, { 'Location': signedUrl });
      res.end();
      return;
    }
    serveStaticFile(res, path.join(__dirname, 'views', 'index.html'), 'text/html');
  },
  '/explore': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    if (sessions[getSessionIdFromCookies(req)].userRole === 'admin') {
      adminUserRoute(req, res, sessions);
    } else {
      explorePageRoute(req, res, sessions);
    }
  },

  '/aboutUs': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    aboutUsRoute(req, res, sessions);
  },
  '/getCountries': async (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    try {
      const countries = await fetchCountriesAndCities();
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(countries));
    } catch (error) {
      console.error('Error fetching countries and cities:', error);
      res.writeHead(500, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({error: 'Internal Server Error'}));
    }
  },
  '/help': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    helpRoute(req, res, sessions);
  },
  '/redirectAdminRoute': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    if (sessions[getSessionIdFromCookies(req)].userRole === 'admin') {
      adminUserRoute(req, res, sessions);
    }
  },
  '/redirectUserRoute': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    if (sessions[getSessionIdFromCookies(req)].userRole === 'user') {
      standardUserRoute(req, res, sessions);
    }
  },
  '/redirectStatistics': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    const sessionId = getSessionIdFromCookies(req);
    if (sessions[sessionId].userRole === 'admin') {
      adminStatisticsUserRoute(req, res, sessions);
    } else {
      res.writeHead(302, { 'Location': generateSignedUrl('/explorePageLoggedIn.html') });
      res.end();
    }
  },
  '/redirectAdmin': (req, res) => {
    if (redirectIfNotLoggedIn(req, res)) return;
    const sessionId = getSessionIdFromCookies(req);
    if (sessions[sessionId].userRole === 'admin') {
      adminPageUserRoute(req, res, sessions);
    } else {
      res.writeHead(302, { 'Location': generateSignedUrl('/explorePageLoggedIn.html') });
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

/* setupul serverului */
const server = http.createServer(async (req, res) => {
  let sessionId = getSessionIdFromCookies(req);

  // Session Management
  if (!sessionId || !sessions[sessionId]) {
    sessionId = generateSession();
    const signedRootUrl = generateSignedUrl('/', sessionId);
    res.setHeader('Set-Cookie', cookie.serialize('sessionId', sessionId, {
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
      sameSite: 'strict'
    }));
    res.writeHead(302, { Location: signedRootUrl });
    res.end();
    return;
  }

  console.log('Session ID: ${sessionId}');
  console.log('Requested url: ', req.url);
  console.log('Incoming method: ', req.method );

  if (req.method === 'GET') {
    /* Verific daca ruta este protejata, daca este atunci semnez fisierul html */
    if (protectedRoutes.includes(req.url.split('?')[0]) && !verifySignedUrl(req))
    {
      const signedUrl = generateSignedUrl(req.url, sessionId); // Generate signed URL
      res.writeHead(302, { 'Location': signedUrl });
      res.end();
      return;
    }

    const handler = routes[req.url.split('?')[0]] || ((()  => {
      const filePath = path.join(__dirname, req.url.split('?')[0]);
      serveStaticFile(res, filePath, getContentType(path.extname(filePath)));
    }));
    handler(req, res);
  }
  else if (req.method === 'POST')
  {
    console.log('POST branch reached');
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

initializeCountries()
  .then(() => {
    // Start the server listening once initialization is complete
    server.listen(PORT, async () => {
      console.log('Server running on port', PORT);
      await resetLoggedInStatus();
    });
  })
  .catch((error) => {
    console.error('Failed to initialize countries:', error);
    process.exit(1); // Exit the process if initialization fails
  });

module.exports = { countries };
