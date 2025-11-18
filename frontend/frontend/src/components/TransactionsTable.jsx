export default function TransactionsTable({ rows }) {
  const containerStyle = {
    background: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    marginTop: "30px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 10px"
  };

  const headerStyle = {
    background: "#f0f2f5",
    color: "#333",
    fontWeight: "600",
    textAlign: "left",
    padding: "12px",
    borderBottom: "2px solid #ddd",
    borderRadius: "8px"
  };

  const rowStyle = {
    background: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    borderRadius: "10px",
  };

  const cellStyle = {
    padding: "14px",
    color: "#444",
    fontSize: "15px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: 20 }}>Recent Transactions</h2>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Date</th>
            <th style={headerStyle}>Product</th>
            <th style={headerStyle}>Category</th>
            <th style={headerStyle}>Amount</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={rowStyle}>

              <td style={{ ...cellStyle, borderRadius: "10px 0 0 10px" }}>
                {row.date}
              </td>

              <td style={cellStyle}>{row.product}</td>
              <td style={cellStyle}>{row.category}</td>

              <td
                style={{
                  ...cellStyle,
                  color: "#007bff",
                  fontWeight: 600,
                  borderRadius: "0 10px 10px 0",
                }}
              >
                ₹ {row.amount}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
