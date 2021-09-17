import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { JSON_API } from '../constants/constantData'
import useFetch from '../useFetch'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

function BlogDetails() {
  const { id } = useParams()
  const history = useHistory()
  const { data: blog, error, isLoading } = useFetch(`${JSON_API}/blogs/${id}`)

  const handleDelete = () => {
    fetch(`${JSON_API}/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      {blog && (
        <div className='shadow-sm rounded-lg px-3 py-3 m-5 border'>
          <article className='text-center mx-auto'>
            <h2 className='mb-1 text-xl text-red-600 font-semibold'>
              {blog.title}
            </h2>
            <p className='mb-3'>
              Written by <strong>{blog.author} </strong>
            </p>
            <div className='text-justify px-4'>{blog.body}</div>
            <button
              className='bg-red-500 hover:bg-red-800 px-2 py-1 rounded-md text-white mx-auto mt-5'
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
          </article>
        </div>
      )}
    </div>
  )
}

export default BlogDetails
