const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{
    resourceName:{
        type:String,
        required:true
    },

    bookedBy:{
        type:String,
        required:true
    },

    startTime:{
        type:Date,
        required:true
    },

    endTime:{
        type:Date,
        required:true
    },

    status:{
        type:String,
        enum:[
            "Upcoming",
            "Ongoing",
            "Completed",
            "Cancelled"
        ],
        default:"Upcoming"
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Booking", bookingSchema);