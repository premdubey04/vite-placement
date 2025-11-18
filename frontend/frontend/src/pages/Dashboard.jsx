import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

import SummaryCards from "../components/SummaryCards";
import SalesChart from "../components/SalesChart";
import TransactionsTable from "../components/TransactionsTable";

export default function Dashboard() {
  const { logout } = useAuth();
  const [lastUpdated, setLastUpdated] = useState(
  new Date().toLocaleTimeString()
);


  const [summary, setSummary] = useState(null);
  const [chart, setChart] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const loadData = async () => {
    const s = await api.get("/summary");
    const c = await api.get("/chart-data");
    const t = await api.get("/transactions");

    setSummary(s.data);
    setChart(c.data);
    setTransactions(t.data);
  };

useEffect(() => {
  loadData(); // initial load

  const interval = setInterval(() => {
    loadData();
    setLastUpdated(new Date().toLocaleTimeString());
  }, 10000); // refresh every 10 seconds

  return () => clearInterval(interval);
}, []);


  if (!summary) return <h2 style={{ padding: 30 }}>Loading...</h2>;

  return (
  <div style={{
  padding: "30px",
  background: "#adc6ecff",
  minHeight: "100vh",
  fontFamily: "Arial",
  color:"black"
}}>

<Navbar />
<div style={{ marginBottom: 20, color: "#777" }}>
  Last Updated: <strong>{lastUpdated}</strong>
</div>

      <SummaryCards summary={summary} />
      <SalesChart data={chart} />
      <TransactionsTable rows={transactions} />
    </div>
  );
}
