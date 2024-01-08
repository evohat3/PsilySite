import React, { useEffect, useState } from 'react'
import "animate.css"
import "../styles/font.css"

export default function Home() {

 

  return (
    <div className=''>
      
<div className='text-center p-4  animate__animated animate__backInRight bg-white textfont'>Welcome To Precision Network Solutions!</div>

<div className='text-zinc-200 text-center text-5xl m-20 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]'>

<div className='m-4 p-4 focus-in-contract sans-serif'>Redefining Home Connectivity</div>
<div className='m-4 p-4 focus-in-contract sans-serif'>Where Precision Meets Performance</div>

</div>

<div className='grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-3 text-center p-3 h-screen'> 

<div className='bg-white p-8 m-1 bg-slate-200 rounded-lg shadow-lg h-full md:h-1/2 '> TEST 1</div>

<div className='bg-white p-8 m-1 bg-slate-100 rounded-lg shadow-lg h-full md:h-1/2'> TEST 1</div>

<div className='bg-white p-8 m-1 bg-slate-200 rounded-lg shadow-lg h-full md:h-1/2'> TEST 1</div>

</div>


    </div>
  )
}
