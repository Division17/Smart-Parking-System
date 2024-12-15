import React from 'react'
import UserDetail from './UserDetail'
import ParkingHistory from './ParkingHistory'

const UserProfile = () => {
    return (
        <>
            <div className='w-full flex items-center pt-16 flex-col'>
                <div className=''>
                    <UserDetail></UserDetail>
                    <ParkingHistory></ParkingHistory>
                </div>
            </div>
        </>
    )
}

export default UserProfile