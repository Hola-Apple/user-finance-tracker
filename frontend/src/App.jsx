// React Router components
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Custom components/pages
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Finances from "./pages/Finances";

export default function App() {
  return (
    <BrowserRouter>

      {/* Navigation bar appears on all pages */}
      <Navbar />

      {/* Route definitions */}
      <Routes>

        {/* Home page */}
        <Route
          path="/"
          element={<Dashboard />}
        />

        {/* User management page */}
        <Route
          path="/users"
          element={<Users />}
        />

        {/* Finance management page */}
        <Route
          path="/finances"
          element={<Finances />}
        />

      </Routes>
    </BrowserRouter>
  );
}