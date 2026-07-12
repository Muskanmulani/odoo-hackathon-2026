// ===============================
// AssetFlow Application Constants
// ===============================

// App Information
export const APP_NAME = "AssetFlow";

export const APP_VERSION = "1.0.0";

// Backend API URL
export const BASE_URL = "http://localhost:5000";

// API Endpoints
export const API = {
  LOGIN: "/api/auth/login",
  REGISTER: "/api/auth/register",

  DASHBOARD: "/api/dashboard",

  ASSETS: "/api/assets",

  CATEGORIES: "/api/categories",

  DEPARTMENTS: "/api/departments",

  MAINTENANCE: "/api/maintenance",

  BOOKINGS: "/api/bookings",

  REPORTS: "/api/reports",

  EMPLOYEES: "/api/employees",
};

// Asset Status
export const ASSET_STATUS = [
  "Available",
  "Allocated",
  "Maintenance",
];

// Asset Categories
export const ASSET_CATEGORIES = [
  "Laptop",
  "Desktop",
  "Printer",
  "Projector",
  "Furniture",
];

// Asset Condition
export const ASSET_CONDITION = [
  "Excellent",
  "Good",
  "Fair",
  "Poor",
];

// Theme Colors
export const COLORS = {
  PRIMARY: "#0d6efd",
  SUCCESS: "#198754",
  WARNING: "#ffc107",
  DANGER: "#dc3545",
};