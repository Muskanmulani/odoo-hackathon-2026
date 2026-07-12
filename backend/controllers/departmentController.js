const Department = require("../models/Department");

// Create Department
const createDepartment = async (req,res)=>{
    try{

        const department = await Department.create(req.body);

        res.status(201).json({
            success:true,
            department
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};


// Get Departments
const getDepartments = async(req,res)=>{
    try{

        const departments = await Department.find();

        res.status(200).json({
            success:true,
            departments
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};


// Update Department
const updateDepartment = async(req,res)=>{
    try{

        const department = await Department.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.status(200).json({
            success:true,
            department
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};


// Delete Department
const deleteDepartment = async(req,res)=>{
    try{

        await Department.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success:true,
            message:"Department deleted"
        });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

module.exports={
    createDepartment,
    getDepartments,
    updateDepartment,
    deleteDepartment
};