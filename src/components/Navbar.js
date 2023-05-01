import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 'bg-zinc-900 bg-opacity-90' : ''}`}>
      <img src='/logo.png' className="h-4 lg:h-7" />
<div className="flex-row ml-8 gap-7 hidden lg:flex">
  <NavbarItem label='Home' />

</div>
      </div>
      </div>
  )
}

export default Navbar