import React from 'react';

function WeatherComp ({data}){
   
     // Conditional rendering
    // if(!data) return <p> Fetching Data...</p>;
    return (
        <>
            <div className='m-auto mt-6 w-4/5 h-3/4 p-8 font-sans  bg-[url(https://images.unsplash.com/photo-1542801205-5240aa78e9d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]   '>
               <div className='grid grid-col-8 grid-flow-col rounded-xl border-8 border-backdrop-blur-[20px] '>
                  {/* left panel */}
                  <div className='col-span-7  p-4'>
                     <p className='text-right mt-6'>10-08-2024 | 11:00</p>
                     <p className='text-5xl mt-72 mb-4 text-right'>Heavy Rain</p>
                     <hr />
                     <div className='h-1/4 mt-8  flex justify-around '>
                           <div className='w-16 p-2 h-auto text-center rounded-lg  backdrop-blur-[18px] '>
                              <p className='m-2 '>09:00</p>
                              <hr />
                              <img className='mt-2 invert ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div>
                          <div className='w-16 p-2 h-auto text-center rounded-lg backdrop-blur-[18px]'>
                              <p className='m-2 mb-2'>10:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >12{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg backdrop-blur-[18px]'>
                              <p className='m-2 mb-2'>11:00</p>
                              <hr />
                              <img className='mt-2 invert' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >13{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg backdrop-blur-[18px]'>
                              <p className='m-2 mb-2'>12:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >14{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg backdrop-blur-[18px]'>
                              <p className='m-2 mb-2'>13:00</p>
                              <hr />
                              <img className='mt-2 invert ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >15{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg backdrop-blur-[18px]'>
                              <p className='m-2 mb-2'>14:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >16{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg backdrop-blur-[18px]'>
                              <p className='m-2 mb-2'>15:00</p>
                              <hr />
                              <img className='mt-2 invert' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >17{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg backdrop-blur-[18px]'>
                              <p className='m-2 mb-2'>16:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >16{'\u00b0'}C </p>
                           </div>
                     </div>
                  </div>
                  {/* right panel */}
                  <div className='col-span-1 p-6  grid  backdrop-blur-[18px] '>
                     <div className='m-auto mt-2'>
                           <input className='bg-transparent border border-gray-400 rounded p-1  mr-2 ' type="text" placeholder='Enter your city'  />
                         
                           <button  className='bg-transparent border border-gray-400 rounded p-1'>Search</button>
                     </div>
                     
                     <p className='m-auto mt-6 text-7xl'>11{'\u00b0'}C </p>
                     <p className='m-auto mt-2 mb-6 '>Wind speed, 8 Km/h</p>
                     <hr />
                     <div className='m-auto w-full '>
                           <p className='mt-6'>The Next Days Forecast</p>
                           <div className='flex mt-6 justify-between '>
                              <img  className='invert ' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
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
                              <img  className='invert' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <div >
                                 <p> Tue | 13-08 </p>
                                 <p>Heavy Rain</p>
                              </div>
                              <div >
                                 <p>11{'\u00b0'}C </p>
                                 <p>31{'\u00b0'}C</p>
                              </div>
                           </div> <div className='flex mt-6 justify-between '>
                              <img  className='invert' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <div>
                                 <p> Wed | 14-08 </p>
                                 <p>Little Rain</p>
                              </div>
                              <div >
                                 <p>11{'\u00b0'}C </p>
                                 <p>31{'\u00b0'}C</p>
                              </div>
                           </div>  <div className='flex mt-6  justify-between '>
                              <img  className='invert' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
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
