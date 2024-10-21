import './style.css'
import Button from './button.jsx';
import React, {useState} from 'react';
import cameraLence from '../src/assets/cameraLence.png'
import battery from '../src/assets/battery.jpg'
import signal from '../src/assets/signal.webp'
import wifiicon from '../src/assets/wifiicon.webp'

function App() {
  const num  = ['AC','+/-','%', '/','7', '8', '9' ,'*', '4', '5', '6', '-', '1', '2', '3','+', '0','.', '=', 'D'];
  const [value,setValue]=useState('')

  const click = (text) =>{
    if(text === "AC"){
      setValue('');
    }else if(text === "+/-"){
      setValue(`(-${value})`)
    }
    else if (text === "="){
      try{
        setValue(eval(value));
      }catch{
        setValue("error");
      }
    }else{
      setValue(value + text)
    }
  };

  return (
    <div className="main">
      <div className='box'>
      <div className='volume-inc'></div>
      <div className='volume-dec'></div>
      <div className='volume2'></div>
        <div className='box2'>
          <div className='notch'>
            <img className='lence' src={cameraLence} alt="" />
            </div>
          <div className='time'>11:11</div>
          <img className='signal' src={signal} alt="" />
          <img className='wifi' src={wifiicon} alt="" />
          <img className='battery' src={battery} alt="" />
          <input type="text" className='screen' value={value}/>
{ 
num.map((text , index) => (
  <Button key={index} text={text} onClick={()=>click(text)}/>
 ))}

<span className='line'></span>
<div className='power-btn'></div>
 </div>
   </div>
    </div>
  )}

export default App