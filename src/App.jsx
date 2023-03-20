import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar2 from './Navbar2'
import Section from './Section'
import './section.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar2/>
      <Section/>  
    </div>
  )
}

export default App
