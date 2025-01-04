import React from 'react';
import { Link } from 'react-router-dom'; // corrected import statement

const Logo = () => {
  return (
    <div>
      <div className='font-oregano mt-2 font-extrabold text-4xl hover:cursor-pointer text-black dark:text-white'>
        <Link to='/'>
          <p>ParkEase</p>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
