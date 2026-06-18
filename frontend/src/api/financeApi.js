// Axios is used to make HTTP requests to the Spring Boot backend
import axios from "axios";

// Create a reusable Axios instance
// All requests will automatically start with:
// YOUR_RENDER_BACKEND_URL/api
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

/*
|--------------------------------------------------------------------------
| USER ENDPOINTS
|--------------------------------------------------------------------------
*/

// GET /api/users
// Returns all users
export const getUsers = () => API.get("/users");

// POST /api/users
// Creates a new user
export const createUser = (user) =>
  API.post("/users", user);

// DELETE /api/users/{id}
// Deletes a user by ID
export const deleteUser = (id) =>
  API.delete(`/users/${id}`);

/*
|--------------------------------------------------------------------------
| FINANCE ENDPOINTS
|--------------------------------------------------------------------------
*/

// POST /api/finances
// Creates a new finance transaction
export const createFinance = (finance) =>
  API.post("/finances", finance);

// GET /api/finances/user/{userId}
// Gets all transactions for a specific user
export const getFinancesByUser = (userId) =>
  API.get(`/finances/user/${userId}`);

// GET /api/finances/income
// Gets total income within a date range
export const getIncome = (startDate, endDate) =>
  API.get(
    `/finances/income?startDate=${startDate}&endDate=${endDate}`
  );

// GET /api/finances/expenses
// Gets total expenses within a date range
export const getExpenses = (startDate, endDate) =>
  API.get(
    `/finances/expenses?startDate=${startDate}&endDate=${endDate}`
  );