import React from 'react';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';

function ContactInfoItem({icon='', title='', children=[]} ) {
  return (
    <div className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="bg-blue-50 p-2 rounded-full">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="mt-1 text-gray-600">{children}</div>
      </div>
    </div>
  );
}

 function ContactInfo() {
  return (
    <div className="space-y-4">
      <ContactInfoItem
        icon={<MapPin className="h-6 w-6 text-blue-600" />}
        title="Visit Us"
      >
        <p>Mahatma Jyotiba Phule University<br />Bareilly, UP 243006<br />India</p>
      </ContactInfoItem>

      <ContactInfoItem
        icon={<Phone className="h-6 w-6 text-blue-600" />}
        title="Call Us"
      >
        <p>Main:+91 8368097618<br />Support: +91 7668622420</p>
      </ContactInfoItem>

      <ContactInfoItem
        icon={<Mail className="h-6 w-6 text-blue-600" />}
        title="Email Us"
      >
        <p>General: division.pvt0@gmail.com<br />Support: division.pvt1@gmail.com</p>
      </ContactInfoItem>

      <ContactInfoItem
        icon={<Clock className="h-6 w-6 text-blue-600" />}
        title="Business Hours"
      >
        <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
      </ContactInfoItem>

      <ContactInfoItem
        icon={<Globe className="h-6 w-6 text-blue-600" />}
        title="Service Areas"
      >
        <p>Delhi • Gurugram • Bareilly<br />Benguluru • Noida • Lucknow
        *29-/-9/8 </p>
      </ContactInfoItem>
    </div>
  );
}

export default ContactInfo;