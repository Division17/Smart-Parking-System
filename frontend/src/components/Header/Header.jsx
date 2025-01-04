import React from 'react';
import Logo from './Logo';
import NavELe from './NavELe';
import NavBtns from './NavBtns';

const Header = () => {
  return (
    <>
      <div className='pt-4 pb-2 px-12 flex justify-between border-b-2 border-gray-300 dark:border-gray-700 shadow-md bg-gray-50 dark:bg-gray-900 sticky top-0 z-50'>
        <Logo />
        <NavELe />
        <NavBtns />
      </div>
    </>
  );
};

export default Header;
