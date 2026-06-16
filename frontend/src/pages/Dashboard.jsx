import { useEffect, useState } from "react";

import {
  getUsers,
  getIncome,
  getExpenses,
} from "../api/financeApi";

export default function Dashboard() {

  // Stores user list
  const [users, setUsers] = useState([]);

  // Stores total income
  const [income, setIncome] = useState(0);

  // Stores total expenses
  const [expenses, setExpenses] = useState(0);
  
  // Stores current year
  const currentYear = new Date().getFullYear();

  // Runs once when component loads
  useEffect(() => {

    // Get all users
    getUsers().then((res) => {
      setUsers(res.data);
    });

    // Get total income
    getIncome(
      `${currentYear}-01-01`,
      `${currentYear}-12-31`
    ).then((res) => {
      setIncome(res.data);
    });

    // Get total expenses
    getExpenses(
      `${currentYear}-01-01`,
      `${currentYear}-12-31`
    ).then((res) => {
      setExpenses(res.data);
    });

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Finance Tracker</h1>

      {/* Dashboard summary cards */}
      <h3>Total Users: {users.length}</h3>

      <h3>Total Income: ${income}</h3>

      <h3>Total Expenses: ${expenses}</h3>
    </div>
  );
}