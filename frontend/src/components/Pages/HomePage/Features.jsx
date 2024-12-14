import React from 'react';
import { Shield, Clock, MapPin, CreditCard } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Booking',
      description: 'Your parking spot is guaranteed and secured upon booking'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Save Time',
      description: 'No more circling around looking for parking spaces'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Multiple Locations',
      description: 'Find parking spots across the city'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Easy Payment',
      description: 'Secure online payment for your convenience'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold font-coming text-center mb-12 text-gray-800">
          Why Choose ParkEase?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;