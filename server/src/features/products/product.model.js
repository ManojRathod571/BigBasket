const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    discount: Number,
    img_src: String,
    brand: String,
    product_info: String,
    rating: Number || String,
    rating_Number: Number || String,
    weight: Number || String,
    price: Number || String,
    mrp: Number || String,
    delivery_day_time: Number || String,
    qty: Number || String,
    add_btn: Number || String,
    category: String,
    quantity: Number || String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
