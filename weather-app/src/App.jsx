import { useEffect, useState } from 'react'
import WeatherComp from './component/WeatherComp'
// import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  // console.log(data)
  const [place, setPlace] = useState('noida')
  const [Search, setSearch] =useState(false)

  useEffect(() => {
    if(!Search) return
    async function fetchData() {
      try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=05e520217cce4953a6b32218240708&q=${place}`)
        const data = await res.json();
        setData(() => data);
        setLoading((pre) => pre != pre)
      }

      catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
      setSearch(false)
    }
    fetchData()
  }, [place, Search])


  // Conditional rendering
  


  const handler = (e) => {
    setPlace(e.target.value)
  }
  const getResult = () => {
    setSearch(true)
  }
  return (
    <>
      <div className="input">
        <input type="text" placeholder='Enter your city' value={place} onChange={handler} />
        <button onClick={getResult} > Search </button>
      </div>
    {loading ?  <p> Loading... </p> : <WeatherComp data={data} />}

      
    </>
  )
}

export default App
