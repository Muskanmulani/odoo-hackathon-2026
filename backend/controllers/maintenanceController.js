const Maintenance = require("../models/Maintenance");

const createMaintenance = async(req,res)=>{
    try{

        const maintenance = await Maintenance.create(req.body);

        res.status(201).json({
            success:true,
            maintenance
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

const getMaintenance = async(req,res)=>{
    try{

        const maintenance = await Maintenance.find();

        res.status(200).json({
            success:true,
            maintenance
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

const updateMaintenance = async(req,res)=>{
    try{

        const maintenance = await Maintenance.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.status(200).json({
            success:true,
            maintenance
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

module.exports={
    createMaintenance,
    getMaintenance,
    updateMaintenance
};