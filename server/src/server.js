const express = require("express");
const mongoose = require("mongoose");
const connect = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const productRoute = require("./features/products/product.route");
const userRouter = require("./features/auth/auth.route");

const app = express();
app.use(express.json());
app.use(cors());
// mongoose.set("strictQuery", true);

app.get("/", async (req, res) => {
  res.send("Welcome to the bigbasket");
});

app.use("/user", userRouter);
app.use("/products", productRoute);

app.listen(8080, async () => {
  try {
    await connect();
    console.log(`http://localhost:8080`);
  } catch (error) {
    console.log(error);
  }
});
