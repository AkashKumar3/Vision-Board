const express = require("express");
const { ExpressPeerServer } = require("peer");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors()); // 👈 Allow all origins (or restrict to specific ones)

const peerServer = ExpressPeerServer(app, {
    path: "/", // 👈 must match frontend
});

app.use("/", peerServer);

app.listen(PORT, () => {
    console.log(`✅ PeerJS server is running on port ${PORT}`);
});
