import mongoose from 'mongoose';

const parkingHistorySchema = new mongoose.Schema({
  date: {
    type: Date, 
    default: () => new Date().toISOString().slice(0, 10), // Extract yyyy-mm-dd
    required: true,
  },

  place: {
    type: String,
    required: true,
  },

  entryTime: {
    type: String,
    required: true,
  },

  exitTime: {
    type: String,
    required: true,
  },

  vehicleNumber: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    default: 'Upcoming'
  },

  totalTime: {
    type: String,
    default: 'N/A'
  }
}, {
  timestamps: true
});

export const ParkingHistory = mongoose.model('ParkingHistory', parkingHistorySchema);