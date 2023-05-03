import React from 'react'
import Continue from './Continue'
import Featured from './Featured'
import Scifi from './Scifi'
import New from './New'
import Anime from './Anime'
import Action from './Action'
import Hero from '../components/Hero'
import Enter from '../pages/Enter'

const Home = () => {
  return (
    <div className='text-white '>


      <Hero />
      <Continue />
      <Featured />
      <Scifi />
      <New />
      <Anime />
      <Action />


    
    
    </div>
  )
}

export default Home