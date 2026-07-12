import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
      }}
    >
      <h3 className="text-center mb-4">
        AssetFlow
      </h3>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <NavLink
            to="/dashboard"
            className="nav-link text-white"
          >
            📊 Dashboard
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/assets"
            className="nav-link text-white"
          >
            💻 Asset List
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/assets/register"
            className="nav-link text-white"
          >
            ➕ Register Asset
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/assets/allocate"
            className="nav-link text-white"
          >
            🔄 Asset Allocation
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/employees"
            className="nav-link text-white"
          >
            👨‍💼 Employees
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/departments"
            className="nav-link text-white"
          >
            🏢 Departments
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/categories"
            className="nav-link text-white"
          >
            📂 Categories
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/maintenance"
            className="nav-link text-white"
          >
            🛠 Maintenance
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/booking"
            className="nav-link text-white"
          >
            📅 Booking
          </NavLink>
        </li>

        <li className="nav-item mb-2">
          <NavLink
            to="/reports"
            className="nav-link text-white"
          >
            📈 Reports
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;