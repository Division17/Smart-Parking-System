import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Edit2 } from 'lucide-react';
import ProfileEditForm  from './ProfileEditForm';

 function ProfileCard({ data, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedData) => {
    onUpdate(updatedData);
    setIsEditing(false);
  };

  if (isEditing) {
    return <ProfileEditForm data={data} onSubmit={handleUpdate} onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full mx-auto relative ">
      <button
        onClick={() => setIsEditing(true)}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
        aria-label="Edit profile"
      >
        <Edit2 className="w-5 h-5" />
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="relative w-32 h-32">
            {data.imageUrl ? (
              <img
                src={data.imageUrl}
                alt={`${data.name}'s profile`}
                className="w-full h-full rounded-full object-cover border-4 border-indigo-100"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-indigo-50 flex items-center justify-center">
                <User className="w-16 h-16 text-indigo-300" />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
            <p className="text-lg text-gray-600 mt-1">{data.title}</p>
            <p className="text-gray-500 mt-1 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-4 h-4" /> {data.location}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href={`mailto:${data.email}`} className="hover:text-indigo-600">
                {data.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-gray-400" />
              <a href={`tel:${data.phone}`} className="hover:text-indigo-600">
                {data.phone}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <span>{data.title}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600 leading-relaxed">{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;