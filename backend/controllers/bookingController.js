const Booking = require("../models/Booking");

// Create Booking
const createBooking = async (req, res) => {
    try {

        const {
            resourceName,
            bookedBy,
            startTime,
            endTime
        } = req.body;

        const existingBooking = await Booking.findOne({
            resourceName,
            status: { $ne: "Cancelled" },
            startTime: { $lt: new Date(endTime) },
            endTime: { $gt: new Date(startTime) }
        });

        if (existingBooking) {
            return res.status(400).json({
                success: false,
                message: "Resource is already booked for this time slot"
            });
        }

        const booking = await Booking.create({
            resourceName,
            bookedBy,
            startTime,
            endTime
        });

        res.status(201).json({
            success: true,
            booking
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
// Get Bookings
const getBookings = async(req,res)=>{
    try{

        const bookings = await Booking.find();

        res.status(200).json({
            success:true,
            bookings
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};


// Update Booking
const updateBooking = async(req,res)=>{
    try{

        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.status(200).json({
            success:true,
            booking
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};


// Delete Booking
const deleteBooking = async(req,res)=>{
    try{

        await Booking.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success:true,
            message:"Booking deleted successfully"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};

module.exports={
    createBooking,
    getBookings,
    updateBooking,
    deleteBooking
};