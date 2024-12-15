import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
    },

    Number: {
        type: Number,
        unique: true,
        required: true,
    },

    vehicleNumber: {
        type: String,
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

    profile: {
        type:String,
        default: "https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg",
    }

})

export const User = mongoose.model('User', userSchema);