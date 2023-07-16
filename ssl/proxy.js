const { MongoClient, ServerApiVersion } = require("mongodb");
const https = require("https");
const httpProxy = require("http-proxy");
const fs = require("fs");

const uri = fs.readFileSync("ssl/.secret").toString('ascii');

// Create the proxy server
const proxy = httpProxy.createProxyServer({
	target: "http://localhost:3000",
	changeOrigin: true,
	secure: false,
});

const options = {
	cert: fs.readFileSync("./ssl/http.crt"),
	key: fs.readFileSync("./ssl/http.key"),
	ca: [fs.readFileSync("./ssl/root.crt")],
};

https
	.createServer(options, async (req, res) => {
		console.log("Request recieved");
		const client = new MongoClient(uri, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});
		let body = "";
		// let p = new Promise((resolve, reject) => {
		// });
		// await p;
		req.on("data", (chunk) => {
			body += chunk;
		});
		req.on("end", async () => {
			console.log("Connecting to database");
			try {
				await client.connect();
				console.log("Connected.");
				const db = client.db("chat");
				const coll = db.collection("requests");
				const url = new URL(req.url, `https://${req.headers.host}`);
				let params = {};
				for (const [key, val] of url.searchParams) {
					params[key] = val;
				}
				if(!body){
					body = undefined
				}
				let json;
				let isjson = false;
				try {
					json = JSON.parse(body);
					isjson = true;
				} catch {
					isjson = false;
					json = undefined;
				}
				if (isjson)
					await coll.insertOne({
						_id:new Date(),
						timestamp: Date.now(Date.now()),
						ip: req.socket.remoteAddress,
						headers: req.headers,
						body: body,
						json: json,
						path: url.pathname,
						search: url.search,
						params: params,
						url: url.href,
						method: req.method,
					});
				else
					await coll.insertOne({
						_id:new Date(Date.now()),
						timestamp: Date.now(),
						ip: req.socket.remoteAddress,
						headers: req.headers,
						body: body,
						path: url.pathname,
						search: url.search,
						params: params,
						url: url.href,
						method: req.method,
					});
			} catch {
				console.log("Something went wrong");
			} finally {
				console.log("Closing connection");
				await client.close();
			}
		});
		console.log("Sending back response");
		console.log(req.headers.host)
		req.headers['x-original-host'] = req.headers.host
		proxy.web(req, res);
	})
	.listen(443, () => {
		console.log("listening on 443");
	});
