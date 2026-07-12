const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema(
{
    asset:{
        type:String,
        required:true
    },

    issue:{
        type:String,
        required:true
    },

    priority:{
        type:String,
        enum:["Low","Medium","High"],
        default:"Medium"
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "Approved",
            "Rejected",
            "In Progress",
            "Resolved"
        ],
        default:"Pending"
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Maintenance", maintenanceSchema);