import React from 'react'
import "animate.css";
import "../styles/font.css";

export default function Home() {
  return (
    <div className="">
      <div className="text-center p-4 bg-white textfont">
        <div className='animate__animated animate__backInRight'>Welcome To Precision Home Network!</div>
        
      </div>

<div className=' size-fit flex items-center justify-center w-full '>

      <div className="text-zinc-200 text-center sm:text-sm md:text-md lg:text-2xl xl:text-3xl 2xl:text-4xl m-20 drop-shadow-[0_35px_35px_rgba(0,0,0,1)]">
        <div className="m-4 p-4 focus-in-contract sans-serif">
          Redefining Home Connectivity
        </div>
        <div className="m-4 p-4 focus-in-contract sans-serif">
          Where Precision Meets Performance
        </div>
      </div>

</div>

      <div className="grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-3 text-center p-3 ">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">
     <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
     <a href="Services" className="block mt-1 text-lg leading-tight font-medium text-black hover:bg-slate-300">Pc Repair</a>
     <p className="mt-2 text-gray-500">Experience reliable and hassle-free PC repair and setup services. Our skilled technicians expertly handle software issues, enhance your computer's performance, and upgrade hardware and storage. We also provide thorough virus removal and protection, ensuring your PC operates efficiently and remains secure.</p>
   </div>
 </div>
</div>

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">
     <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
     <a href="About" className="block mt-1 text-lg leading-tight font-medium text-black hover:bg-slate-300">Home Netorking</a>
     <p className="mt-2 text-gray-500">Specializing in in-home WiFi and network services, we offer full-scale installation, configuration, repair, and ongoing maintenance. Our team is dedicated to efficient troubleshooting and network optimization. With our expertise, enjoy a seamlessly connected home environment with the fastest and most reliable internet speeds available.</p>
   </div>
 </div>
</div>

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">
     <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"></div>
     <a href="Contact" className="block mt-1 text-lg leading-tight font-medium text-black hover:bg-slate-300">IoT</a>
	   <p className="mt-2 text-gray-500">Upgrade to a Smart Home and enjoy the simplicity of controlling your lights, thermostat, and more, all from your smartphone or with just your voice. We specialize in setting up and securing your IoT devices, making your home not only smarter but also safer.</p>
   </div>
 </div>
</div>


      </div>
    </div>
  );
}
