import React from 'react'
import NavbarItem from './NavbarItem'
import { useEffect ,  useState } from 'react';
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { AccountMenu } from './AccountMenu';



const Navbar = ( ) => {

  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    
    <div className="w-full fixed z-40 bg-black bg-white dark:bg-black ">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 'bg-zinc-900 bg-opacity-90' : ''}`}>
      <img src='/logo.png' alt='' className="h-4 lg:h-7" />
     
      <div className="flex-row ml-8 gap-7 lg:flex md:flex-row ">
      <NavbarItem label="Home" link="/" />
<NavbarItem label="Series" link="/series" />
<NavbarItem label="Films" link="/films" />
<NavbarItem label="New & Popular" link="/new" />
<NavbarItem label="My List" link="/list" />
<NavbarItem label="Browse by languages" link="/browse" />
        </div>


 
        <div  className="flex flex-row ml-auto gap-7 items-center">
        
        <button className="bg-green-200 gap-7 p-2 rounded-3xl" onClick={handleThemeSwitch}>
        Dark Mode
      </button>
      <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <MagnifyingGlassIcon className="w-6 dark:text-white text-black" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BellIcon className="w-6 dark:text-white text-black" />
          </div>
          <div  className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src='/logo5.jpeg' alt="" />
            </div>
            <ChevronDownIcon className={`w-4 text-black fill-white transition  'rotate-180' : 'rotate-0'}`} />
          
          </div>
        </div>

      </div>




      </div>
      

 
  )
}

export default Navbar