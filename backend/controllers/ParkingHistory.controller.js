import { ParkingHistory } from '../models/ParkingHistory.model.js'


const ParkingHistoryController = async (req, res) => {

    const { date, place, entryTime, vehicleNumber } = req.body;

    if (
        !date ||
        !place ||
        !entryTime ||
        !vehicleNumber ||
        date == "" ||
        place == "" ||
        entryTime == "" ||
        vehicleNumber == ""
    ) {
        res.status(400).json({
            message: "Please provide all data",
            sucess: false
        })

    }

    try {
        const newParkingData = new ParkingHistory({
            date,
            place,
            entryTime,
            vehicleNumber,
            exitTime,
            state,
            totalTime,
        })


        await newParkingData.save();

        res.status(200).json({
            message: "Waiting for your arrival, hope you have a seemless experience.",
            sucess: true,
            data: ParkingHistory
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}


export default ParkingHistoryController;