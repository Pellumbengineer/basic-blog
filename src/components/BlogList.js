import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs, handleDelete }) => {
  return blogs.map((blog, idx) => (
    <div
      className='relative border hover:shadow-lg hover:border-red-300 p-4 rounded-md z-1 mx-2 mb-2'
      key={blog.id}
    >
      <Link to={`/blogs/${blog.id}`}>
        <h1 className='font-serif text-red-500 text-3xl'>{blog.title}</h1>
        <h2 className='mt-1'>Writen by {blog.author}</h2>
        {/* <p className='text-black my-2'>{blog.body}</p> */}
      </Link>
      <button
        className='bg-red-500 hover:bg-red-800 px-2 py-1 rounded-md text-white absolute bottom-2 right-2'
        onClick={() => handleDelete(blog.id)}
      >
        <svg
          className='w-5 h-5 inline-block mr-1 mb-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
          ></path>
        </svg>
        Delete Blog
      </button>
    </div>
  ))
}

export default BlogList
