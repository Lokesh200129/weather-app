
function WeatherComp (){
    return (
        <>
            <div className="bg-neutral-100 text-black h-30  mt-4  w-1/2 h-full m-auto p-4" >
                <div  className="flex flex-row space-x-32 ">
                    <div className="date">day/date</div>
                    <div className="temperature">temperature</div>
                    <button className="detailBtn"> Detail</button>
                    <br/>
                </div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officiis id tenetur est,</div>
                <div className="flex flex-row space-x-28">                
                    <div className="flex flex-row space-x-28"> 
                        <div>Real feel </div>
                        <div>32</div>
                    </div>
                    <div className="flex flex-row space-x-28"> 
                        <div>Max UV Index </div>
                        <div>32</div>
                    </div>
                </div> 
                <div className="flex flex-row space-x-28" >                
                    <div className="flex flex-row space-x-28"> 
                        <div>Real feel Shade </div>
                        <div>32</div>
                    </div>
                    <div className="flex flex-row space-x-28"> 
                        <div>Wind</div>
                        <div>32</div>
                    </div>
                </div> 

            </div>
        </>
    )

}

export default WeatherComp;
