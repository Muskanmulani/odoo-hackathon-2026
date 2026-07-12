require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const protect = require("./middleware/authMiddleware");

const authRoutes = require("./routes/authRoutes");
const assetRoutes = require("./routes/assetRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const departmentRoutes=require("./routes/departmentRoutes");
const categoryRoutes=require("./routes/categoryRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const reportRoutes = require("./routes/reportRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Asset routes (temporarily without JWT for faster development)
app.use("/api/assets", assetRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("AssetFlow Backend Running 🚀");

});

// Protected Test Route
app.get("/api/profile", protect, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});

app.use("/api/dashboard", dashboardRoutes);
app.use("/api/departments",departmentRoutes);
app.use("/api/categories",categoryRoutes);
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/chat", chatRoutes);
// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});