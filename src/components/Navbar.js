import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 'bg-zinc-900 bg-opacity-90' : ''}`}>
      <img src='/logo.png' className="h-4 lg:h-7" />
     
      <div className="flex-row ml-8 gap-7 lg:flex md:flex-row">
      <NavbarItem label="Home" active link="/" />
<NavbarItem label="Series" link="/series" />
<NavbarItem label="Films" link="/films" />
<NavbarItem label="New & Popular" link="/new" />
<NavbarItem label="My List" link="/list" />
<NavbarItem label="Browse by languages" link="/browse" />

        </div>
      </div>
      </div>
  )
}

export default Navbar