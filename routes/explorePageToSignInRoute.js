

const explorePageToSignInRoute = (req, res) => {
  // Redirect to explorePage.html
  res.writeHead(302, { 'Location': '../views/signPage.html' });
  res.end();
};

module.exports = explorePageToSignInRoute;
