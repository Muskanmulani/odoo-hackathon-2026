const Asset = require("../models/assets");

const getDashboard = async (req, res) => {
    try {

        const totalAssets = await Asset.countDocuments();

        const availableAssets = await Asset.countDocuments({
            status: "Available"
        });

        const allocatedAssets = await Asset.countDocuments({
            status: "Allocated"
        });

        const maintenanceAssets = await Asset.countDocuments({
            status: "Under Maintenance"
        });

        res.status(200).json({
            success: true,
            totalAssets,
            availableAssets,
            allocatedAssets,
            maintenanceAssets
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getDashboard
};