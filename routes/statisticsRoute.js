const statisticAdminRoute = (req, res) => {
  // Redirect to explorePage.html
  res.writeHead(302, { 'Location': '../views/statistics.html' });
  res.end();
};

module.exports = statisticAdminRoute;
