import express, { Request, Response } from "express";
import multer from "multer";
import cors from "cors";
import { UltimateTextToImage } from "ultimate-text-to-image";
// first and second are required
// fmt is optional
type MyQuery = {
  first: string;
  second: string;
  fmt?: string; // Optional query parameter
};
const PORT = process.env.PORT ?? 9000;

const app = express();

function doAdd(
  a: number,
  b: number,
  format: string | undefined,
  res: Response
): void {
  const sum = a + b;
  const isOdd = sum % 2 === 1;
  switch (format) {
    case "text":
      res.type("text/plain").status(200).send(`Sum is ${sum}`);
      break;
    case "enc":
      const out = new URLSearchParams();
      out.append("sum", sum.toString());
      out.append("odd", isOdd.toString());

      res
        .type("application/x-www-form-urlencoded")
        .status(200)
        .send(out.toString());
      break;
    case "img":
      // Create a PNG image that shows the result
      const oddEven = sum % 2 == 0 ? "even" : "odd";
      const imageData = new UltimateTextToImage(`Sum ${sum} is ${oddEven}`, {
        width: 512,
        height: 128,
        fontSize: 60,
        alignToCenterIfHeightLE: 1,
        alignToCenterIfLinesLE: 1,
        backgroundColor: "#FFFF00FF",
      })
        .render() // render the image to an ArrayBuffer
        .toBuffer();

      // Send the PNG image as the HTTP response
      res.type("image/png").status(200).send(imageData);
      break;
    default:
      res.type("application/json").status(200).json({ sum, odd: isOdd });
  }
}

app.get("/add", (req: Request, res: Response) => {
  const param = req.query as MyQuery;
  // console.log(req.query);
  if (param.first && param.second) {
    const first = Number(param.first);
    const second = Number(param.second);
    doAdd(first, second, param.fmt, res);
  } else {
    res
      .type("text/html")
      .status(404)
      .send("<p>Missing 'first' or 'second'</p>");
  }
});

app.get("/plus/:first/:second/:fmt", (req: Request, res: Response) => {
  const { first, second, fmt } = req.params as MyQuery;
  if (first && second) {
    doAdd(Number(first), Number(second), fmt, res);
  }
  res.type("text/html").status(404).send("<p>Missing 'first' or 'second'</p>");
});

app.get("/help", (req: Request, res: Response) => {
  const helpText =
    "<h2>Web Service Demo</h2>" +
    "<p>Available endpoints</p><ul>" +
    `<li><code>http://${req.hostname}/add?first=13&second=86</code></li>` +
    `<li><code>http://${req.hostname}/add?first=13&second=86?fmt=json</code></li>` +
    "</ul>" +
    "<p>fmt: json, text, img, or enc</p>";
  res.type("text/html").send(helpText);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const multiParser = multer();

app.post(
  "/add",
  multiParser.none(), // ignore file upload in the form data
  cors(), // Enable CORS
  (req: Request, res: Response) => {
    const ct = req.headers["content-type"];
    const { first, second, fmt } = req.body;
    console.debug("Content-Type", first, second);
    console.debug("Payload", req.body);
    doAdd(Number(first), Number(second), fmt, res);
  }
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
