import React,{useState} from 'react';




function Times(){

  const [time,setTime]=useState();


  function updateIt(){

    let y= new Date().toLocaleTimeString();
    
        setTime(y);
      }


      setInterval(updateIt,1000);


return (
  
  
    
<>
<h1>Time Clock Using React JS</h1>
<br></br>
<h1>{time}</h1>


  
</>




)



}


export default Times;