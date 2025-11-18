const express = require("express");
const router = express.Router();
const Sale = require("../models/Sale");
const auth = require("../middleware/auth"); // your auth middleware

// SUMMARY
router.get("/summary", auth, async (req, res) => {
  const sales = await Sale.find();

  const totalSales = sales.reduce((sum, s) => sum + s.amount, 0);
  const totalOrders = sales.length;
  const inventoryCount = 120; // Fake number for now

  res.json({ totalSales, totalOrders, inventoryCount });
});

// CHART DATA (Sales by month)
router.get("/chart-data", auth, async (req, res) => {
  const sales = await Sale.find();

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const chart = months.map((m, i) => {
    const monthIndex = i + 1;
    const total = sales
      .filter((s) => Number(s.date.split("-")[1]) === monthIndex)
      .reduce((sum, s) => sum + s.amount, 0);

    return { month: m, amount: total };
  });

  res.json(chart);
});

// TABLE
router.get("/transactions", auth, async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
});

module.exports = router;
