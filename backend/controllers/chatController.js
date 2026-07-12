const chatResponse = async (req, res) => {
    try {

        const { message } = req.body;

        let reply = "Sorry, I didn't understand. Please ask about assets, maintenance, booking, or AssetFlow.";

        const msg = message.toLowerCase();


        if (msg.includes("asset") && msg.includes("available")) {
            reply = "You can check available assets from the Dashboard. AssetFlow shows real-time asset availability.";
        }

        else if (msg.includes("register") || msg.includes("add asset")) {
            reply = "To register an asset, go to Asset Registration and enter asset name, serial number, category, condition, and location.";
        }

        else if (msg.includes("maintenance")) {
            reply = "To raise maintenance, open the Maintenance section, select the asset, describe the issue, and submit the request.";
        }

        else if (msg.includes("booking") || msg.includes("book")) {
            reply = "Shared resources can be booked using the Resource Booking module. Overlapping bookings are automatically rejected.";
        }

        else if (msg.includes("assetflow") || msg.includes("what is this")) {
            reply = "AssetFlow is an Enterprise Asset & Resource Management System that helps organizations track assets, maintenance, and resource bookings.";
        }

        else if (msg.includes("hello") || msg.includes("hi")) {
            reply = "Hello! I am AssetFlow Assistant. How can I help you today?";
        }


        res.status(200).json({
            success:true,
            reply
        });


    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};


module.exports = {
    chatResponse
};