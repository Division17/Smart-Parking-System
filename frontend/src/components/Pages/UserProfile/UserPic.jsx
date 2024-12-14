import React from 'react'

const data = {
    username:'Division17',
    source: 'https://plus.unsplash.com/premium_vector-1716901215367-4ce32fee397b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bio:'Car Enthusiast'
}

const UserPic = () => {
  return (
    <>
     <div className="flex flex-col items-center p-6 mb-5 border-2 border-gray-100 bg-white rounded-lg shadow-xl">
  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
    <img src={data.source} alt="User image" className="w-full h-full object-cover" />
  </div>
  <div className="mt-4 text-center">
    <h2 className="text-xl font-bold text-gray-800">{data.username}</h2>
    <p className="mt-2 text-sm text-gray-600">{data.bio}</p>
  </div>
</div>

    </>
  )
}

export default UserPic