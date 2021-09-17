import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { JSON_API } from '../constants/constantData'

function CreateBlog() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }

    setIsLoading(true)
    setTimeout(() => {
      fetch(`${JSON_API}/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      }).then(() => {
        setIsLoading(false)
        setAuthor('')
        setBody('')
        setTitle('')
        history.push('/')
      })
    }, 2000)
  }

  return (
    <div className='max-w-md text-center mx-auto mb-2 border-b-2'>
      <h2 className='font-semibold text-xl mb-5 mt-5'>Add new Blog</h2>
      <form onSubmit={handleSubmit} className='px-5 py-5'>
        <label className='text-left block'>Blog Title</label>
        <input
          type='text'
          required
          placeholder='Please Enter blog title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className='hover:shadow-md mb-5 w-full px-2 py-3 my-0 border-2 border-solid block'
        ></input>
        <label className='text-left block'>Blog Body</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
          }}
          placeholder='Please Write about your blog'
          required
          className='hover:shadow-md mb-5 w-full px-2 py-3 my-0 border-2 border-solid block'
        ></textarea>
        <label className='text-left block'>Blog Author</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
          className=' bg-white w-full px-1 py-1 my-0 block border hover:shadow-md'
        >
          <option value='' selected disabled hidden>
            Choose here
          </option>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!isLoading ? (
          <button className='mx-auto hover:bg-red-800 px-3 py-1 bg-red-500 block mt-5 text-white text-base cursor-pointer rounded-md'>
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
        ) : (
          <button
            disabled
            className='mx-auto bg-red-800 px-3 py-2 block mt-5 text-white text-base cursor-pointer rounded-md'
          >
            Saving ...
          </button>
        )}
      </form>
    </div>
  )
}

export default CreateBlog
