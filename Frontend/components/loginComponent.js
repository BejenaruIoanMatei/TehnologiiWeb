const loginComponent = (req, res) => {

      // Always return success for now
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Login successful' }));
};
// Set the tenant ID on Auth instance.


module.exports = loginComponent;
