import { useState } from 'react'
import './App.css'
import Navbar from './Componets/Navbar'
import Container from './Componets/Container'
import Footer from './Componets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Container/>
      <Footer/>
    </>
  )
}

export default App
