import { useState } from 'react'
import './App.css'
import Employee from './Components/Employee'
import StateDemo from './Components/StateDemo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <StateDemo message="Print in child component -- prop dilling example"/>
          </>
  )
}

export default App
