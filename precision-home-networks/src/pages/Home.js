import React, {useContext}from 'react'
import "animate.css";
import "../styles/font.css";
import { ThemeContext } from '../styles/Theme';


export default function Home() {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className="">
      <div className={`text-center p-4 textfont ${isDarkMode ? 'bg-black text-white' : 'bg-gray-300'}`}>
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
{/* CARD 1 */}
      <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl ${isDarkMode ? 'bg-black text-white' : 'bg-white'}`}>
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">
   <div className='flex justify-center items-center'>
     <img className="size-1/3" src='https://i.imgur.com/X9VMHXy.png' alt='Computer Repair'/>
     </div>

     <a href="Services" className={`block mt-1 text-lg leading-tight font-medium hover:bg-slate-300 hover:text-black `}>Computer Repair</a>

     <p className="mt-2 ">Description of the card contentDescription of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.</p>
   </div>
 </div>
</div>

{/* CARD 2 */}

<div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl ${isDarkMode ? 'bg-black text-white' : 'bg-white'}`}>
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">


     <div className='flex justify-center items-center'>
     <img className="size-1/3" src='https://i.imgur.com/v43zUvf.png' alt='Home Networking'/>
</div>

     <a href="About" className={`block mt-1 text-lg leading-tight font-medium hover:bg-slate-300 hover:text-black ${isDarkMode ? 'text-white' : 'text-black'}`}>Home Networking</a>
    


     <p className="mt-2">Description of the card content. Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.</p>
   </div>
 </div>
</div>

{/* Card 3 */}

<div className={`max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
 <div className="md:flex">
   <div className="md:flex-shrink-0">
   </div>
   <div className="p-8">


     <div className='flex justify-center items-center'>
     <img className="size-1/3" src='https://i.imgur.com/tzCmlMt.png' alt='IOT'/>
     </div>

     <a href="Contact" className="block mt-1 text-lg leading-tight font-medium hover:bg-slate-300 hover:text-black">IOT</a>


     <p className="mt-2">Description of the card contentDescription of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.Description of the card content.</p>
   </div>
 </div>
</div>

{/* ********* */}


      </div>
    </div>
  );
}
