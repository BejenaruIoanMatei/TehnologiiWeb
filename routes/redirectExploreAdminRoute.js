const redirectExploreAdminRoute = (req, res) => {
  // Redirect to explorePage.html
  res.writeHead(302, { 'Location': '../views/explorePageAdminLoggedIn.html' });
  res.end();
};

module.exports = redirectExploreAdminRoute;
