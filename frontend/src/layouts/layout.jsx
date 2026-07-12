import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
function Layout() {
  return (
    <div>

      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar + Page Content */}
      <div className="d-flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div
          className="flex-grow-1 p-4"
          style={{
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
          }}
        >
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default Layout;