import mongoose from 'mongoose';
import { ParkingHistory } from '../models/ParkingHistory.model.js';
import { User } from '../models/User.model.js'

const ParkingHistoryController = async (req, res) => {

    const { date, place, entryTime, exitTime, vehicleNumber } = req.body;

    if ( 
        !date ||
        !place ||
        !entryTime ||
        (exitTime && exitTime === "") ||
        !vehicleNumber ||
        place === "" ||
        entryTime === "" ||
        vehicleNumber === ""||
        date == ""
    ) {
        res.status(400).json({
            message: "Please provide all data",
            success: false,
        });
        return;
    }


    let newState
    let today = new Date().toISOString().slice(0, 10)

    if (date > today) {
        newState = 'Upcoming';
    } else if (date === today) {
        newState = 'Today';
    } else {
        newState = 'Completed';
    }
    
    function calculateTimeDifference(entryTime, exitTime) {
        const entryTimeParts = entryTime.split(":");
        const entryHours = parseInt(entryTimeParts[0]);
        const entryMinutes = parseInt(entryTimeParts[1]);

        const exitTimeParts = exitTime.split(":");
        const exitHours = parseInt(exitTimeParts[0]);
        const exitMinutes = parseInt(exitTimeParts[1]);

        const totalEntryMinutes = entryHours * 60 + entryMinutes;
        const totalExitMinutes = exitHours * 60 + exitMinutes;

        let totalTimeMinutes = totalExitMinutes - totalEntryMinutes;

        if (totalTimeMinutes < 0) {
            totalTimeMinutes += 24 * 60;
        }

        const hours = Math.floor(totalTimeMinutes / 60);
        const minutes = totalTimeMinutes % 60;

        const timeDifference = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

        return timeDifference;
    }

    let totalTime;
    if (exitTime) {
        totalTime = calculateTimeDifference(entryTime, exitTime);
    }

    try {
        const newParkingData = new ParkingHistory({
            date,
            place,
            entryTime,
            vehicleNumber,
            exitTime,
            state: newState,
            totalTime,
        });

        await newParkingData.save();

    const objId = newParkingData;

       const { id } = req.params;
      
       await User.updateOne({
          id: User._id
       },
    {
        $push:{
            ParkingHistory: 
            objId
        },
    },
    { upsert: false, 
        new: true
    }
)
       
  res.status(200).json({
            message: "Waiting for your arrival, hope you have a seemless experience.",
            success: true,
            data: newParkingData,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error",
        });
    }
};

export default ParkingHistoryController;