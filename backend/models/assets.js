const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        assetTag: {
            type: String,
            required: true,
            unique: true
        },

        serialNumber: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        condition: {
            type: String,
            default: "Good"
        },

        location: {
            type: String
        },

        status: {
            type: String,
            enum: [
                "Available",
                "Allocated",
                "Reserved",
                "Under Maintenance",
                "Lost",
                "Retired",
                "Disposed"
            ],
            default: "Available"
        },

        assignedTo: {
    type: String,
    default: null
},
     expectedReturnDate: {
    type: Date,
    default: null
},
    },
    {
        timestamps: true
    }
);


const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;