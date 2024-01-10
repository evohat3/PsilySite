import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../styles/Theme';
import '../styles/font.css'

const darkIcon = 

`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path 
fill="white"
stroke-linecap="round" 
stroke-linejoin="round" 
stroke-width="2" 
d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="#10b981" viewBox="0 0 24 24" stroke="#10b981">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`

export default function Switch() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
      <button onClick={toggleTheme} className={`w-10 h-5 rounded-full flex items-center transition duration-300 focus:outline-none shadow ${isDarkMode ? 'bg-slate-500 drop-shadow-[0_2px_2px_rgba(255,255,255,1)]' : 'bg-slate-800 drop-shadow-[0_2px_2px_#000000]'}`}>
          <div className={`w-6 h-6 relative rounded-full transition duration-500 transform ${isDarkMode ? 'bg-gray-700 translate-x-full' : 'bg-white -translate-x-2'} p-1 text-white`}>
              {isDarkMode ? <span dangerouslySetInnerHTML={{__html: darkIcon}} /> : <span dangerouslySetInnerHTML={{__html: lightIcon}} />}
          </div>
      </button>
  );
}