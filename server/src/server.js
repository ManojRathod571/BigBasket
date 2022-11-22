
const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db");
const cors = require("cors");
const productRoute = require("./features/products/product.route");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productRoute);

app.get("/", async  (req, res) => {
  res.send("knergoineriufneriurje");
});

app.listen(8080, async () => {
  try {
    await connect();
    console.log(`http://localhost:8080`);
  } catch (error) {
    console.log(error);
  }
});
