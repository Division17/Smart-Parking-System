import React, { useState } from 'react';
import {CircleParking} from 'lucide-react';
import BookingForm from './BookingForm';
import SuccessMessage from './SuccessMessage';

function BookingMain() {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    entryTime: '',
    location: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = () => {
    setFormData((prev) => ({ ...prev }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ vehicleNumber: '', entryTime: '', location: '' });
  };

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8 animate-fadeIn">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4 hover:rotate-12 transition-transform duration-300">
              <CircleParking className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book your spot</h1>
            <p className="text-gray-600">In seconds just by a simple click</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 animate-slideUp">
            {isSubmitted ? (
              <SuccessMessage formData={formData} onReset={handleReset} />
            ) : (
              <BookingForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            )}
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Secure • Convenient • Available 24/7
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookingMain