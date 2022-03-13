"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5000;
const homePage = app.use(express_1.default.static("src"));
app.get("/", (req, res) => {
    res.writeHead(200, { "content-type": "text/html" }); // MIME type
    res.write(homePage);
    // res.send(JSON.stringify({ message: "Hello World" }));
    res.end();
});
app.get("/data", (req, res) => {
    res.writeHead(200, { "content-type": "application/json" }); // MIME type
    res.write(JSON.stringify({ message: "Hello World" }));
    // res.send(JSON.stringify({ message: "Hello World" }));
    res.end();
});
app.listen(port, () => {
    console.log(`Server is running from port ${port}`);
});
