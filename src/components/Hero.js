import React from 'react';

const Hero = () => {
  return (
    <div className='relative h-[20]'>
      <video
        className='w-full h-[20] object-cover brightness-[60%] transition duration-500'
        autoPlay
        muted
        loop
        src='./vid.mp4'
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Hero;
