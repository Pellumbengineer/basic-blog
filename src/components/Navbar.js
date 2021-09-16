import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='top-0'>
      <div className='border-b-2 border-yellow-800 text-center px-5 py-5 flex max-w-2xl m-auto'>
        <h1 className='font-bold text-red-600 ml-3 text-3xl'>
          The Pellumb Blog
        </h1>
        <div className='ml-auto'>
          <Link
            to='/'
            className='inline-flex items-center py-1 px-3 ml-4 text-white hover:bg-red-800 rounded-md bg-red-400'
          >
            Home
          </Link>
          <Link
            to='/create'
            className='inline-flex items-center py-1 px-3 ml-1 text-white hover:bg-red-800 rounded-md bg-red-400'
          >
            New Blog
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
