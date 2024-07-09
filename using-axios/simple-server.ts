import express, { Request, Response } from "express";
const app = express();

app.get("/hello1", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.listen(9000, () => {
  console.info("Listening on port 9000");
});
