import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <main className='text-gray-900 body-font'>
      <Navbar />
      <div className=' p-5 max-w-2xl mt-10 mb-10 mr-auto ml-auto'>
        <Home />
      </div>
    </main>
  )
}

export default App
