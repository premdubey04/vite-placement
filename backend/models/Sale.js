const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  date: String,
  product: String,
  category: String,
  amount: Number,
});

module.exports = mongoose.model("Sale", saleSchema);
