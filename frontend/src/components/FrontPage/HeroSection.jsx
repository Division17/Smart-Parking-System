import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float font-coming">
                Find and Book Parking Spots
                <br />
                in Seconds
              </h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto font-short">
                Secure your parking spot in advance. No more driving around looking for parking.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto shadow-xl animate-slideIn">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="location"
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 hover:shadow-md transition-shadow"
                  />
                </div>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 hover:shadow-md transition-shadow"
                  />
                </div>
                <div className="relative">
                  <input
                    type="time"
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-800 hover:shadow-md transition-shadow"
                  />
                </div>
              </div>
              <button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse-slow">
                Find Parking
              </button>
            </div>
          </div>
        </div>
      );
}

export default HeroSection