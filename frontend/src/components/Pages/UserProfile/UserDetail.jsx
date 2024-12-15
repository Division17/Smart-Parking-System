import React, { useState } from 'react';
import ProfileCard from './ProfileCard';


function UserDetail() {
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Passionate software engineer with over 8 years of experience in full-stack development. Specialized in building scalable web applications and mentoring junior developers. Always eager to learn new technologies and solve complex problems.",
    title: "Senior Software Engineer",
    location: "San Francisco, CA"
  });

  const handleProfileUpdate = (newData) => {
    setProfileData(newData);
  };

  return (
    
      <div className="container ">
        <ProfileCard data={profileData} onUpdate={handleProfileUpdate} />
      </div>
  );
}

export default UserDetail;