import { createServer, IncomingMessage, ServerResponse } from "http";

const myServer = createServer();
myServer.on("request", (req: IncomingMessage, res: ServerResponse) => {
  console.log(
    `Received a ${req.method} request to URL ${req.url} from ${req.headers.host}`
  );

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World</h1>");
  res.end();
});

myServer.listen(5000, () => {
  console.log("Ready to accept requests at port 5000");
});
