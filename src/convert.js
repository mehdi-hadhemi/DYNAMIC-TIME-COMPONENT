import React from 'react';

 const Convert = (props)=>{
    
           var   seconds = parseInt((props.time/1000)%60)
             var minutes = parseInt((props.time/(1000*60))%60)
             var hours = parseInt((props.time/(1000*60*60))%24);
    
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        return (<div className='time'> 
            <p> {hours}   : {minutes} : {seconds} </p>
            </div>
        )


 

 }
 export default Convert;