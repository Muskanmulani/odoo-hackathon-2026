import { useState } from "react";
import axios from "axios";

function AssetRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    serialNumber: "",
    category: "",
    condition: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/assets",
        formData
      );

      setMessage("Asset Registered Successfully!");

      setFormData({
        name: "",
        serialNumber: "",
        category: "",
        condition: "",
        location: "",
      });

    } catch (error) {
      console.log(error);
      setMessage("Failed to register asset.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">

      <div className="card shadow p-4">

        <h2 className="mb-4">
          Register New Asset
        </h2>

        {message && (
          <div className="alert alert-info">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Asset Name
            </label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Asset Name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Serial Number
            </label>

            <input
              type="text"
              className="form-control"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              placeholder="Enter Serial Number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Category
            </label>

            <select
              className="form-select"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Category
              </option>

              <option value="Laptop">
                Laptop
              </option>

              <option value="Desktop">
                Desktop
              </option>

              <option value="Printer">
                Printer
              </option>

              <option value="Projector">
                Projector
              </option>

              <option value="Furniture">
                Furniture
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">
              Condition
            </label>

            <select
              className="form-select"
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              required
            >
              <option value="">
                Select Condition
              </option>

              <option value="Excellent">
                Excellent
              </option>

              <option value="Good">
                Good
              </option>

              <option value="Fair">
                Fair
              </option>

              <option value="Poor">
                Poor
              </option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Location
            </label>

            <input
              type="text"
              className="form-control"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Location"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register Asset"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default AssetRegistration;