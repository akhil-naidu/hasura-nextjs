import React from 'react';
import Link from 'next/link';

import { useAuthStore } from '@/utils/store';

const GetStarted = () => {
  return (
    <Link href='/login'>
      <a className='btn'>Get started</a>
    </Link>
  );
};

const UserProfileMenu = () => {
  const logout = useAuthStore((state) => state.logout);
  return (
    <div className='dropdown-end dropdown '>
      <label tabIndex='0' className='avatar btn btn-ghost btn-circle'>
        <div className='w-10 rounded-full'>
          <img src='https://api.lorem.space/image/face?hash=33791' />
        </div>
      </label>
      <ul
        tabIndex='0'
        className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
      >
        <li>
          <a className='justify-between'>
            Profile
            <span className='badge'>New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a onClick={logout}>Logout</a>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const loggedInUser = useAuthStore((state) => state.loggedInUser);
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex='0' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex='0'
            className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
          >
            <li>
              <Link href='/todo'>
                <a>Todo App</a>
              </Link>
            </li>
            <li>
              <Link href='/counter'>
                <a>Counter</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href='/'>
          <a className='btn btn-ghost text-xl normal-case'>Blog App</a>
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link href='/todo'>
              <a>Todo App</a>
            </Link>
          </li>
          <li>
            <Link href='/counter'>
              <a>Counter</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        {loggedInUser ? <UserProfileMenu /> : <GetStarted />}
      </div>
    </div>
  );
};

export default Navbar;
