import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-red-600 font-bold text-3xl'>Sraman</h1>
      
      <button>Second</button>
    </>
  )
}

export default App