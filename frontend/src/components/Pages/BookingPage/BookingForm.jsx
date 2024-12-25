import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Calendar, Car, Clock, MapPin } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

function BookingForm({ formData, onChange }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const parkingLocations = [
    'Level 1 - A Block',
    'Level 1 - B Block',
    'Level 2 - A Block',
    'Level 2 - B Block',
    'VIP Parking',
    'Disabled Parking',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      date: formData.date,
      vehicleNumber: formData.vehicleNumber,
      entryTime: formData.entryTime,
      exitTime: formData.exitTime,
      place: formData.place,
    };

    try {
      const response = await axios.post(`/api/user/book/${id}`, updatedData);
      setMessage('Booking successful!');
      setIsSubmitted(true); 
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };


  useEffect(() => { 
    if (isSubmitted) {
       navigate(`/profile/${id}`);
       } }, [isSubmitted]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor='date' className="block text-sm font-medium text-gray-700 mb-2">
          Arrival Date
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Calendar size={20} />
          </div>
          <input
            id='date'
            type='date'
            required
            placeholder="Enter arrival date"
            className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={formData.date}
            onChange={(e) => onChange('date', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor='vehicleNumber' className="block text-sm font-medium text-gray-700 mb-2">
          Vehicle Number
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Car size={20} />
          </div>
          <input
            id='vehicleNumber'
            type='text'
            required
            placeholder="Enter vehicle number"
            className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={formData.vehicleNumber}
            onChange={(e) => onChange('vehicleNumber', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor='entryTime' className="block text-sm font-medium text-gray-700 mb-2">
          Entry Time
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Clock size={20} />
          </div>
          <input
            id='entryTime'
            type='time'
            required
            className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={formData.entryTime}
            onChange={(e) => onChange('entryTime', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor='exitTime' className="block text-sm font-medium text-gray-700 mb-2">
          Exit Time
        </label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Clock size={20} />
          </div>
          <input
            id='exitTime'
            type='time'
            required
            className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            value={formData.exitTime}
            onChange={(e) => onChange('exitTime', e.target.value)}
          />
        </div>
      </div>

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
            value={formData.place}
            onChange={(e) => onChange('place', e.target.value)}
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
      {message && <p className="mt-4 text-center text-red-600">{message}</p>}
    </form>
  );
}

export default BookingForm;
