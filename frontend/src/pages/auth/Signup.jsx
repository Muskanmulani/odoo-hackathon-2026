import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setMessage("");

    if (!formData.name || !formData.email || !formData.password) {
      setMessage("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://10.248.6.16:5000/api/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Signup Success:", response.data);

      setMessage("Account created successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {
      console.log("Signup Error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);

        setMessage(
          error.response.data.message ||
          "Registration failed."
        );
      } else if (error.request) {
        setMessage("Cannot connect to backend server.");
      } else {
        setMessage("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <h2 className="text-center mb-4 text-success">
          Create Account
        </h2>

        {message && (
          <div className="alert alert-info">
            {message}
          </div>
        )}

        <form onSubmit={handleSignup}>

          <div className="mb-3">
            <label className="form-label">
              Full Name
            </label>

            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Email Address
            </label>

            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              Confirm Password
            </label>

            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        <div className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;