import React from 'react';
import { useState , useEffect } from 'react';
function WeatherComp() {
                
      

   // const [loading, setLoading] = useState(true)
   const [data, setData] = useState(obj)
   const [place, setPlace] = useState('noida')
   // const [Search, setSearch] = useState(false)

   // useEffect(() => {
   //    async function fetchData() {
   //       try {
   //          const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=05e520217cce4953a6b32218240708&q=${place}`)
   //          const data = await res.json();
   //          setData(() => data);
   //          // setLoading((pre) => pre != pre)
   //       }
   //       catch (error) {
   //          console.error('There was a problem with the fetch operation:', error);
   //       }
   //       // setSearch(false)
   //    }
   //    fetchData()
   // }, [place])

   const handler = (e) => {
      setPlace(e.target.value)
   }
   // const getResult = () => {
   //    setSearch(true)
   // }
   const hour =data.forecast.forecastday[0].hour
   const maxTemp = data.forecast.forecastday[0].date
   return (
      <>
         <div className='m-auto mt-6 w-4/5 h-3/4 p-8 font-sans  bg-[url(https://images.unsplash.com/photo-1542801205-5240aa78e9d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]   '>
            <div className='grid grid-col-8 grid-flow-col rounded-xl border-8 border-backdrop-blur-[20px] '>
               {/* left panel */}
               <div className='col-span-7  p-2'>
                  <p className='text-right mt-6'>{maxTemp}</p>
                  <p className='text-5xl mt-72 mb-4 text-right'>{data.current.condition.text} </p>
                  <hr />
                  <div className='h-1/4 mt-8 w-[34rem] flex justify-around scroll-container '>
                    {
                      hour.map((item, index)=>{
                        return(
                          <div className='w-16 p-2 ml-2 h-auto text-center rounded-lg  backdrop-blur-[18px] ' key={index}>
                            <p className='m-2 '>{item.time}</p>
                            <hr />
                            <img className='mt-2 invert ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                            <p className='mt-2' >{item.temp_c }{'\u00b0'}C </p>
                          </div>
                        )
                        
                      })
                    }
                     
                     
                  </div>
               </div>
               {/* right panel */}
               <div className='col-span-1 p-6  grid  backdrop-blur-[18px] '>
                  <div className='m-auto mt-2'>
                     <input className='bg-transparent border border-gray-400 rounded p-1  mr-2 ' type="text" placeholder='Enter your city' value={place} onChange= {handler} />

                     <button className='bg-transparent border border-gray-400 rounded p-1'>Search</button>
                  </div>

                  <p className='m-auto mt-6 text-7xl'>{data.current.temp_c}{'\u00b0'}C </p>
                  <p className='m-auto mt-2 mb-6 '>Wind speed, {data.current.wind_kph} Km/h</p>
                  <hr />
                  <div className='m-auto w-full '>
                     <p className='mt-6'>The Next Days Forecast</p>
                     <div className='flex mt-6 justify-between '>
                        <img className='invert ' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                        <div >
                           <p>Mon | 12-08 </p>
                           <p>Cloudy</p>
                        </div>
                        <div >
                           <p>11{'\u00b0'}C</p>
                           <p>31{'\u00b0'}C</p>
                        </div>
                     </div>
                     <div className='flex mt-6 justify-between '>
                        <img className='invert' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                        <div >
                           <p> Tue | 13-08 </p>
                           <p>Heavy Rain</p>
                        </div>
                        <div >
                           <p>11{'\u00b0'}C </p>
                           <p>31{'\u00b0'}C</p>
                        </div>
                     </div> <div className='flex mt-6 justify-between '>
                        <img className='invert' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                        <div>
                           <p> Wed | 14-08 </p>
                           <p>Little Rain</p>
                        </div>
                        <div >
                           <p>11{'\u00b0'}C </p>
                           <p>31{'\u00b0'}C</p>
                        </div>
                     </div>  <div className='flex mt-6  justify-between '>
                        <img className='invert' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                        <div >
                           <p> Thu | 15-08 </p>
                           <p>Sunny</p>
                        </div>
                        <div >
                           <p>11{'\u00b0'}C </p>
                           <p>31{'\u00b0'}C</p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

         </div>

      </>
   )

}

export default WeatherComp;
