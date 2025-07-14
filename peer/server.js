const { PeerServer } = require("peer");

const peerServer = PeerServer({
    port: process.env.PORT || 5001,
    path: "/",
    allow_discovery: true
});

console.log("PeerJS server is running...");