import { useState } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      await api.post("/auth/signup", { email, password });
      setMsg("Signup successful!");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      setMsg("Email already exists");
    }
  };

  return (
    <div style={pageStyle}>
      <form onSubmit={submit} style={cardStyle}>
        <h2>Signup</h2>

        {msg && <p style={{ color: "red" }}>{msg}</p>}

        <input
          type="email"
          style={inputStyle}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          style={inputStyle}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={btnStyle}>Signup</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

const pageStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f2f2f2",
};

const cardStyle = {
  width: 320,
  padding: 25,
  background: "#fff",
  borderRadius: 8,
  textAlign: "center",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

const inputStyle = {
  width: "100%",
  padding: 10,
  margin: "10px 0",
  borderRadius: 5,
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: 10,
  marginTop: 10,
  background: "#28a745",
  color: "white",
  border: "none",
  borderRadius: 5,
  cursor: "pointer",
};
