const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        unique:true
    },

    departmentHead:{
        type:String
    },

    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Department", departmentSchema);