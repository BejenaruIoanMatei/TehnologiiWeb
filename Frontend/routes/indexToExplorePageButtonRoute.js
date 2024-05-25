const indexToExplorePageButtonRoute = (req, res) => {
  // Redirect to explorePage.html
  res.writeHead(302, { 'Location': '../views/explorePage.html' });
  res.end();
};

module.exports = indexToExplorePageButtonRoute;
