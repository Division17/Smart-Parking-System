import React, { useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import axios from 'axios';


function UserDetail() {
  const { id } = useParams(); // Get userId parameter from the URL


  return (
    <div className="container">
      {error && <p className="text-red-600">{error}</p>}
      <ProfileCard data={profileData} />
    </div>
  );
}

export default UserDetail;
