import React, { useEffect, useState } from 'react'
import ParkingHistory from './ParkingHistory'
import ProfileCard from './ProfileCard'
import { useParams } from 'react-router'
import axios from 'axios'

const UserProfile = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({})
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/user/profile/${id}`);
                setDetails(response.data)

            } catch (error) {
                console.log(error);
                setMessage('Error fetching user details');
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {message && <p className="text-red-600">{message}</p>}
            <div className='w-full flex items-center pt-16 flex-col'>
                <div className=''>
                    <ProfileCard data={details} />
                    <ParkingHistory></ParkingHistory>
                </div>
            </div>
        </>
    )
}

export default UserProfile