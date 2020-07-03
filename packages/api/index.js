const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const VERSION = process.env.VERSIOn || "1.0.0";

app.get("/", (req, res) => res.send({ version: VERSION }));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
