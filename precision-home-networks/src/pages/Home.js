import React, {useContext} from 'react'
import "animate.css";
import "../styles/font.css";
import { ThemeContext } from '../styles/Theme';
import Contact from './Contact'


export default function Home() {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className="">
      <div className={`text-center p-4 textfont ${isDarkMode ? 'bg-black text-white' : 'bg-gray-300'}`}>
        <div className='animate__animated animate__backInRight'>Welcome To Precision Home Network!</div>
        
      </div>

<div className=' size-fit flex items-center justify-center w-full '>

      <div className="text-zinc-200 text-center text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl m-20 drop-shadow-[0_35px_35px_rgba(0,0,0,1)] p-4">
        <div className="m-4 p-4 focus-in-contract sans-serif ">
          REDEFINING HOME CONNECTIVITY
        </div>
        <div className="m-4 p-4 focus-in-contract sans-serif">
          WHERE PRECISION MEETS PERFORMANCE
        </div>
      </div>

</div>

    <div className={`grid grid-cols-1 gap-1 sm:grid-cols-1 md:grid-cols-3 text-center p-3 backdrop-opacity-10 backdrop-invert ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
{/* CARD 1 */}
      <div className={`max-w-md mx-auto rounded-xl shadow-md border-4 border-slate-600 overflow-hidden md:max-w-2xl ${isDarkMode ? 'bg-black text-white' : 'bg-white'}`}>
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">
   <div className='flex justify-center items-center'>
     <img className="size-1/3" src='https://i.imgur.com/X9VMHXy.png' alt='Computer Repair'/>
     </div>

     <a href="Services" className={`block mt-1 text-lg leading-tight font-medium hover:bg-slate-300 hover:text-black `}>Pc Repair</a>

     <p className="mt-2 ">Experience reliable and hassle-free PC repair and setup services. Our skilled technicians expertly handle software issues, enhance your computer's performance, and upgrade hardware and storage. We also provide thorough virus removal and protection, ensuring your PC operates efficiently and remains secure.</p>
   </div>
 </div>
</div>

{/* CARD 2 */}

<div className={`max-w-md mx-auto rounded-xl shadow-md border-4 border-slate-600  overflow-hidden md:max-w-2xl ${isDarkMode ? 'bg-black text-white' : 'bg-white'}`}>
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">


     <div className='flex justify-center items-center'>
     <img className="size-1/3" src='https://i.imgur.com/v43zUvf.png' alt='Home Networking'/>
</div>

     <a href="About" className={`block mt-1 text-lg leading-tight font-medium hover:bg-slate-300 hover:text-black ${isDarkMode ? 'text-white' : 'text-black'}`}>Home Networking</a>
    


     <p className="mt-2">Specializing in in-home WiFi and network services, we offer full-scale installation, configuration, repair, and ongoing maintenance. Our team is dedicated to efficient troubleshooting and network optimization. With our expertise, enjoy a seamlessly connected home environment with the fastest and most reliable internet speeds available.</p>
   </div>
 </div>
</div>

{/* Card 3 */}

<div className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border-4 border-slate-600  ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">


     <div className='flex justify-center items-center'>
     <img className="size-1/3" src='https://i.imgur.com/tzCmlMt.png' alt='IOT'/>
     </div>

     <a href="Contact" className="block mt-1 text-lg leading-tight font-medium hover:bg-slate-300 hover:text-black">IoT</a>


     <p className="mt-2">Upgrade to a Smart Home and enjoy the simplicity of controlling your lights, thermostat, and more, all from your smartphone or with just your voice. We specialize in setting up and securing your IoT devices, making your home not only smarter but also safer.</p>
   </div>
 </div>
</div>

{/* ********* */}

      </div>


<div className={`p-4 ${isDarkMode ? 'bg-black' : 'bg-slate-300'}`}>
      <Contact />
      </div>

      

    </div>
  );
}
