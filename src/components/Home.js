import { useHistory } from 'react-router-dom'
import { JSON_API } from '../constants/constantData'
import useFetch from '../useFetch'
import BlogList from './BlogList'
import ErrorMessage from './ErrorMessage'
import Loader from './Loader'

function Home() {
  const history = useHistory()
  const { data: blogs, isLoading, error } = useFetch(`${JSON_API}/blogs`)

  const handleDelete = (id) => {
    fetch(`${JSON_API}/blogs/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
    // const newBlogs = blogs.filter((blog) => blog.id !== id)
    // setBlogs(newBlogs)
  }

  return (
    <div className='mx-auto'>
      <div className='border-b-2 mb-6'>
        <h1 className='font-semibold px-3 py-6 '>Welcome to Home page</h1>
        <p className='mb-6 px-3 py-6'>
          This is the best blog webite in the world!
        </p>
      </div>
      {error && <ErrorMessage error={error} />}
      {isLoading && <Loader />}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>
  )
}

export default Home
