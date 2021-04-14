import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
export  function ClockCom() {
  const [value, setValue] = useState(new Date());
 
  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date()),
      1000
    );
 
    return () => {
      clearInterval(interval);
    }
  }, []);
 
  return (
    <div style={{backgroundColor:'red'}} >
      <p>Current time:</p>

      <Clock value={value} style={{backgroundColor:'white'}} />
     
    </div>
  )
}