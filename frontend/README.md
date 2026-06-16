# 💻 User Finance Tracker — Frontend

This is the **React frontend** for the User Finance Tracker full-stack application. It provides a simple UI to manage users and track income/expenses through a Spring Boot backend.

---

## 🚀 Features

* View all users
* Create and delete users
* Add income and expense transactions
* View user-specific transactions
* Dashboard with total income and expenses

---

## 🧱 Tech Stack

* React 19 (Vite)
* Axios (API calls)
* React Router
* JavaScript (ES6+)

---

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── api/financeApi.js
│   ├── components/Navbar.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Users.jsx
│   │   └── Finances.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```bash id="fe1"
npm install
```

### 2️⃣ Start development server

```bash id="fe2"
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔌 Backend Connection

The frontend communicates with the Spring Boot backend:

```
http://localhost:8080/api
```

If backend runs on a different URL, update:

```js id="fe3"
src/api/financeApi.js
```

Example:

```js id="fe4"
const API = axios.create({
  baseURL: "http://localhost:8080/api"
});
```

---

## ⚠️ Notes

* Requires backend to be running
* No authentication implemented
* Uses hardcoded date range for dashboard
* CORS must be enabled in backend

---

## 📈 Future Improvements

* Add charts (income vs expense visualization)
* Add login/authentication
* Improve dashboard filtering
* Deploy to Vercel

---

## 👨‍💻 Author

Built as a full-stack project using React + Spring Boot