const https = require('https');
const httpProxy = require('http-proxy');
const fs = require('fs')

// Create the proxy server
const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3000', 
  changeOrigin: true,
  secure: false, 
});

const options = {
  cert: fs.readFileSync('./ssl/server.crt'),
  key: fs.readFileSync('./ssl/server.key'),
  ca: [
    fs.readFileSync('./ssl/root.crt')
  ]
};

https.createServer(options, (req, res) => {
  proxy.web(req, res);
}).listen(443, () => {
  console.log('listening on 443');
});