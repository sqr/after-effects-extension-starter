const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define different routes that the client application can hit.
app.get("/test", (req, res) => {
  res.json({ message: "Welcome to the server." });
});

// Start the server on port 3002
const server = app.listen(3002, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("Listening on %s port %s", host, port);
});
