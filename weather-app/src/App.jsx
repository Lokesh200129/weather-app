import { useState } from 'react'
import WeatherComp from './component/WeatherComp'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <WeatherComp />
    </>
  )
}

export default App
