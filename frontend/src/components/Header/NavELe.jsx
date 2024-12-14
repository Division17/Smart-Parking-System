import React from 'react'

const NavELe = () => {
  return (
    <div>
        <nav>
            <ul className='flex align-middle justify-evenly gap-5 font-coming font-extrabold py-2'>
                <li className='hover:underline underline-offset-4 hover:cursor-pointer '>Home</li>
                <li  className='hover:underline underline-offset-4 hover:cursor-pointer '>Our Team</li>
                <li className='hover:underline underline-offset-4 hover:cursor-pointer '>Contact Us </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavELe