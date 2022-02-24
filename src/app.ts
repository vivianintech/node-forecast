import express, { Response, Request } from "express";
import fs from "fs";
import * as jsonData from "./index.json";

const app = express();
const port = 5000;

const data = JSON.stringify(jsonData);

app.get("/", (req: Request, res: Response) => {
  res.writeHead(200, { "content-type": "application/json" }); // MIME type
  res.write(data);
  // res.send(jsonData);
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running from port ${port}`);
});
