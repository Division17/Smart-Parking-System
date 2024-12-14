import React from 'react';;
import  ContactForm  from './ContactForm';
import  ContactInfo  from './ContactInfo';

function Contact() {
  return (
    <div className="py-12 bg-gray-100">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Have questions about our parking services? We're here to help you 24/7.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
            <ContactInfo />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;