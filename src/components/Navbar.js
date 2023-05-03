import React from 'react'
import NavbarItem from './NavbarItem'
import { useEffect ,  useState } from 'react';

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
      <NavbarItem label="Home" active link="/" />
<NavbarItem label="Series" link="/series" />
<NavbarItem label="Films" link="/films" />
<NavbarItem label="New & Popular" link="/new" />
<NavbarItem label="My List" link="/list" />
<NavbarItem label="Browse by languages" link="/browse" />


<button className="bg-green-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
        Dark Mode
      </button>

        </div>
      </div>
      

      </div>
  )
}

export default Navbar