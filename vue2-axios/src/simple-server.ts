import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.type("text/plain").send("hello world ");
});
app.get("/markup", (req: Request, res: Response) => {
  res.type("text/html").send("<ul><li>hello</li><li>world</li></ul> ");
});

const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23];
PRIMES.map
app.get("/array", (req: Request, res: Response) => {
  res.send(["hello", "world", "see", "you", "again"]);
});
app.get("/primes", (req: Request, res: Response) => {
  res.send(PRIMES);
});
app.get("/object", (req: Request, res: Response) => {
  res.send({ description: "Prime numbers less than 25", data: PRIMES });
});

app.listen(9000, () => {
  console.info("Listening on port 9000");
});
