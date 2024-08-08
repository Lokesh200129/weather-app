import React from 'react';
function WeatherComp ({data}){
   
     // Conditional rendering
    // if(!data) return <p> Fetching Data...</p>;
    return (
        <>
            <div className='m-auto mt-8 w-3/4 h-3/4 grid grid-col-3 grid-flow-col bg-blue-400 '>
               
                <div className='col-span-2  bg-red-300 p-4'>
                    <p className='text-right'>date | time</p>
                    <p className='text-5xl text-right'>Condition</p>

                </div>
              
                <div className=' p-4 bg-yellow-300 grid '>
                    <div className=''>
                        <input type="text" placeholder='Enter your city'  />
                        <button > Search </button>
                    </div>
                    <p className='m-auto text-5xl'>11{'\u00b0'}C </p>
                    
      
                </div>
            </div>
            
        </>
    )

}

export default WeatherComp;
