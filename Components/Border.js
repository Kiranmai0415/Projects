import React from 'react'
import '../Stylesheets/Border.css'

const Border = () => {
  return (
    <>
    <h2>BORDER RADIUS </h2>
    <div className='border-container'>
       <p className='div1'>border-radius : 25px; border: solid</p>
       <p className='div2'>border-radius : 50%; border: dashed</p>
       <p className='div3'>border-radius : 10px 40px; border: dotted</p>
       <p className='div4'>border-radius : 60px 70px 40px 140px; border: double</p>
       <p className='div5'>border-radius : 30% 30% / 80% 80%; border: inset</p>
       <p className='div6'>border-radius : 50% 80% / 70% 10%; border: outset</p>
    </div>
    </>
  )
}

export default Border