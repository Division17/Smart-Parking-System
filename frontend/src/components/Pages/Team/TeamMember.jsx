import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

function TeamMember(
  { 
    name = '', 
    image = '', 
    email = '', 
    linkedin = '', 
    twitter = '', 
    bio = '', 
    expertise = [] 
  }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border-2  border-gray-200">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-semibold">{name}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 mt-6 pt-6 border-t border-gray-100">
          <a
            href={`mailto:${email}`}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              title="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
