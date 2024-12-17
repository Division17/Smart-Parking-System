import React from 'react'
import ParkingHistory from './ParkingHistory'
import ProfileCard from './ProfileCard'
const UserProfile = () => {

    return (
        <>
            <div className='w-full flex items-center pt-16 flex-col'>
                <div className=''>
                    <ProfileCard></ProfileCard>
                    <ParkingHistory></ParkingHistory>
                </div>
            </div>
        </>
    )
}

export default UserProfile