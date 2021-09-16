import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

function BlogDetails() {
  const { id } = useParams()
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch('http://localhost:8000/blogs/' + id)

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      {blog && (
        <div className='shadow-sm rounded-lg px-3 py-3 m-5 border'>
          <article>
            <h2 className='mb-1 text-xl text-red-600 font-semibold'>
              {blog.title}
            </h2>
            <p className='mb-3'>
              Written by <strong>{blog.author} </strong>
            </p>
            <div className='text-justify px-4'>{blog.body}</div>
          </article>
        </div>
      )}
    </div>
  )
}

export default BlogDetails
