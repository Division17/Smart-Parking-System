import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, Edit2 } from 'lucide-react';
import ProfileEditForm from './ProfileEditForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProfileCard() {
  const { id } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    imageUrl: '',
    email: '',
    phone: '',
    bio: '',
    location: '',
    profession: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/profile/${id}`);
        setProfileData(response.data); 
      } catch (error) {
        setMessage('Error fetching user profile data');
      }
    };
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    setIsEditing(false);
    try {
      const response = await axios.get(`/api/user/profile/${id}`);
      setProfileData(response.data)
    } catch (error) {
     console.log(error)
    }
  };

  if (isEditing) {
    return (
      <ProfileEditForm
        data={profileData}
        onSubmit={handleUpdate}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl w-full mx-auto relative">
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
            {profileData.imageUrl ? (
              <img
                src={profileData.imageUrl}
                alt={`${profileData.name}'s profile`}
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
            <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
            <p className="text-lg text-gray-600 mt-1">{profileData.title}</p>
            <p className="text-gray-500 mt-1 flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-4 h-4" /> {profileData.location}
            </p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href={`mailto:${profileData.email}`} className="hover:text-indigo-600">
                {profileData.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-5 h-5 text-gray-400" />
              <a href={`tel:${profileData.number}`} className="hover:text-indigo-600">
                {profileData.number}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <span>{profileData.profession}</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
