import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Herobanner from './Component/Main Hero banner/herobanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <Header/>
        <Herobanner/>
        

    </>
  )
}

export default App
