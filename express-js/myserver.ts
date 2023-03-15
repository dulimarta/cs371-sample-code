import express, { Request, Response } from "express";
import multer from "multer"; // For handling multipart/formdata

const app = express();

// Setup middleware for handling POST payload
app.use(express.json()); // JSON payload
app.use(express.urlencoded()); // x-www-form-urlencoded payload

const form_multi = multer();

app.post("*", form_multi.none(), (req: Request, res: Response) => {
  console.log(
    `Got a ${req.method} request with content type ${req.headers["content-type"]}`
  );
  if (req.headers["content-type"]?.startsWith("multipart/"))
    console.log("Body is", req.body);
  else console.log("Body is", req.body);
  res.send(`Confirmed ${req.headers["content-type"]}`);
  res.end();
});
app.listen(9000, () => {
  console.log("ExpressJS server is listenting at port 9000");
});
