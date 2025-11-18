import { FaRupeeSign, FaShoppingCart, FaBoxes } from "react-icons/fa";

export default function SummaryCards({ summary }) {
  const cardStyle = {
    flex: 1,
    background: "#ffffff",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
  };

  const iconContainer = (bg) => ({
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: bg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "28px",
  });

  const textTitle = {
    color: "#333",
    fontSize: "17px",
    fontWeight: "600",
    marginBottom: "6px",
  };

  const numberStyle = {
    fontSize: "26px",
    fontWeight: "700",
    color: "#111",
  };

  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      
      {/* Total Sales */}
      <div style={cardStyle}>
        <div style={iconContainer("#28a745")}>
          <FaRupeeSign />
        </div>
        <div>
          <div style={textTitle}>Total Sales</div>
          <div style={numberStyle}>₹ {summary.totalSales}</div>
        </div>
      </div>

      {/* Total Orders */}
      <div style={cardStyle}>
        <div style={iconContainer("#007bff")}>
          <FaShoppingCart />
        </div>
        <div>
          <div style={textTitle}>Total Orders</div>
          <div style={numberStyle}>{summary.totalOrders}</div>
        </div>
      </div>

      {/* Inventory */}
      <div style={{ ...cardStyle, marginRight: 0 }}>
        <div style={iconContainer("#ff9800")}>
          <FaBoxes />
        </div>
        <div>
          <div style={textTitle}>Inventory</div>
          <div style={numberStyle}>{summary.inventoryCount}</div>
        </div>
      </div>

    </div>
  );
}
