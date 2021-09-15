import React from 'react'

const Navbar = () => {
  return (
    <header className='top-0'>
      <div className='border-b-2 border-yellow-800 text-center px-5 py-5 flex max-w-2xl m-auto'>
        <h1 className='font-bold text-red-600 ml-3 text-3xl'>
          The Pellumb Blog
        </h1>
        <div className='ml-auto'>
          <a
            href='/'
            className='inline-flex items-center py-1 px-3 ml-4 text-white hover:bg-red-800 rounded-md bg-red-400'
          >
            Home
          </a>
          <a
            href='/create'
            className='inline-flex items-center py-1 px-3 ml-1 text-white hover:bg-red-800 rounded-md bg-red-400'
          >
            New Blog
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
