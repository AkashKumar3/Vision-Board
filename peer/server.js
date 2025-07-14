// server.js
const { PeerServer } = require("peer");
const server = PeerServer({
    port: process.env.PORT || 5001,
    path: "/",
});
