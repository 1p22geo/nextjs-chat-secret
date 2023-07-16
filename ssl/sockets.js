const { MongoClient, ServerApiVersion } = require("mongodb");
const https = require("https");
const httpProxy = require("http-proxy");
const fs = require("fs");

const uri = fs.readFileSync("ssl/.secret").toString('ascii');

// Create the proxy server
const proxy = httpProxy.createProxyServer({
	target: "http://localhost:4444",
	changeOrigin: true,
	secure: false,
});

const options = {
	cert: fs.readFileSync("./ssl/wss.crt"),
	key: fs.readFileSync("./ssl/wss.key"),
	ca: [fs.readFileSync("./ssl/root.crt")],
};

https
	.createServer(options, async (req, res) => {
		res.setHeader("Access-Control-Allow-Origin", "*")
		proxy.web(req, res);
	})
	.listen(4433, () => {
		console.log("listening on 4433");
	});
