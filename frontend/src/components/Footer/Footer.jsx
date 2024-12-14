import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Car } from 'lucide-react';
import {Link} from 'react-router'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 font-short">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link to='/'><span className="text-2xl font-bold text-white font-oregano">ParkEase</span></Link>
            </div>
            <p className="text-sm">
              Making parking hassle-free with smart solutions for urban mobility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to='/team' className="hover:text-indigo-400 transition-colors">About Us</Link>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-indigo-400" />
                <span>division.pvt1@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-indigo-400" />
                <span>+91 8368097618</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-indigo-400" />
                <address>MJPRU Bareilly, U.P. 243006</address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {currentYear} ParkEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;