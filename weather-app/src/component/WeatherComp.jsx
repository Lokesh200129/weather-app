import React from 'react';
function WeatherComp ({data}){
   
     // Conditional rendering
    if(!data) return <p> Fetching Data...</p>;
    return (
        <>
            <div className="bg-neutral-100 text-black h-30  mt-4  w-3/4 h-full m-auto p-4" >
                <div  className="flex flex-row space-x-8 ">
                    <div>Place: <strong>{data.location.name}</strong></div>
                    <div className="date">day/date {data.location.localtime} </div>
                    <div className="temperature">Temp {data.current.temp_c}</div>
                    <button className="detailBtn"> Detail</button>
                    <br/>
                </div>
               
                <div> <strong>Weather Condition : </strong> {data.current.condition.text} </div>
               
                <div className="flex flex-row space-x-28">                
                    <div className="flex flex-row space-x-28"> 
                        <div>Real feel  </div>
                        <div>{data.current.feelslike_c}</div>
                    </div>
                    <div className="flex flex-row space-x-28"> 
                        <div>Humadity</div>
                        <div>{data.current.humidity}</div>
                    </div>
                </div> 
                <div className="flex flex-row space-x-28" >                
                    <div className="flex flex-row space-x-28"> 
                        <div>Real feel Shade </div>
                        <div>32</div>
                    </div>
                    <div className="flex flex-row space-x-28"> 
                        <div>Wind</div>
                        <div>{data.current.wind_kph} Km/h</div>
                    </div>
                </div> 

            </div>
        </>
    )

}

export default WeatherComp;
