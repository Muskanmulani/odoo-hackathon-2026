const Asset = require("../models/assets");
const Department = require("../models/Department");
const Category = require("../models/Category");
const Maintenance = require("../models/Maintenance");
const Booking = require("../models/Booking");

const getReports = async (req, res) => {
    try {

        const totalAssets = await Asset.countDocuments();
        const totalDepartments = await Department.countDocuments();
        const totalCategories = await Category.countDocuments();
        const totalMaintenance = await Maintenance.countDocuments();
        const totalBookings = await Booking.countDocuments();

        const availableAssets = await Asset.countDocuments({
            status: "Available"
        });

        const allocatedAssets = await Asset.countDocuments({
            status: "Allocated"
        });

        res.status(200).json({
            success: true,
            data: {
                totalAssets,
                availableAssets,
                allocatedAssets,
                totalDepartments,
                totalCategories,
                totalMaintenance,
                totalBookings
            }
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getReports
};