import React from 'react';

function WeatherComp ({data}){
   
     // Conditional rendering
    // if(!data) return <p> Fetching Data...</p>;
    return (
        <>
            <div className='m-auto mt-8 w-3/4 h-3/4 grid grid-col-8 grid-flow-col bg-blue-400 '>
               
                <div className='col-span-7  bg-red-300 p-4'>
                    <p className='text-right'>date | time</p>
                    <p className='text-5xl text-end'>Condition</p>
                    <div className='h-1/4 bg-green-500 mb-0'>
                        hello
                    </div>
                </div>

              
                <div className=' col-span-1 p-4 bg-grey-300 grid '>
                    <div className='m-auto mt-8'>
                        <input type="text" placeholder='Enter your city'  />
                        <button > Search </button>
                    </div>
                    
                    <p className='m-auto mt-8  text-7xl'>11{'\u00b0'}C </p>
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
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </>
    )

}

export default WeatherComp;
