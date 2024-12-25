import React, { useState } from 'react';
import { User, Mail, Lock, Phone, Car } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function SignUpForm() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/user/signup', formData);
      setLoading(false);
      navigate('/login');
    } catch (error) {
      setLoading(false);
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-10">
      {loading && (
        <div className="fixed inset-0 font-extrabold text-2xl flex items-end justify-center bg-gray-100 bg-opacity-50">
          <div className="loader">Loading...</div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative flex items-center">
          <User className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="relative flex items-center">
          <Phone className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
            className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <div className="relative flex items-center">
          <Mail className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <div className="relative flex items-center">
          <Lock className="absolute left-3 w-5 h-5 text-gray-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="pl-10 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Create Account
        </button>
        {message && <p className="mt-4 text-center text-red-600">{message}</p>}
      </form>
    </div>
  );
}
