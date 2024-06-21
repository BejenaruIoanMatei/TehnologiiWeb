const redirectAdminPageRoute = (req, res) => {
  // Redirect to explorePage.html
  res.writeHead(302, { 'Location': '../views/admin.html' });
  res.end();
};

module.exports = redirectAdminPageRoute;
