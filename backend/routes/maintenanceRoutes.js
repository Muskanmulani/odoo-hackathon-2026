const express = require("express");

const router = express.Router();

const{
    createMaintenance,
    getMaintenance,
    updateMaintenance
}=require("../controllers/maintenanceController");

router.post("/",createMaintenance);

router.get("/",getMaintenance);

router.put("/:id",updateMaintenance);

module.exports=router;