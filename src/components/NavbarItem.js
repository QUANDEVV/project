// import React from 'react';

// interface  {
//   label: string;
//   active?: boolean;
// }

// const NavbarItem:  = ({ label, active }) => {
//   return (
//     <div className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
//       {label}
//     </div>
//   )
// }

// export default NavbarItem;


import React from 'react'

const NavbarItem = ({ label }) => {

  console.log(label)
  return (
    <a href="/" style={{ color: 'white' }}>{label}</a>
  )
}

export default NavbarItem
