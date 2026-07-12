const Asset = require("../models/assets");

// Create Asset
// Create Asset
const createAsset = async (req, res) => {
    try {
        console.log(req.body);

        const {
            name,
            serialNumber,
            category,
            condition,
            location
        } = req.body;

        // Generate Asset Tag Automatically
        const lastAsset = await Asset.findOne().sort({ createdAt: -1 });

        let assetTag = "AF-0001";

        if (lastAsset) {
            const lastNumber = parseInt(lastAsset.assetTag.split("-")[1]);

            assetTag = `AF-${String(lastNumber + 1).padStart(4, "0")}`;
        }

        const asset = await Asset.create({
            name,
            assetTag,
            serialNumber,
            category,
            condition,
            location
        });

        res.status(201).json({
            success: true,
            message: "Asset created successfully",
            asset
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get All Assets
const getAssets = async (req, res) => {
    try {
        const assets = await Asset.find();

        res.status(200).json({
            success: true,
            count: assets.length,
            assets
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Asset By ID
const getAssetById = async (req, res) => {
    try {
        const asset = await Asset.findById(req.params.id);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        res.status(200).json({
            success: true,
            asset
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Update Asset
const updateAsset = async (req, res) => {
    try {

        const asset = await Asset.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Asset updated successfully",
            asset
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
// Delete Asset
const deleteAsset = async (req, res) => {
    try {

        const asset = await Asset.findByIdAndDelete(req.params.id);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Asset deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
// Allocate Asset
const allocateAsset = async (req, res) => {
    try {

        const { assignedTo, expectedReturnDate } = req.body;

        const asset = await Asset.findById(req.params.id);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        if (asset.status === "Allocated") {
            return res.status(400).json({
                success: false,
                message: "Asset is already allocated"
            });
        }

        asset.assignedTo = assignedTo;
        asset.expectedReturnDate = expectedReturnDate;
        asset.status = "Allocated";

        await asset.save();

        res.status(200).json({
            success: true,
            message: "Asset allocated successfully",
            asset
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
// Return Asset
const returnAsset = async (req, res) => {
    try {

        const asset = await Asset.findById(req.params.id);

        if (!asset) {
            return res.status(404).json({
                success: false,
                message: "Asset not found"
            });
        }

        asset.assignedTo = null;
        asset.expectedReturnDate = null;
        asset.status = "Available";

        await asset.save();

        res.status(200).json({
            success: true,
            message: "Asset returned successfully",
            asset
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createAsset,
    getAssets,
    getAssetById,
    updateAsset,
    deleteAsset,
    allocateAsset,
    returnAsset
};