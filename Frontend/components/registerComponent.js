
// Register route
const registerComponent = async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Register successful' }));
};

module.exports = registerComponent;
