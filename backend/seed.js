const mongoose = require("mongoose");
const Sale = require("./models/Sale");
require("dotenv").config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);

  const data = [
    { date: "2025-01-01", product: "Laptop", category: "Electronics", amount: 50000 },
    { date: "2025-01-05", product: "Mouse", category: "Electronics", amount: 800 },
    { date: "2025-02-10", product: "Chair", category: "Furniture", amount: 3000 },
    { date: "2025-03-15", product: "Desk", category: "Furniture", amount: 7000 },
    { date: "2025-03-22", product: "Monitor", category: "Electronics", amount: 12000 },
    { date: "2025-04-01", product: "Keyboard", category: "Electronics", amount: 1500 },
    { date: "2025-05-11", product: "Pen", category: "Stationery", amount: 100 },
  ];

  await Sale.deleteMany({});
  await Sale.insertMany(data);

  console.log("Seeded!");
  process.exit();
}

seed();
