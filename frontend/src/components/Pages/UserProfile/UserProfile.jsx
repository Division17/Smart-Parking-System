import React, { useEffect, useState } from 'react';
import ParkingHistory from './ParkingHistory';
import ProfileCard from './ProfileCard';
import { useParams } from 'react-router';
import axios from 'axios';

const UserProfile = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/profile/${id}`);
        setDetails(response.data[0]);
      } catch (error) {
        setMessage('Error fetching user details', error);
      }
    };
        fetchData();   
  }, [id]);

  return (
    <>
      {message && <p className="text-red-600">{message}</p>}
      <div className="w-full flex items-center pt-16 flex-col">
        <div className="">
          {details ? (
            <ProfileCard data={details} />
          ) : (
            <p>Loading user details...</p>
          )}
           {details.ParkingHistory ? (
           <ParkingHistory data={details.ParkingHistory}/>
          ) : (
            <p>Loading user details...</p>
          )}
          
        </div>
      </div>
    </>
  );
};

export default UserProfile;