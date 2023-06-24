const https = require('https');
const httpProxy = require('http-proxy');
const fs = require('fs')

// Create the proxy server
const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3000', // Change this to your Next.js application's URL
  changeOrigin: true,
  secure: false, // Disable SSL certificate validation
});

// Create the HTTPS server using the self-signed certificate and private key
const options = {
  cert: fs.readFileSync('./ssl/server.crt'),
  key: fs.readFileSync('./ssl/server.key'),
};

https.createServer(options, (req, res) => {
  // Proxy the request to your Next.js application
  proxy.web(req, res);
}).listen(443, () => {
  console.log('Proxy server listening on port 443');
});