import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const NavBtns = () => {

    const [isLogOut, setIsLogOut] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {

        const logOut = async () => {
            try {

                const response = await axios.get('/api/user/logout')
                console.log(response.data.message)

                if (response) {
                    navigate('/')
                }

            } catch (error) {
                alert(error)
            }
        }
        if (isLogOut) {
            logOut();
        }
    }, [isLogOut])


    const handleClick = () => {
        setIsLogOut(true)
    }

    return (
        <div className='flex gap-6 font-short font-normal text-sm '>
            <div>
                <i className="ri-sun-line text-2xl mr-2"></i>
            </div>
            <div>
                <Link to='/login'><button className='border-2 border-black hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform'>Login</button></Link>
            </div>
            <div>
                <Link to='/signup'><button className='border-2  border-black hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform'>Sign Up</button></Link>
            </div>
            <div>
                <button className='border-2  border-black hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform'
                    onClick={handleClick}
                >Log Out</button>
            </div>
        </div>
    )
}

export default NavBtns