import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'

function Home() {
  const [blogs, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setBlogs(data)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className='mx-auto'>
      <div className='border-b-2 mb-6'>
        <h1 className='font-semibold px-3 py-6 '>Welcome to Home page</h1>
        <p className='mb-6 px-3 py-6'>
          This is the best blog webite in the world!
        </p>
      </div>
      {isLoading && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          className='animate-spin h-14 w-14 mx-auto'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
          />
        </svg>
      )}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>
  )
}

export default Home
