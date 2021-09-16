import React from 'react'

function ErrorMessage({ error }) {
  return (
    <div>
      <div className='bg-red-400 rounded-lg mx-auto px-3 py-3 shadow-md'>
        {' '}
        <h1 className='mr-2 inline-block'>Error:</h1>
        <p className='inline-block'>{error}</p>{' '}
      </div>
    </div>
  )
}

export default ErrorMessage
