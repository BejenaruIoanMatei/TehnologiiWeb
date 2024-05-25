const loginComponent = (req, res) => {

      // Always return success for now
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Login successful' }));
};

module.exports = loginComponent;
