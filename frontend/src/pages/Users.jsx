// React hooks
import { useEffect, useState } from "react";

// API functions
import {
  getUsers,
  createUser,
  deleteUser,
} from "../api/financeApi";

export default function Users() {

  // Stores all users returned from the backend
  const [users, setUsers] = useState([]);

  // Stores form input values
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Loads all users from backend
  const loadUsers = () => {
    getUsers()
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error("Error loading users:", err);
      });
  };

  // Runs once when page loads
  useEffect(() => {
    loadUsers();
  }, []);

  // Creates a new user
  const submitUser = async () => {
    try {
      await createUser(form);

      // Clear form after successful submission
      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
      });

      // Refresh user list
      loadUsers();
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>

      {/* User Name Input */}
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

      <br /><br />

      {/* User Email Input */}
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <br /><br />

      {/* User Phone Input */}
      <input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value,
          })
        }
      />

      <br /><br />

      {/* User Address Input */}
      <input
        placeholder="Address"
        value={form.address}
        onChange={(e) =>
          setForm({
            ...form,
            address: e.target.value,
          })
        }
      />

      <br /><br />

      {/* Submit Button */}
      <button onClick={submitUser}>
        Add User
      </button>

      <hr />

      {/* Display all users */}
      {users.map((user) => (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>

          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address}</p>

          {/* Delete selected user */}
          <button
            onClick={() =>
              deleteUser(user.id)
                .then(loadUsers)
            }
          >
            Delete User
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}