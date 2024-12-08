import React from 'react'

const NavBtns = () => {
    return (
        <div className='flex gap-6 font-short font-normal text-sm '>
            <div>
              <i className="ri-sun-line text-2xl mr-2"></i>
            </div>
            <div>
                <button className='border-2 px-2 py-1'>Login</button>
            </div>
            <div>
                <button className='border-2 px-2 py-1'>Sign Up</button>
            </div>


        </div>
    )
}

export default NavBtns