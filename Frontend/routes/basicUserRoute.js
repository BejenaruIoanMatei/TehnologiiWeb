const basicUserRoute = (req, res) => {
  // Redirect to explorePage.html
  res.writeHead(302, { 'Location': '../views/explorePageLoggedIn.html' });
  res.end();
};

module.exports = basicUserRoute;
