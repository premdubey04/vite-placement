import { useState } from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function SalesChart({ data }) {
  const [chartType, setChartType] = useState("line");

  const labels = data.map((item) => item.month);
  const values = data.map((item) => item.amount);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: values,
        borderColor: "#007bff",
        backgroundColor: [
          "#4285F4",
          "#DB4437",
          "#F4B400",
          "#0F9D58",
          "#AB47BC",
          "#00ACC1"
        ],
        borderWidth: 3,
        tension: 0.4
      }
    ]
  };

  return (
    <div
      style={{
        marginTop: 30,
        background: "#fff",
        padding: 25,
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Sales Trend</h3>

        {/* Chart Selector Dropdown */}
        <select
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #ccc"
          }}
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
        >
          <option value="line">Line</option>
          <option value="bar">Bar</option>
          <option value="pie">Pie</option>
          <option value="doughnut">Doughnut</option>
        </select>
      </div>

      <div style={{ marginTop: 20 }}>
        {chartType === "line" && <Line data={chartData} />}
        {chartType === "bar" && <Bar data={chartData} />}
        {chartType === "pie" && <Pie data={chartData} />}
        {chartType === "doughnut" && <Doughnut data={chartData} />}
      </div>
    </div>
  );
}
