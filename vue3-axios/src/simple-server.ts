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

const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 27, 31];
const PRIMES_ANNOTATED = [
  { prime: 2, text: "two" },
  { prime: 3, text: "three" },
  { prime: 5, text: "five" },
  { prime: 7, text: "seven" },
  { prime: 11, text: "eleven" },
  { prime: 13, text: "thirteen" },
  { prime: 17, text: "seventeen" },
  { prime: 19, text: "nineteen" },
  { prime: 23, text: "twenty-three" },
  { prime: 27, text: "twenty-three" },
  { prime: 31, text: "thirty-one" },
];

app.get("/array", (req: Request, res: Response) => {
  res.send(["hello", "world", "see", "you", "again"]);
});
app.get("/primes", (req: Request, res: Response) => {
  res.send(PRIMES);
});
app.get("/arr_objects", (req: Request, res: Response) => {
  res.send(PRIMES_ANNOTATED);
});

app.get("/object", (req: Request, res: Response) => {
  res.send({
    description: "Prime numbers less than 40",
    data: PRIMES_ANNOTATED,
  });
});

app.listen(9000, () => {
  console.info("Listening on port 9000");
});
