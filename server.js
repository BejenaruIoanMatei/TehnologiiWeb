/*
 * ----------------------------------------------------------------------------
 * "Souvenir Recommender (SORE)" Project
 * Copyright © 2024 Moscalu Stefan and Bejenaru Matei Ioan. All rights reserved.
 * ----------------------------------------------------------------------------
 */

/* flag defines */
flagUpdateLikeRatioAllDocuments = false;
const secretKey = 'I"th/80O{{+ptiLfNQX,)5&.IRy:^wno7KON>=:z7;;kAy{~+e$J7./O$9=!lH2/';

/* Dependencies definitions */
const jwt = require('jsonwebtoken');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { db } = require('./utils/firebaseInit');
const { collection, getDocs, updateDoc,where, doc,query } = require('firebase/firestore');
const cookie = require('cookie');
const archiver = require('archiver');

/* Components and routes definitions */
const { generateSignedUrl, verifySignedUrl } = require('./utils/urlSigningServer'); // Importing generateSignedUrl and verifySignedUrl
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
const {
  getNumberOfAccesses,
  getLoggedInUsers,
  getSouvenirsSuggested,
  getSatisfiedCustomers,
  getGlobalLikeRatio,
  updateStatisticsDataNumberOfAccesses,
  updateStatisticsDataSouvenirsSuggested,
  updateLikesAndGlobalUserSatisfactionFactor
} = require('./utils/statisticsUtil');
const fetchMainSouvenir = require('./components/database/fetchComponents/fetchMainSouvenirs');
const fetchOtherSouvenirs = require('./components/database/fetchComponents/fetchOtherSouvenirs');
const { updateLikeRatioForSouvenirs } = require('./utils/likeRatioUtil');
const exportSouvenirsToHtml = require('./components/database/exportScripts/exportSouvenirsToHtml');
const exportSouvenirsToCSV = require('./components/database/exportScripts/exportSouvenirsToCSV');
const exportSouvenirsToXML = require('./components/database/exportScripts/exportSouvenirsToXML');
const exportSouvenirsToJSON = require('./components/database/exportScripts/exportSouvenirsToJSON');
const fetchAllUsers = require('./components/database/fetchComponents/fetchAllUsers');
const decryptJWTToken = require('./utils/decryptJWTToken');
const adminRevokeRights = require('./components/adminComponentAddons/adminRevokeRights');
const adminGrantRights = require('./components/adminComponentAddons/adminGrantRights');
const adminDeleteUser = require('./components/adminComponentAddons/adminDeleteUser');
const getJWTToken = require('./utils/getJWTToken');
/* Protected routes to be hashed definitions */
const GETProtectedRoutes = [
  '/explore',
  '/aboutUs',
  '/help',
  '/redirectAdminRoute',
  '/redirectUserRoute',
  '/redirectStatistics',
  '/redirectAdmin',
  '/adminUserRoute',
  '/standardUserRoute',
  '/adminComponent',
  '/adminStatisticsUserRoute',
  '/adminStatistics',
  '/adminStatisticsUsers',
  '/loginComponent',
  '/registerComponent',

  ];
const POSTProtectedRoutes = [
  '/exportToHTML',
  '/exportToJSON',
  '/exportToXML',
  '/exportToCSV',
  '/loginComponent',
  '/registerComponent',
  '/fetchAllUsers',
  '/adminDeleteUser',
  '/adminRevokeRights',
  '/adminGrantRights',
  '/updateStatisticsDataSouvenirsSuggested',
  '/updateLikesAndGlobalUserSatisfactionFactor',
]
const PORT = process.env.PORT || 3000;

/* Global variables definition */
const sessions = {};

const generateSession = async () => {
  const sessionId = uuidv4();
  sessions[sessionId] = { loggedIn: false, userRole: 'user' };
  await updateStatisticsDataNumberOfAccesses();
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
async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(body);
    });
    req.on('error', err => {
      reject(err);
    });
  });
}
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

/* structura ce contine toate rutele de get */
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
      console.log("The server has sent the countries to the client");
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
  }
};

function handlePOSTProtectedRoutes(req, res, sessionId) {
  try {

    const urlWithoutParams = req.url.split('?')[0];

    if (POSTProtectedRoutes.includes(urlWithoutParams) && req.method === 'POST' && !verifySignedUrl(req)) {
      const signedUrl = generateSignedUrl(req.url, sessionId);
      res.writeHead(302, { 'Location': signedUrl });
      res.end();
      return true;
    }

    return false;
  } catch (error) {
    console.error('Error handling POST protected routes:', error);
    return false;
  }
}

async function getUserRoleFromDataBase(userId) {
  try {
    console.log(userId);
    const usersCollectionRef = collection(db, 'users');
    const q = query(usersCollectionRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('User not found');
    }

    let userRole;
    querySnapshot.forEach(doc => {
      const userData = doc.data();
      userRole = userData.role; // Assuming 'role' is the field in your user document
    });

    console.log('The fetched user role from the database is:', userRole);
    return userRole;
  } catch (error) {
    console.error('Error fetching user role:', error);
    throw error; // Propagate error to handle it further up in the call stack
  }
}
/* setupul serverului */
const server = http.createServer(async (req, res) => {
  let sessionId = getSessionIdFromCookies(req);

  // Session Management
  if (!sessionId || !sessions[sessionId]) {
    sessionId = await generateSession();
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

  if( sessions[sessionId].loggedIn === true )
  {
    console.log('User role before: ', sessions[sessionId].userRole);
    console.log('The user that performs the action is: ', sessions[sessionId].email )
    sessions[sessionId].userRole = await getUserRoleFromDataBase(sessions[sessionId].userId);
    console.log('User role after: ', sessions[sessionId].userRole);
  }

  console.log('Session ID: ${sessionId}');
  console.log('Requested url: ', req.url);
  console.log('Incoming method: ', req.method );

  if (req.method === 'GET')
  {
    /* Verific daca ruta este protejata, daca este atunci semnez fisierul html */
    if (GETProtectedRoutes.includes(req.url.split('?')[0]) && !verifySignedUrl(req))
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

    if (handlePOSTProtectedRoutes(req, res, sessionId)) {
      return;
    }
    const urlWithoutParams = req.url.split('?')[0];
    console.log('POST branch reached');
    console.log('The received url is', urlWithoutParams);
    if (urlWithoutParams === '/generateSignedURL') {
      console.log('A request to sign a url has occurred!');

      try {
        const body = await parseBody(req);
        const { url } = JSON.parse(body);

        if (!url || typeof url !== 'string') {
          throw new Error('Invalid URL format');
        }

        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Unauthorized - Missing or invalid token' }));
          return;
        }

        const token = authHeader.split(' ')[1];
        console.log('Ecrypted token: ', token);

        const decryptedToken = await decryptJWTToken(token);
        console.log('Decrypted token', decryptedToken);

        let decodedToken;
        try {
          decodedToken = jwt.verify(decryptedToken, secretKey);
        } catch (err) {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Unauthorized - Invalid token' }));
          return;
        }


        const approvedEntities = ['02264657-509e-4ca1-8e04-892f7eb704b0'];
        if (!approvedEntities.includes(decodedToken.entityId)) {
          res.writeHead(403, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Forbidden - Not authorized' }));
          return;
        }

        const signedUrl = generateSignedUrl(url);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ signedURL: signedUrl }));
        console.log("Url signing done!");
      } catch (error) {
        console.error('Error generating signed URL:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
    } else if (urlWithoutParams === '/loginComponent') {
      await loginComponent(req, res, sessions);
    } else if (urlWithoutParams === '/registerComponent') {
      await registerComponent(req, res, sessions);
    } else if (urlWithoutParams === '/getMainSouvenir') {
      if (redirectIfNotLoggedIn(req, res)) return;
      await fetchMainSouvenir(req, res);
    } else if (urlWithoutParams === '/getOtherSouvenirs') {
      if (redirectIfNotLoggedIn(req, res)) return;
      await fetchOtherSouvenirs(req, res);
    } else if (urlWithoutParams === '/getNumberOfAccesses') {
      if (redirectIfNotLoggedIn(req, res)) return;
      await getNumberOfAccesses(req, res);
    } else if (urlWithoutParams === '/getLoggedInUsers') {
      if (redirectIfNotLoggedIn(req, res)) return;
      await getLoggedInUsers(req, res);
    } else if (urlWithoutParams === '/getSouvenirsSuggested') {
      if (redirectIfNotLoggedIn(req, res)) return;
      await getSouvenirsSuggested(req, res);
    } else if (urlWithoutParams === '/getSatisfiedCustomers') {
      if (redirectIfNotLoggedIn(req, res)) return;
      await getSatisfiedCustomers(req, res);
    } else if (urlWithoutParams === '/getGlobalLikeRatio') {
      if (redirectIfNotLoggedIn(req, res)) return;
      await getGlobalLikeRatio(req, res);
    }else if ( urlWithoutParams === '/updateStatisticsDataSouvenirsSuggested' ) {
      if (redirectIfNotLoggedIn(req, res)) return;
      await updateStatisticsDataSouvenirsSuggested(req, res);
    } else if( urlWithoutParams === '/updateLikesAndGlobalUserSatisfactionFactor')
    {
      if (redirectIfNotLoggedIn(req, res)) return;
      await updateLikesAndGlobalUserSatisfactionFactor(req, res);
    } else if ( urlWithoutParams === '/exportToHTML')
    {
      if (sessions[sessionId].userRole !== 'admin')
      {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
      }
      if (redirectIfNotLoggedIn(req, res)) return;
      try {
        console.log("The HTML export request has been triggered!");

        const tempDir = path.join(__dirname, 'temp');
        const zipFilePath = path.join(tempDir, 'exported_souvenirs_html.zip');

        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir);
        }

        const output = fs.createWriteStream(zipFilePath);
        const archive = archiver('zip');
        archive.pipe(output);


        res.writeHead(200, {
          'Content-Type': 'application/zip',
          'Content-Disposition': 'attachment; filename=exported_souvenirs_html.zip'
        });

        await exportSouvenirsToHtml(archive, db);

        archive.on('end', () => {
          console.log("Archive finalized, sending to user...");
          const zipFileReadStream = fs.createReadStream(zipFilePath);
          zipFileReadStream.pipe(res); // Pipe the file to the response
          zipFileReadStream.on('end', () => {
            fs.unlinkSync(zipFilePath); // Delete the temporary file
            console.log("The HTML export request has been processed!"); // Moved log here
          });
        });
        archive.finalize();

      } catch (error) {
        console.error('Error exporting souvenirs:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    } else if ( urlWithoutParams === '/exportToCSV')
    {
      if (sessions[sessionId].userRole !== 'admin')
      {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
      }
      if (redirectIfNotLoggedIn(req, res)) return;
      try {
        console.log("The CSV export request has been triggered!");

        const tempDir = path.join(__dirname, 'temp');
        const zipFilePath = path.join(tempDir, 'exported_souvenirs_CSV.zip');

        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir);
        }

        const output = fs.createWriteStream(zipFilePath);
        const archive = archiver('zip');
        archive.pipe(output);

        res.writeHead(200, {
          'Content-Type': 'application/zip',
          'Content-Disposition': 'attachment; filename=exported_souvenirs_CSV.zip'
        });

        await exportSouvenirsToCSV(archive, db);

        archive.on('end', () => {
          console.log("Archive finalized, sending to user...");
          const zipFileReadStream = fs.createReadStream(zipFilePath);
          zipFileReadStream.pipe(res); // Pipe the file to the response
          zipFileReadStream.on('end', () => {
            fs.unlinkSync(zipFilePath); // Delete the temporary file
            console.log("The CSV export request has been processed!"); // Moved log here
          });
        });
        archive.finalize();

      } catch (error) {
        console.error('Error exporting souvenirs:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }

    } else if( urlWithoutParams === '/exportToXML')
    {
      if (sessions[sessionId].userRole !== 'admin')
      {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
      }
      if (redirectIfNotLoggedIn(req, res)) return;
      try {
        console.log("The XML export request has been triggered!");

        const tempDir = path.join(__dirname, 'temp');
        const zipFilePath = path.join(tempDir, 'exported_souvenirs_XML.zip');

        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir);
        }

        const output = fs.createWriteStream(zipFilePath);
        const archive = archiver('zip');
        archive.pipe(output);

        res.writeHead(200, {
          'Content-Type': 'application/zip',
          'Content-Disposition': 'attachment; filename=exported_souvenirs_XML.zip'
        });

        await exportSouvenirsToXML(archive, db);

        archive.on('end', () => {
          console.log("Archive finalized, sending to user...");
          const zipFileReadStream = fs.createReadStream(zipFilePath);
          zipFileReadStream.pipe(res); // Pipe the file to the response
          zipFileReadStream.on('end', () => {
            fs.unlinkSync(zipFilePath); // Delete the temporary file
            console.log("The XML export request has been processed!"); // Moved log here
          });
        });
        archive.finalize();

      } catch (error) {
        console.error('Error exporting souvenirs:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    } else if( urlWithoutParams === '/exportToJSON')
    {
      if (sessions[sessionId].userRole !== 'admin')
      {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
      }
      try {
        console.log("The JSON export request has been triggered!");

        const tempDir = path.join(__dirname, 'temp');
        const zipFilePath = path.join(tempDir, 'exported_souvenirs_JSON.zip');

        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir);
        }

        const output = fs.createWriteStream(zipFilePath);
        const archive = archiver('zip');
        archive.pipe(output);

        res.writeHead(200, {
          'Content-Type': 'application/zip',
          'Content-Disposition': 'attachment; filename=exported_souvenirs_JSON.zip'
        });

        await exportSouvenirsToJSON(archive, db);

        archive.on('end', () => {
          console.log("Archive finalized, sending to user...");
          const zipFileReadStream = fs.createReadStream(zipFilePath);
          zipFileReadStream.pipe(res); // Pipe the file to the response
          zipFileReadStream.on('end', () => {
            fs.unlinkSync(zipFilePath); // Delete the temporary file
            console.log("The JSON export request has been processed!"); // Moved log here
          });
        });
        archive.finalize();

      } catch (error) {
        console.error('Error exporting souvenirs:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    } else if ( urlWithoutParams === '/fetchAllUsers')
    {
      if (redirectIfNotLoggedIn(req, res)) return;
      const sessionId = getSessionIdFromCookies(req);
      if (sessions[sessionId].userRole !== 'admin')
      {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
      }
      else
      {
        fetchAllUsers(req,res);
      }
    } else if ( urlWithoutParams === '/adminRevokeRights')
    {
      if (redirectIfNotLoggedIn(req, res)) return;
      const sessionId = getSessionIdFromCookies(req);
      if (sessions[sessionId].userRole !== 'admin')
      {
        aes.writeHead(405, { 'Content-Type': 'text/html' });
        res.end('<h1>405 Method Not Allowed</h1>', 'utf8');
      }
      else
      {
        await adminRevokeRights(req,res);
      }
    } else if ( urlWithoutParams === '/adminGrantRights')
    {
      if (redirectIfNotLoggedIn(req, res)) return;
      const sessionId = getSessionIdFromCookies(req);
      if (sessions[sessionId].userRole !== 'admin')
      {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Forbidden - Not authorized' }));
      }
      else
      {
        await adminGrantRights(req,res);
      }
    } else if ( urlWithoutParams === '/adminDeleteUser')
    {
      if (redirectIfNotLoggedIn(req, res)) return;
      const sessionId = getSessionIdFromCookies(req);
      if (sessions[sessionId].userRole !== 'admin' )
      {
        res.writeHead(403, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Forbidden - Not authorized' }));
      }
      else
      {
        await adminDeleteUser(req,res);
      }
    } else if ( urlWithoutParams === '/getJWTToken')
    {
      try {
        await getJWTToken(req, res);
      } catch (error) {
        console.error('Error getting token:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Forbidden - Not authorized' }));
      }
    }
    else
    {
      res.writeHead(403, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Forbidden - Not authorized' }));
    }
  }
  else
  {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

server.listen(PORT, async () => {
  console.log('Server running on port', PORT);
  await resetLoggedInStatus();
  if( flagUpdateLikeRatioAllDocuments === true )
  {
    await updateLikeRatioForSouvenirs();
  }
});

