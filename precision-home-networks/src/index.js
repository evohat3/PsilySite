import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from './styles/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div className='bg-slate-200 h-screen overflow-auto' style={{
        backgroundImage: 'url("https://cdn.discordapp.com/attachments/777325953202257930/1193829670890774539/image3.png?ex=65ae2385&is=659bae85&hm=eb766ec4164e018e354f2a6d363e997c00a4183ff7f48696454ed1e69dce8e6a&")',
        backgroundSize: 'cover', // or 'contain', depending on your preference
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center',
      }}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        
    </div>
  

);

