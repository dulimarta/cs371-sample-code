// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
// This example requires you generate a HTTPS certificate
// (self-signed should be sufficient) using the following command:
//
// openssl req -key server.key -new -out server.cert

// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING

import express, { Request, Response } from "express";
import fs from "fs";
import https, { createServer } from "https";
const app = express();

const PORT = process.env.PORT ?? 8443;

app.get("/", (req: Request, res: Response) => {
  console.log("Incoming request", req.headers);
  res.send("Hello from Secure Server");
});

createServer(
  { key: fs.readFileSync("server.key"), cert: fs.readFileSync("server.cert") },
  app
).listen(PORT, () => {
  console.info(`Secure server listening on port ${PORT}`);
});
