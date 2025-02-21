import { useState } from 'react'
import './App.css'
import Navbar from './Componets/Navbar'
import Container from './Componets/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Container/>
    </>
  )
}

export default App
