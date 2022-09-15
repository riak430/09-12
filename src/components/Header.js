import React from 'react';
 //import link
 import { Link } from 'react-router-dom';

 //import logo
 

function Header() {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to=''>
          <h1 className='text-xl font-bold'>Home<span className='text-green-800'>Land</span></h1>
        </Link>
        <div classname='flex items-center gap-8'>
          <Link className='hover:text-green-900 transition px-4' to=''>Log in</Link>
          <Link className='bg-green-800 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition' to=''>Sign up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header;