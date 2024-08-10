import React from 'react';

function WeatherComp ({data}){
   
     // Conditional rendering
    // if(!data) return <p> Fetching Data...</p>;
    return (
        <>
            <div className='m-auto mt-6 w-3/4 h-3/4 p-10 bg-[url(https://images.unsplash.com/photo-1542801205-5240aa78e9d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
               <div className='grid grid-col-8 grid-flow-col border-8 border-sky-500 '>
                  <div className='col-span-7 mx-8  p-4'>
                     <p className='text-right mt-6'>date | time</p>
                     <p className='text-5xl mt-72 mb-4 text-right'>Condition</p>
                     <hr />
                     <div className='h-1/4 mt-8  flex justify-around '>
                           <div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-1 '>09:00</p>
                              <hr />
                              <img className='mt-1 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-1' >11{'\u00b0'}C </p>
                           </div>
                           <div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div><div className='w-16 p-2 h-auto text-center rounded-lg bg-blue-200'>
                              <p className='m-2 mb-2'>09:00</p>
                              <hr />
                              <img className='mt-2 ' src="https://img.icons8.com/?size=50&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <p className='mt-2' >11{'\u00b0'}C </p>
                           </div>
                     </div>
                  </div>
                  <div className=' col-span-1 p-8 bg-grey-300 grid  '>
                     <div className='m-auto mt-6'>
                           <input className='bg-transparent shadow-xl text-amber-50 ' type="text" placeholder='Enter your city'  />
                           <button > Search </button>
                     </div>
                     
                     <p className='m-auto mt-6  text-7xl'>11{'\u00b0'}C </p>
                     <p className='m-auto mt-2 mb-6 '>Wind speed, 8 Km/h</p>
                     <hr />
                     <div className='m-auto'>
                           <p className='mt-6'>The Next Days Forecast</p>
                           <div className='flex mt-6'>
                              <img  className='' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <div className='ml-4'>
                                 <p> Day /Date </p>
                                 <p>Weather Condition</p>
                              </div>
                              <div className='ml-8'>
                                 <p>11{'\u00b0'}C </p>
                                 <p>31{'\u00b0'}C</p>
                              </div>
                           </div>
                           <div className='flex mt-6'>
                              <img  className='' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <div className='ml-4'>
                                 <p> Day /Date </p>
                                 <p>Weather Condition</p>
                              </div>
                              <div className='ml-8'>
                                 <p>11{'\u00b0'}C </p>
                                 <p>31{'\u00b0'}C</p>
                              </div>
                           </div> <div className='flex mt-6'>
                              <img  className='' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <div className='ml-4'>
                                 <p> Day /Date </p>
                                 <p>Weather Condition</p>
                              </div>
                              <div className='ml-8'>
                                 <p>11{'\u00b0'}C </p>
                                 <p>31{'\u00b0'}C</p>
                              </div>
                           </div>  <div className='flex mt-6'>
                              <img  className='' src="https://img.icons8.com/?size=30&id=HmG1jwKEJyxC&format=png&color=000000" alt="" />
                              <div className='ml-4'>
                                 <p> Day /Date </p>
                                 <p>Weather Condition</p>
                              </div>
                              <div className='ml-8'>
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
