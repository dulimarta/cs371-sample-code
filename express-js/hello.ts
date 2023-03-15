import express, { Request, Response } from "express"

const PORT = process.env.PORT ?? 9090
const app = express()
import path from "path"

app.get("/", (req: Request, res: Response) => {
  res.send(
    "<h1>Simple ExpressJS Server</h1>"    
  )
})

app.get("/api1", (req: Request, res: Response) => {
  res.type("text/plain").send(
    "Hello World\nSecret number is 1771"    
  )
})

app.get("/api2", (req: Request, res: Response) => {
  // When this endpoint is invoked from a browser
  // it should prompt a file save dialog
  res.type("image/png").download("gvsu_logo.png");
})

app.get("/api3", (req: Request, res: Response) => {
  res.type("image/png")
    .sendFile("/gvsu_logo.png", {
      // Use a file from the current directory
      root: path.join(__dirname, "/")
    })
})

app.get("/api4", (req: Request, res: Response) => {
  res.type("application/json")
    .send({
      text: "Hello World",
      secret: 1771
    })
})
app.get("/api5/:uname", (req: Request, res: Response) => {
  res.type("application/json")
    .send({
      text: `Hello ${req.params.uname}`,
      secret: 1771
    })
})
type SampleQuery = {
  uname: String, age: number
}
type CustomRequest = Request<any, any, any, SampleQuery>

app.get("/api6", (req: CustomRequest, res: Response) => {
  res.type("application/json")
    .send({
      text: `Hello ${req.query.uname}`,
      age: Number(req.query.age)
    })
})

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`)
})