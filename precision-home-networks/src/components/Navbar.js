import React, { useState } from "react"
import Switch from './Switch'
import { useContext } from 'react';
import { ThemeContext } from '../styles/Theme';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useContext(ThemeContext);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div>
      <nav className={`${isDarkMode ? 'bg-slate-800 text-white' : 'bg-slate-400'}`}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                onClick={toggleMenu}
                type="button"
                className={`relative inline-flex items-center justify-center rounded-md p-2 ocus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${isDarkMode ? 'bg-black border-2 border-white' : 'bg-slate-200 border-2 border-black'}`}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#10b981"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}

              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 mr-10 w-auto rounded-full text-white"
                  src="https://i.imgur.com/CdhPmuH.png"
                  alt="Your Company Logo Here"
                />
                <Switch />
                
              </div>

              <div className={`sm:ml-6 sm:block hidden`}>
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium "
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="Services"
                    className=" hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="About"
                    className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="ContactPage"
                    className="hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className={`${
            isMenuOpen ? "" : "hidden"
          } sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden`}
          id="mobile-menu"
        >
          <div className={`space-y-1 px-2 pb-3 pt-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="/"
              className={` block rounded-md px-3 py-2 text-base font-medium `}
              aria-current="page"
            >
              Home
            </a>
            <a
              href="Services"
              className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Services
            </a>
            <a
              href="About"
              className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="Contact"
              className=" hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
