const fs = require("fs/promises");

const express = require("express");
const cors = require("cors");

const { router } = require("./Route");

const IndexHtml = __dirname + "/index.html";

const app = express();

app.use(cors("*"));
app.use(express.json());

app.get("/", async (req, res, next) => {
  res.send((await fs.readFile(IndexHtml)).toString());
});

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log("One Dot E-Com API listening at port ", process.env.PORT);
  console.log(`Visit: http://localhost:${process.env.PORT}`);
});
