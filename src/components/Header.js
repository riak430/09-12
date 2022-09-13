import React from 'react';
 //import link
 import { Link } from 'react-router-dom';

 //import logo
 

function Header() {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to=''>
          <div>HomeLand</div>
        </Link>
        <div classname='flex items-center gap-8'>
          <Link className='hover:text-violet-900 transition' to=''>Log in</Link>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py3 rounded-lg transition' to=''>Sign up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header