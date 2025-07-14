// peer/server.js
const express = require("express");
const { ExpressPeerServer } = require("peer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

// Allow CORS
app.use(cors());

// Create PeerJS server with WebSocket support
const peerServer = ExpressPeerServer(app, {
    debug: true,
    path: "/peerjs", // 💡 now set to /peerjs (standard)
});

app.use("/peerjs", peerServer); // Mount under /peerjs

app.get("/", (req, res) => {
    res.send("PeerJS Server is running!");
});

app.listen(PORT, () => {
    console.log(`✅ PeerJS server is listening on port ${PORT}`);
});
