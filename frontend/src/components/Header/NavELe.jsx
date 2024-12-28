import React from 'react';
import { NavLink } from 'react-router-dom';

const NavELe = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <nav className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex align-middle justify-evenly gap-5 font-coming font-extrabold py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? 'text-blue-900 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300'
                } border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-teal-700 lg:p-0 `
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? 'text-blue-900 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300'
                } border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-teal-700 lg:p-0 `
              }
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive
                    ? 'text-blue-900 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300'
                } border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-teal-700 lg:p-0 `
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavELe;
