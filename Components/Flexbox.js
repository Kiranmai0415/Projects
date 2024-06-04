import React from 'react'
import '../Stylesheets/Flexbox.css';

const Flexbox = () => {
  return (
    <>
    <h2>Flexbox</h2> 
    <div className='flexbox-container'>
        <div className='flex1'>
            <div className='red'>red</div>
            <div className='blue'>blue</div>
            <div className='green'>green</div>
        </div>
        <div className='flex2'>
            <div className='red'>red</div>
            <div className='blue'>blue</div>
            <div className='green'>green</div>
        </div>
        <div className='flex3'>
            <div className='red'>red</div>
            <div className='blue'>blue</div>
            <div className='green'>green</div>
        </div>
       
    </div>
    </>
  )
}

export default Flexbox