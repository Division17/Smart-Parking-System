import React from 'react'
import UserPic from './UserPic'
import ParkingHistory from './ParkingHistory'

const UserProfile = () => {
    return (
        <>
            <div className='w-screen flex justify-center py-16'>
                <div className='w-4/5'>
                    <UserPic></UserPic>
                    <ParkingHistory></ParkingHistory>
                </div>
            </div>
        </>
    )
}

export default UserProfile