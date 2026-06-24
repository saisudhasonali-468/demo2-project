import { useState } from 'react'
import './App.css'
import Employee from './Components/Employee'
import StateDemo from './Components/StateDemo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Employee/>
      <StateDemo/>
          </>
  )
}

export default App
