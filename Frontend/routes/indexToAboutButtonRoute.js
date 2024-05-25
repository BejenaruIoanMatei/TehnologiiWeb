const indexToAboutButtonRoute = (req, res) => {
  // Redirect to explorePage.html
  res.writeHead(302, { 'Location': '../views/aboutUs.html' });
  res.end();
};

module.exports = indexToAboutButtonRoute;
