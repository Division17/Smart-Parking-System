import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    imageUrl: {
        type:String,
        default: "https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg",
    },

    bio: {
        type:String,
        default:"N/A"
    },

    location:{
        type:String,
        default: "N/A"
    },

    profession: {
       type:String,
       default: "N/A"
    },

    parking : [{
        type: Schema.Types.ObjectId, 
        ref:'ParkingHistory'
    }],

},{
    timestamps: true
})

export const User = mongoose.model('User', userSchema);