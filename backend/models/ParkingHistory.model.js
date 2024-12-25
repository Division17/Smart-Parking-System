import mongoose from 'mongoose';

const ParkingHistorySchema = new mongoose.Schema({
  date: {
    type: Date, 
    default: () => new Date().toISOString().slice(0, 10), 
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

export const ParkingHistory = mongoose.model('ParkingHistory', ParkingHistorySchema);