import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Car, Calendar, AtSign } from 'lucide-react';

export function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    vehicleNumber: '',
    email: '',
    password: '',
    dateOfBirth: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative flex items-center">
        <User className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative flex items-center">
        <AtSign className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative flex items-center">
        <Phone className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative flex items-center">
        <Car className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          type="text"
          name="vehicleNumber"
          placeholder="Vehicle Number"
          value={formData.vehicleNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative flex items-center">
        <Mail className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative flex items-center">
        <Lock className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="relative flex items-center">
        <Calendar className="absolute left-3 w-5 h-5 text-gray-400" />
        <input
          className="pl-10 w-full px-4 py-3 appearance-none bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Create Account
      </button>
    </form>
  );
}
