const express = require("express");
const router = express.Router();


const {
    createAsset,
    getAssets,
    getAssetById,
    updateAsset,
    deleteAsset,
    allocateAsset,
    returnAsset
} = require("../controllers/assetsController");

router.post("/", createAsset);

router.get("/", getAssets);

router.get("/:id", getAssetById);

router.put("/:id", updateAsset);

router.put("/:id/allocate", allocateAsset);

router.delete("/:id", deleteAsset);

router.put("/:id/return", returnAsset);


module.exports = router;