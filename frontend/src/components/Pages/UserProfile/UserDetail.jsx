import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams(); // Get userId parameter from the URL
  const [profileData, setProfileData] = useState({
    name: '',
    imageUrl: '',
    email: '',
    phone: '',
    bio: '',
    location: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`/api/user/profile/${id}`);
        setProfileData(response.data);
      } catch (error) {
        setError('Error fetching user data');
        console.error(error);
      }
    };

    if (id) {
      fetchProfileData();
    }
  }, [id]);

  return (
    <div className="container">
      {error && <p className="text-red-600">{error}</p>}
      <ProfileCard data={profileData} />
    </div>
  );
}

export default UserDetail;
