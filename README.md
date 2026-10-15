# Orbit — SaaS Management Dashboard

A responsive React + Vite frontend dashboard for managing SaaS customers, subscriptions, pricing plans, usage analytics, and revenue reports.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
1. Extract `saas-management-dashboard.zip`.
2. Open the extracted folder in VS Code.
3. Open a terminal in that folder.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```

## Features
- Overview dashboard with revenue, subscription, customer, and churn metrics
- Customer CRUD with form validation and duplicate-email protection
- Subscription listing and detail drawer/modal
- Pricing plan create, edit, and delete flows
- Search, status/plan filters, date-range filters, sorting, and pagination
- Revenue and usage charts, plan distribution, comparisons, and CSV export
- Confirmation dialogs, loading/saving feedback, empty states, and toast notifications
- Responsive sidebar and mobile layout
- Browser localStorage persistence for customers, subscriptions, and plans

## Notes
This is a frontend demo with sample data. It does not connect to a live API, database, identity provider, or payment processor. Revenue and usage analytics are demo values. Connect your backend/API before production use.
