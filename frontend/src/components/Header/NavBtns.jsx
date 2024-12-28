import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const NavBtns = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate();


    const handleLogout = async () => {
        try {
            const response = await axios.get('/api/user/logout')
            setIsAuthenticated(false)
            if (response) {
             navigate('/')
            }
        } catch (error) {
            alert(error)
        }
  }

    return (
        <>
        <div className='flex gap-6 font-short font-normal text-sm '>
            {isAuthenticated ? ( <div>
                <button className='border-2  border-black hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform'
                    onClick={handleLogout}
                >Log Out</button>
            </div>):(
                <>
                   <div>
                  <Link to='/login'><button className='border-2 border-black hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform'>Login</button></Link>
              </div>
              <div>
                  <Link to='/signup'><button className='border-2  border-black hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform'>Sign Up</button></Link>
              </div>
                </>
               
            )}
          
        </div>
        </>
    )
}

export default NavBtns