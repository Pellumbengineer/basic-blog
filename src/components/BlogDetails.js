import React from 'react'
import { useParams } from 'react-router-dom'

function BlogDetails() {
  const { id } = useParams()

  return (
    <div className='bg-black rounded-lg'>
      <h1 className='text-white px-3 py-3'>
        Blog Details - <h1 className='text-white inline-block'>{id}</h1>
      </h1>
    </div>
  )
}

export default BlogDetails
