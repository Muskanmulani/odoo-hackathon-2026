import { useEffect, useState } from "react";
import axios from "axios";

function AssetAllocation() {
  const [assets, setAssets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [assetId, setAssetId] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  useEffect(() => {
    fetchAssets();
    fetchEmployees();
  }, []);

  // Fetch available assets
  const fetchAssets = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/assets"
      );
      setAssets(response.data);
    } catch (error) {
      console.log("Error fetching assets", error);
    }
  };

  // Fetch employees
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/employees"
      );
      setEmployees(response.data);
    } catch (error) {
      console.log("Error fetching employees", error);
    }
  };

  // Allocate asset
  const allocateAsset = async () => {
    if (!assetId || !employeeId) {
      alert("Please select both Asset and Employee.");
      return;
    }

    try {
      await axios.put(
        `http://localhost:5000/api/assets/${assetId}/allocate`,
        {
          employeeId,
        }
      );

      alert("Asset allocated successfully!");

      setAssetId("");
      setEmployeeId("");

      fetchAssets();

    } catch (error) {
      console.log("Allocation Error", error);
      alert("Failed to allocate asset.");
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Asset Allocation</h2>

      <div className="card shadow p-4">

        <div className="mb-3">
          <label className="form-label">
            Select Asset
          </label>

          <select
            className="form-select"
            value={assetId}
            onChange={(e) => setAssetId(e.target.value)}
          >
            <option value="">Choose Asset</option>

            {assets.map((asset) => (
              <option key={asset._id} value={asset._id}>
                {asset.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Select Employee
          </label>

          <select
            className="form-select"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          >
            <option value="">Choose Employee</option>

            {employees.map((employee) => (
              <option
                key={employee._id}
                value={employee._id}
              >
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-primary"
          onClick={allocateAsset}
        >
          Allocate Asset
        </button>

      </div>

      <div className="card shadow mt-4">
        <div className="card-header">
          Available Assets
        </div>

        <div className="card-body">

          <table className="table table-hover">

            <thead>
              <tr>
                <th>Asset Name</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {assets.map((asset) => (
                <tr key={asset._id}>
                  <td>{asset.name}</td>
                  <td>{asset.category}</td>
                  <td>
                    <span
                      className={`badge ${
                        asset.status === "Available"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {asset.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}

export default AssetAllocation;