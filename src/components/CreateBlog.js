import React from 'react'

function CreateBlog() {
  return (
    <div className='max-w-md text-center mx-auto mb-2 border shadow-lg'>
      <h2 className='font-semibold text-xl mb-5 '>Add new Blog</h2>
      <form className='px-5 py-5'>
        <label className='text-left block'>Blog Title</label>
        <input
          type='text'
          required
          className='hover:shadow-md mb-5 w-full px-2 py-3 my-0 border-2 border-solid block'
        ></input>
        <label className='text-left block'>Blog Body</label>
        <textarea
          required
          className='hover:shadow-md mb-5 w-full px-2 py-3 my-0 border-2 border-solid block'
        ></textarea>
        <label className='text-left block'>Blog Author</label>
        <select className=' bg-white w-full px-1 py-1 my-0 block border hover:shadow-md'>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        <button className='hover:bg-red-800 px-1 py-1 bg-red-500 block mt-5 text-white text-sm cursor-pointer rounded-md'>
          <svg
            className='w-5 h-5 mr-1 inline-block'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M12 6v6m0 0v6m0-6h6m-6 0H6'
            ></path>
          </svg>
          Add Blog
        </button>
      </form>
    </div>
  )
}

export default CreateBlog
