import mongoose from 'mongoose'

const parkingHistorySchema = new mongoose.Schema({

    date: {
        type: Date,
        default: Date.now,
        required: true,
    },

    place: {
        type: String,
        required: true,
    },

    entryTime: {
        type: Date,
        required: true,    
    },

    exitTime: {
        type: Date,
   
    },

    vehicleNumber: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        default:'Upcoming' 
    }

},{
    timestamps: true
})

export const ParkingHistory = mongoose.model('ParkingHistory', parkingHistorySchema)