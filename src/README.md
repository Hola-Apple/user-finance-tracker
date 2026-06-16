# ☕ User Finance Tracker — Backend

This is the **Spring Boot REST API** for the User Finance Tracker application.

It handles user management, finance transactions, and provides income/expense analytics.

---

## 🚀 Features

* Create and manage users
* Add income and expense records
* Fetch transactions by user
* Calculate total income and expenses by date range
* RESTful API design with DTO support

---

## 🧱 Tech Stack

* Java 17+
* Spring Boot
* Spring Web
* Spring Data JPA
* Hibernate
* Maven
* MySQL / H2 Database

---

## 📁 Project Structure

```
src/main/java/com/anoushka/user_finance_tracker/
├── controller/
├── service/
├── repository/
├── model/
├── dto/
├── config/
└── UserFinanceTrackerApplication.java
```

---

## ⚙️ Setup Instructions

### 1️⃣ Run the application

```bash id="be1"
./mvnw spring-boot:run
```

Or on Windows:

```bash id="be2"
mvnw.cmd spring-boot:run
```

---

### 2️⃣ Backend runs at:

```
http://localhost:8080
```

---

## 🔌 API Endpoints

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

## 📦 Key Design

* DTO used for request handling (`FinanceRequest`)
* Service layer separates business logic
* JPA used for persistence
* User–Finance relationship is mapped in database

---

## ⚠️ Known Limitations

* No authentication/security layer
* No pagination or filtering beyond date range
* Basic error handling

---

## 📈 Future Improvements

* Add JWT authentication
* Add role-based access
* Add pagination
* Deploy backend to cloud (Render / Railway)

---

## 👨‍💻 Author

Full-stack backend built with Spring Boot