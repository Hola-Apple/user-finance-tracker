# User Finance Tracker — Frontend

React single-page app for the [User Finance Tracker](../README.md) project. It provides a simple UI to manage users, record income and expense transactions, and view summary totals from the Spring Boot backend.

## Tech stack

- **React 19** with **Vite 8** for dev server and builds
- **React Router 7** for client-side routing
- **Axios** for HTTP requests to the REST API
- **ESLint** for linting

## Prerequisites

- Node.js 18+ (20+ recommended)
- The Spring Boot backend running on `http://localhost:8080`

Start the backend from the project root:

```bash
./mvnw spring-boot:run
```

On Windows:

```bash
mvnw.cmd spring-boot:run
```

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default. Vite enables hot module replacement (HMR) during development.

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## How it fits together

```
Browser (localhost:5173)
    │
    ▼
React pages (Dashboard, Users, Finances)
    │
    ▼
src/api/financeApi.js  ──►  Spring Boot API (localhost:8080/api)
```

The frontend does not store data locally. All persistence goes through the backend. CORS is configured on the server to allow requests from `http://localhost:5173`, and Spring Security permits all API routes without authentication.

## Project structure

```
frontend/
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── api/
│   │   └── financeApi.js   # Axios client and API helpers
│   ├── components/
│   │   └── Navbar.jsx      # Top navigation links
│   ├── pages/
│   │   ├── Dashboard.jsx   # Summary totals
│   │   ├── Users.jsx       # Create, list, delete users
│   │   └── Finances.jsx    # View and add transactions per user
│   ├── App.jsx             # Route definitions
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Pages and routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | `Dashboard.jsx` | Shows total user count, income, and expenses for a fixed date range (currently hardcoded to 2025) |
| `/users` | `Users.jsx` | Create users (name, email, phone, address) and delete existing users |
| `/finances` | `Finances.jsx` | Load transactions for a user by ID and add new income/expense records |

Navigation is handled by `Navbar.jsx` using React Router `Link` components.

## API layer

All backend calls live in `src/api/financeApi.js`. A shared Axios instance points at `http://localhost:8080/api`.

### User endpoints

| Function | HTTP | Path |
|----------|------|------|
| `getUsers()` | GET | `/users` |
| `createUser(user)` | POST | `/users` |
| `deleteUser(id)` | DELETE | `/users/{id}` |

### Finance endpoints

| Function | HTTP | Path |
|----------|------|------|
| `createFinance(finance)` | POST | `/finances` |
| `getFinancesByUser(userId)` | GET | `/finances/user/{userId}` |
| `getIncome(startDate, endDate)` | GET | `/finances/income?startDate=...&endDate=...` |
| `getExpenses(startDate, endDate)` | GET | `/finances/expenses?startDate=...&endDate=...` |

Date parameters use ISO format: `YYYY-MM-DD`.

## Typical workflow

1. Start the backend, then run `npm run dev`.
2. Open **Users** and create one or more users.
3. Note a user's `id` from the list (shown implicitly via delete actions; the API returns it in the response).
4. Open **Finances**, enter that user ID, and load or add transactions.
5. Open **Dashboard** to see aggregate income and expense totals.

Users must exist before transactions can be created — the backend links each finance record to a user.

## Backend contract notes

When adding a transaction, the backend expects a `FinanceRequest` body with:

- `userId` (required)
- `description`
- `amount`
- `date` (ISO date string)
- `type` (`"INCOME"` or `"EXPENSE"`)

The **Finances** page currently sends only `description`, `amount`, and `type`. If transaction creation fails, ensure `userId` and `date` are included in the payload sent by `createFinance()`.

## Known limitations

- No authentication or login flow in the UI.
- No edit endpoints wired up — users and transactions can be created and deleted, but not updated.
- Dashboard date range is hardcoded; there is no date picker yet.
- Finances page requires manually entering a user ID instead of selecting from a dropdown.
- Styling is minimal inline CSS; no component library is used.

## Configuration

- **API base URL** — defined in `src/api/financeApi.js`. Change `baseURL` if the backend runs on a different host or port.
- **Vite** — see `vite.config.js` for build and plugin settings.

To point the frontend at a different backend during local development, update the `baseURL` in `financeApi.js` or introduce an environment variable (e.g. `VITE_API_URL`) if you add that support later.
