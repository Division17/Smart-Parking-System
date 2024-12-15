import React from 'react'
import {Link} from 'react-router-dom'

const NavBtns = () => {
    return (
        <div className='flex gap-6 font-short font-normal text-sm '>
            <div>
              <i className="ri-sun-line text-2xl mr-2"></i>
            </div>
            <div>
               <Link to='/login'><button className='border-2 border-black rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform'>Login</button></Link> 
            </div>
            <div>
               <Link to='/signup'><button className='border-2  border-black  rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform'>Sign Up</button></Link> 
            </div>


        </div>
    )
}

export default NavBtns