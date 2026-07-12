import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

import Dashboard from "../pages/dashboard/Dashboard";

import AssetList from "../pages/assets/AssetList";
import AssetRegistration from "../pages/assets/AssetRegistration";
import AssetAllocation from "../pages/assets/AssetAllocation";
import AssetDetails from "../pages/assets/AssetDetails";

import EmployeeDirectory from "../pages/EmployeeDirectory/EmployeeDirectory";

import Departments from "../pages/departments/Departments";
import Categories from "../pages/categories/Categories";
import Maintenance from "../pages/maintenance/Maintenance";
import Booking from "../pages/booking/Booking";
import Reports from "../pages/reports/Reports";

import Layout from "../layouts/Layout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard Layout */}

        <Route element={<Layout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/assets" element={<AssetList />} />

          <Route
            path="/assets/register"
            element={<AssetRegistration />}
          />

          <Route
            path="/assets/allocate"
            element={<AssetAllocation />}
          />

          <Route
            path="/assets/:id"
            element={<AssetDetails />}
          />

          <Route
            path="/employees"
            element={<EmployeeDirectory />}
          />

          <Route
            path="/departments"
            element={<Departments />}
          />

          <Route
            path="/categories"
            element={<Categories />}
          />

          <Route
            path="/maintenance"
            element={<Maintenance />}
          />

          <Route
            path="/booking"
            element={<Booking />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;