import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../contexts/AuthContext';
import axios from 'axios';

const NavBtns = () => {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/user/logout');
      if (response) {
        setIsAuthenticated(false);
        navigate('/login');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className='bg-white dark:bg-gray-900 p-4'>
      <div className='flex gap-6 font-short font-normal text-sm '>
        {isAuthenticated ? (
          <div>
            <button
              className='border-2 border-black dark:border-white hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform dark:text-white'
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <div>
              <Link to='/login'>
                <button className='border-2 border-black dark:border-white hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform dark:text-white'>
                  Login
                </button>
              </Link>
            </div>
            <div>
              <Link to='/signup'>
                <button className='border-2 border-black dark:border-white hover:font-bold rounded-lg px-2 shadow-lg py-1 hover:scale-110 hover:transition-transform dark:text-white'>
                  Sign Up
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBtns;
