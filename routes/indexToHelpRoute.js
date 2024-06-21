

const indexToHelpRoute = (req, res) => {
  // Redirect to explorePage.html
  res.writeHead(302, { 'Location': '../views/help.html' });
  res.end();
};

module.exports = indexToHelpRoute;
