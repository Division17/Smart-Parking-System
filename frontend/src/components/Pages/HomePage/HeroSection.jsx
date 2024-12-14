import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react';
import {Link} from 'react-router-dom'
 
const HeroSection = () => {
  return (

    <div className="bg-gray-200 py-20 p-10 flex flex-col items-center m-7">
        <div className="mb-12 text-center animate-fadeIn h-full w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold animate-float font-short">
            Find and Book 
            Parking Spots
            <br />
            in Seconds
          </h1>
          <p className="text-xlmax-w-2xl m-auto font-short">
            Secure your parking spot in advance. No more driving around looking for parking.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 max-w-3xl mx-auto shadow-xl animate-slideIn h-1/2 mt-10">
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
          <Link to='/auth/login'><button className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-500 transition-all duration-200 transform hover:scale-105 hover:shadow-lg animate-pulse-slow">
            Find Parking
          </button></Link>
        </div>
    </div>
  );
}

export default HeroSection