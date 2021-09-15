import React from 'react'

const BlogList = ({ blogs }) => {
  return blogs.map((blog, idx) => (
    <div
      className='relative border hover:shadow-lg p-4 rounded-md z-1 mx-2 mb-2'
      key={blog.id}
    >
      <h1 className='font-serif text-red-500 text-3xl'>{blog.title}</h1>
      <h2 className='mt-1'>Writen by {blog.author}</h2>
      <p className='text-black my-2'>{blog.body}</p>
    </div>
  ))
}

export default BlogList
