const express = require("express");

const PORT = 3010;
const app = express();

// Middleware

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy", // Header name
    "default-src 'self';" + // this will only execute only your sources be it images/scripts
      "script-src 'self' 'nonce-randomKey' 'unsafe-inline' http://unsecure.com;" // If you want to give permission to particular sources you can set it this way
  );
  next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
