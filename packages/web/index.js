const express = require("express");
const app = express();
const PORT = process.env.PORT || 2000;

app.get("/", express.static("static"));

// app.get("/", (req, res) => res.send({ version: VERSION }));

app.listen(PORT, () => console.log(`Website listening on ${PORT}`));
