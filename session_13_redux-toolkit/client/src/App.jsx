import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import Random from './components/Random'
import Product from './components/product'
import Modal from './components/base/modal/modal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Count/> */}
      {/* <Random/> */}
      <Product/>
     
    </>
  )
}

export default App
