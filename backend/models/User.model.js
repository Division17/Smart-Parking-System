import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    number: {
        type: Number,
        unique: true,
        required: true,
    },

    vehiclenumber: {
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
    },

    bio: {
        type:String
    }
 
})

export const User = mongoose.model('User', userSchema);