import React, { useState } from 'react'
import './App.css'

const App = () => {
   const [color, setColor] = useState('yellow');

  return (
    <>
      <h1>Background Changer</h1>
      <div className='container' style={{backgroundColor: color}}>
        <button style={{backgroundColor: 'red'}}
        onClick={()=>{
          setColor('red');
        }}
        className='btn'>Red</button>
        <button 
          onClick={()=>{
            setColor('green')}}
            style={{backgroundColor: 'green'}}
         className='btn'>Green</button>
        <button  
        onClick={()=>{
          setColor('blue')}}
        style={{backgroundColor: 'blue'}}
        className='btn'>Blue</button>
      </div>

    </>
  )
}

export default App;

