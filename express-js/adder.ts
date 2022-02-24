import express, { Request, Response } from "express";
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

app.get("/add", (req: Request, res: Response) => {
  const param = req.query as MyQuery;
  console.log(req.query);
  if (param.first && param.second) {
    const first = Number(param.first);
    const second = Number(param.second);
    const sum = first + second;
    const isOdd = sum % 2 === 1;
    const format = param.fmt?.toLowerCase() ?? "json";
    switch (format) {
      case "text":
        res.type("plain/text").status(200).send(`Sum is ${sum}`);
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
  } else {
    res
      .type("text/html")
      .status(404)
      .send("<p>Missing 'first' or 'second'</p>");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
