import React from 'react';
import { CheckCircle } from 'lucide-react';

function SuccessMessage({ formData, onReset }) {
  return (
    <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg animate-fadeIn">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Booking Confirmed!</h2>
      <div className="space-y-2 mb-6">
        <p className="text-gray-600">Vehicle Number: {formData.vehicleNumber}</p>
        <p className="text-gray-600">Entry Time: {formData.entryTime}</p>
        <p className="text-gray-600">Location: {formData.location}</p>
      </div>
      <button
        onClick={onReset}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
      >
        Book Another Spot
      </button>
    </div>
  );
}

export default SuccessMessage