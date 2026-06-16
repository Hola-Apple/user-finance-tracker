# 💰 User Finance Tracker (Full Stack App)

A full-stack personal finance tracking application built with **Spring Boot (backend)** and **React + Vite (frontend)**. The app allows users to record income and expenses, associate them with users, and view financial summaries.

---

## 🚀 Features

### 👤 User Management

* Create users
* View all users
* Delete users

### 💸 Finance Tracking

* Add income or expense transactions
* Link transactions to specific users
* Store date, amount, and description

### 📊 Dashboard Analytics

* Total number of users
* Total income (date-range based)
* Total expenses (date-range based)

---

## 🧱 Tech Stack

### Backend

* Java 17+
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL / H2
* Maven

### Frontend

* React 19
* Vite
* Axios
* React Router

---

## 📁 Project Structure

```
user-finance-tracker/
├── src/                      # Spring Boot backend
│   ├── main/java/...
│   ├── main/resources/
│   └── test/
│
├── frontend/                 # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── pom.xml
├── mvnw
├── mvnw.cmd
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Hola-Apple/user-finance-tracker.git
cd user-finance-tracker
```

---

### 2️⃣ Run Backend (Spring Boot)

```bash
./mvnw spring-boot:run
```

Backend runs at:

```
http://localhost:8080
```

---

### 3️⃣ Run Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### 👤 Users

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /api/users      |
| POST   | /api/users      |
| DELETE | /api/users/{id} |

---

### 💰 Finances

| Method | Endpoint                    |
| ------ | --------------------------- |
| POST   | /api/finances               |
| GET    | /api/finances/user/{userId} |
| GET    | /api/finances/income        |
| GET    | /api/finances/expenses      |

---

## 🔄 System Flow

```
React UI
   ↓
Axios API Layer
   ↓
Spring Boot REST API
   ↓
MySQL / Database
```

---

## 📌 Notes

* CORS enabled for `localhost:5173`
* DTO used for clean request handling
* User–Finance relationship is enforced in backend
* Date-based filtering used for analytics

---

## ⚠️ Current Limitations

* Dashboard uses fixed date range (can be improved)
* No authentication system
* No charts/visual analytics yet
* No edit transaction feature

---

## 📈 Future Improvements

* Add authentication (Spring Security + JWT)
* Add charts (Recharts / Chart.js)
* Add transaction editing & deletion
* Deploy backend + frontend (Vercel + Render)

---

## 👨‍💻 Author

Built by Anoushka Pullakhandam