#! SPAGHETTI EVERYWHERE
const { MongoClient, ServerApiVersion } = require("mongodb");
const fs = require("fs");
const http = require("http");
const { Server } = require("socket.io");

const uri = fs.readFileSync("ssl/.secret").toString("ascii");

const server = http.createServer();
const io = new Server(server);

// Connection pool for MongoDB clients
const clientPool = [];

async function getClient() {
  // Check if a client already exists in the pool
  if (clientPool.length > 0) {
    return clientPool[0];
  }

  // Create a new client and add it to the pool
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    clientPool.push(client);
    return client;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

async function releaseClient(client) {
  const index = clientPool.indexOf(client);
  if (index > -1) {
    clientPool.splice(index, 1);
    await client.close();
  }
}

// Handle WebSocket connection
io.on('connection', async (socket) => {
  const genRanHex = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  const id = genRanHex(8);
  console.log(id, ' connection received');

  try {
    const client = await getClient();

    // Handle public message submission
    // TODO: fix this
    socket.on('submit_public_message', async (msg) => {
      console.log("message: ", msg);

      const db = client.db('chat');
      const coll = db.collection('sessions');
      try {
        const doc = await coll.findOne({
          _id: new Date(parseInt(msg.session))
        });
        console.log(doc);
        const session = doc;

        const coll2 = db.collection('users');
        const res = await coll2.findOne({
          user: session.user
        });
        console.log(res);
        const user = res;
        console.log(id, " Sending message");

        const coll3 = db.collection('posts');
        await coll3.insertOne({
          user: user.user,
          name: user.pname,
          added: Date.now(),
          content: msg.message,
          feed: 'ch-01'
        });
        console.log(id, " Message saved for further generations");

        // Broadcast the message to clients in the same room
        io.emit('public_message', {
          user: user.user,
          name: user.pname,
          added: Date.now(),
          content: msg.message,
          feed: 'ch-01'
        });
      } catch (error) {
        console.error("Database error:", error);
      }
    });
    socket.on('submit_public_message2', async (msg) => {
      console.log("message: ", msg);

      const db = client.db('chat');
      const coll = db.collection('sessions');
      try {
        const doc = await coll.findOne({
          _id: new Date(parseInt(msg.session))
        });
        console.log(doc);
        const session = doc;

        const coll2 = db.collection('users');
        const res = await coll2.findOne({
          user: session.user
        });
        console.log(res);
        const user = res;
        console.log(id, " Sending message");

        const coll3 = db.collection('posts');
        await coll3.insertOne({
          user: user.user,
          name: user.pname,
          added: Date.now(),
          content: msg.message,
          feed: 'ch-02'
        });
        console.log(id, " Message saved for further generations");

        // Broadcast the message to clients in the same room
        io.emit('public_message2', {
          user: user.user,
          name: user.pname,
          added: Date.now(),
          content: msg.message,
          feed: 'ch-02'
        });
      } catch (error) {
        console.error("Database error:", error);
      }
    });
    socket.on('submit_public_message3', async (msg) => {
      console.log("message: ", msg);

      const db = client.db('chat');
      const coll = db.collection('sessions');
      try {
        const doc = await coll.findOne({
          _id: new Date(parseInt(msg.session))
        });
        console.log(doc);
        const session = doc;

        const coll2 = db.collection('users');
        const res = await coll2.findOne({
          user: session.user
        });
        console.log(res);
        const user = res;
        console.log(id, " Sending message");

        const coll3 = db.collection('posts');
        await coll3.insertOne({
          user: user.user,
          name: user.pname,
          added: Date.now(),
          content: msg.message,
          feed: 'ch-03'
        });
        console.log(id, " Message saved for further generations");

        // Broadcast the message to clients in the same room
        io.emit('public_message3', {
          user: user.user,
          name: user.pname,
          added: Date.now(),
          content: msg.message,
          feed: 'ch-03'
        });
      } catch (error) {
        console.error("Database error:", error);
      }
    });

    socket.on('disconnect', async () => {
      console.log(id, ' user disconnected');

      // Release the client when the connection is closed
      await releaseClient(client);
    });
  } catch (error) {
    console.error("Error in WebSocket connection:", error);
  }
});

server.listen(4444, () => {
  console.log("WebSocket server is listening on port 4444");
});
