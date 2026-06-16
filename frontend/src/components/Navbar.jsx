// Link allows navigation without reloading the page
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        display: "flex",
        gap: "20px",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Dashboard page */}
      <Link to="/">Dashboard</Link>

      {/* Users page */}
      <Link to="/users">Users</Link>

      {/* Finances page */}
      <Link to="/finances">Finances</Link>
    </nav>
  );
}