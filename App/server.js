const fs = require("fs/promises");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors("*"));

app.get("index.html | dist/* | /");
const serveResourceMiddleware = async (req, res) => {
  const path = req.path === "/" ? "/index.html" : req.path;
  const dataBuffer = await fs.readFile(__dirname + path);
  res.send(dataBuffer.toString());
};

app.get("/index.html", (req, res) => res.redirect("/"));
app.get("/dist/*", serveResourceMiddleware);
app.get("/", serveResourceMiddleware);

app.listen(process.env.APP_PORT, () => {
  console.log(`\nVisit page, http://localhost:${process.env.APP_PORT}\n`);
});
