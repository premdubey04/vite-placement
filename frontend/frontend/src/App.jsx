import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import SummaryCards from "./components/SummaryCards";
import SalesChart from "./components/SalesChart";
import TransactionsTable from "./components/TransactionsTable";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* DEFAULT = DASHBOARD (Protected) */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* LOGIN ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* DASHBOARD SUB-PAGES (ALL PROTECTED) */}
          <Route
            path="/summary"
            element={
              <ProtectedRoute>
                <SummaryCards summary={{ totalSales:0, totalOrders:0, inventoryCount:0 }} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chart"
            element={
              <ProtectedRoute>
                <SalesChart data={[]} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <TransactionsTable rows={[]} />
              </ProtectedRoute>
            }
          />

          {/* ANY UNKNOWN ROUTE → DASHBOARD */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
