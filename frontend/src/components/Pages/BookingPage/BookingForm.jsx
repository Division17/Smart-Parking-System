import React from 'react';
import { Car, Clock, MapPin } from 'lucide-react';

import BookingInput from './BookingInput'

function BookingForm({ formData, onChange, onSubmit }) {
  const parkingLocations = [
    'Level 1 - A Block',
    'Level 1 - B Block',
    'Level 2 - A Block',
    'Level 2 - B Block',
    'VIP Parking',
    'Disabled Parking',
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <BookingInput
        id="vehicleNumber"
        label="Vehicle Number"
        icon={<Car size={20} />}
        type="text"
        placeholder="Enter vehicle number"
        value={formData.vehicleNumber}
        onChange={(value) => onChange('vehicleNumber', value)}
        required
      />

      <BookingInput
        id="entryTime"
        label="Entry Time"
        icon={<Clock size={20} />}
        type="time"
        value={formData.entryTime}
        onChange={(value) => onChange('entryTime', value)}
        required
      />

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Parking Location
        </label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <select
            id="location"
            required
            className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            value={formData.location}
            onChange={(e) => onChange('location', e.target.value)}
          >
            <option value="">Select parking location</option>
            {parkingLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
      >
        <Car size={20} />
        <span>Book Parking Spot</span>
      </button>
    </form>
  );
}

export default BookingForm