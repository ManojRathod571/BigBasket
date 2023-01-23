const express = require("express");
const Product = require("./product.model");

const app = express.Router();

app.get("", async (req, res) => {
  const { category, q, page, limit, input } = req.query;
  try {
    if (category && q) {
      let temp = new RegExp(q, "i");
      let products = await Product.find({
        $and: [{ product_info: temp }, { category: category }],
      })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (category && input) {
      let temp = new RegExp(input, "i");
      let products = await Product.find({
        $and: [{ product_info: temp }, { category: category }],
      })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (category) {
      let products = await Product.find({ category: category })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (q) {
      let temp = new RegExp(q, "i");
      let products = await Product.find({ product_info: temp })
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    } else if (input) {
      let temp = new RegExp(input, "i");
      let validate = await Product.find({ product_info: temp });
      res.send(validate);
    } else {
      let products = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(products);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log({ id });
  try {
    let Singleproduct = await Product.findById(id);
    res.send(Singleproduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = app;
  