import React, { useState } from 'react'
import BlogList from './BlogList'

function Home() {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div className='mx-auto'>
      <div className='border-b-2 mb-6'>
        <h1 className='font-semibold px-3 py-6 '>Welcome to Home page</h1>
        <p className='mb-6 px-3 py-6'>
          This is the best blog webite in the world!
        </p>
      </div>
      <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>
  )
}

export default Home
