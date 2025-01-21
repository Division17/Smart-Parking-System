import mongoose from 'mongoose'

const ParkingDetailSchema =  mongoose.Schema({

    name :{
        type: String,
        required: true,
    },

    spaceEmpty: {
        type: String,
        required: true,
    },

    spaceOccupied: {
        type: String,
        required: true,
    },

    
})

export const ParkingDetails = mongoose.model('ParkingDetails', ParkingDetailSchema)