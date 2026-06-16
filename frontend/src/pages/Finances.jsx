import { useEffect, useState } from "react";

import {
  createFinance,
  getFinancesByUser,
  getUsers,
} from "../api/financeApi";

export default function Finances() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [finances, setFinances] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [finance, setFinance] = useState({
    description: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    type: "EXPENSE",
  });

  useEffect(() => {
    getUsers()
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("Error loading users:", err);
        setError("Failed to load users. Is the backend running?");
      });
  }, []);

  const fetchFinances = async () => {
    if (!userId) {
      setError("Select a user first.");
      setFinances([]);
      return;
    }

    try {
      setError("");
      setSuccess("");
      const response = await getFinancesByUser(userId);
      setFinances(response.data);
    } catch (err) {
      console.error("Error loading finances:", err);
      setFinances([]);
      setError("Failed to load finances for this user.");
    }
  };

  const saveFinance = async () => {
    if (!userId) {
      setError("Select a user before adding a transaction.");
      return;
    }

    if (!finance.description.trim()) {
      setError("Description is required.");
      return;
    }

    if (!finance.amount || Number(finance.amount) <= 0) {
      setError("Enter a valid amount.");
      return;
    }

    if (!finance.date) {
      setError("Date is required.");
      return;
    }

    try {
      setError("");
      setSuccess("");

      await createFinance({
        userId: Number(userId),
        description: finance.description.trim(),
        amount: Number(finance.amount),
        date: finance.date,
        type: finance.type,
      });

      setFinance({
        description: "",
        amount: "",
        date: finance.date,
        type: finance.type,
      });
      setSuccess("Transaction added.");

      await fetchFinances();
    } catch (err) {
      console.error("Error saving finance:", err);
      setError("Failed to save transaction. Check all fields and try again.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Finances</h1>

      <select
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
          setFinances([]);
          setError("");
          setSuccess("");
        }}
      >
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name} (ID: {user.id})
          </option>
        ))}
      </select>

      <button onClick={fetchFinances} style={{ marginLeft: "10px" }}>
        Load Finances
      </button>

      {error && (
        <p style={{ color: "crimson" }}>{error}</p>
      )}

      {success && (
        <p style={{ color: "green" }}>{success}</p>
      )}

      <hr />

      <input
        placeholder="Description"
        value={finance.description}
        onChange={(e) =>
          setFinance({
            ...finance,
            description: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        type="number"
        min="0"
        step="0.01"
        placeholder="Amount"
        value={finance.amount}
        onChange={(e) =>
          setFinance({
            ...finance,
            amount: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        type="date"
        value={finance.date}
        onChange={(e) =>
          setFinance({
            ...finance,
            date: e.target.value,
          })
        }
      />

      <br /><br />

      <select
        value={finance.type}
        onChange={(e) =>
          setFinance({
            ...finance,
            type: e.target.value,
          })
        }
      >
        <option value="EXPENSE">Expense</option>
        <option value="INCOME">Income</option>
      </select>

      <br /><br />

      <button onClick={saveFinance}>
        Add Transaction
      </button>

      <hr />

      {finances.length === 0 ? (
        <p>No transactions to show. Select a user and click Load Finances.</p>
      ) : (
        finances.map((item) => (
          <div key={item.id}>
            <p>
              <strong>{item.description}</strong>
            </p>

            <p>Amount: ${item.amount}</p>
            <p>Date: {item.date}</p>
            <p>Type: {item.type}</p>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}
