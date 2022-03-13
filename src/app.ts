import express, { Response, Request } from "express";

const app = express();
const port = 5000;

const homePage = app.use(express.static("src"));

app.get("/", (req: Request, res: Response) => {
  res.writeHead(200, { "content-type": "text/html" }); // MIME type
  res.write(homePage);
  // res.send(JSON.stringify({ message: "Hello World" }));
  res.end();
});

app.get("/data", (req: Request, res: Response) => {
  res.writeHead(200, { "content-type": "application/json" }); // MIME type
  res.write(JSON.stringify({ message: "Hello World" }));
  // res.send(JSON.stringify({ message: "Hello World" }));
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running from port ${port}`);
});
