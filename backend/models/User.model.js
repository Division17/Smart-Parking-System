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
        default: "https://images.vexels.com/media/users/3/128997/isolated/preview/054a28914528d95e7d0faa63da939eef-vintage-car-circle-icon.png",
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

    ParkingHistory : [{
        type: Schema.Types.ObjectId, 
        ref:'ParkingHistory'
    }],

},{
    timestamps: true
})

export const User = mongoose.model('User', userSchema);