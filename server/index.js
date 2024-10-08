const express = require("express");

const app = express();

const PORT = 7777;
// This is a env variable defined in the docker-compose.yaml
const CONTAINER_PORT = process.env.CONTAINER_PORT || "unknown port";

app.get("/", (req, res) => {
  res.send(`I am a endpoint ${CONTAINER_PORT}`);
});

app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
