import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navStyle = {
    width: "100%",
    background: "#ffffff",
    padding: "12px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    marginRight: "20px",
    fontWeight: "500",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <nav style={navStyle}>
      {/* LEFT SIDE */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 style={{ marginRight: "30px", color: "#007bff" }}>ERP Dashboard</h2>

      
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{ marginRight: "20px", color: "#555" }}>
          {user?.email}
        </span>
        <button style={buttonStyle} onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
