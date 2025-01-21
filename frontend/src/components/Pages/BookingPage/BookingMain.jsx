import React, { useState } from 'react';
import { CircleParking } from 'lucide-react';
import BookingForm from './BookingForm';
import SuccessMessage from './SuccessMessage';
import ParkingInfo from './ParkingInfo'; 

function BookingMain() {
  const [formData, setFormData] = useState({
    date: '',
    vehicleNumber: '',
    entryTime: '',
    exitTime: '',
    place: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({ date: '', vehicleNumber: '', entryTime: '', exitTime: '', place: '' });
  };

  return (
    <div className="min-h-screen flex my-6">
      <div className="w-5/6 flex items-center justify-center">
        <div className="max-w-md w-2/3">
          <div className="text-center mb-4 animate-fadeIn">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-2 hover:rotate-12 transition-transform duration-300">
              <CircleParking className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 ">Book your spot</h1>
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

          <p className="text-center text-sm text-gray-500 mt-6">
            Secure • Convenient • Available 24/7
          </p>
        </div>
      </div>

      <div className="w-1/6 bg-white border-2 border-red-500 flex items-center justify-center p-4">
        <ParkingInfo />
      </div>
    </div>
  );
}

export default BookingMain;
