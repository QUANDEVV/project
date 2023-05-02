import React from 'react';

function Enter(){


    function handleClick() {
        window.location.href = "https://example.com";
      }


    return(
        <div className='flex items-center h-full justify-center'>
            <div className='flex flex-col'>
            <h1 className='text-3xl md:text-6xl text-white text-center'> Who is watching?</h1>
                <div className='flex items-center justify-center gap-8 mt-10'>
                <div >
                    <div className='group flex-row w-44 mx-auto'>
                        <div className='w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden'>
        <img src='logo5.jpeg' alt='logozz' onClick={handleClick} />
        <img src='logo2.png' alt='logozz' onClick={handleClick} />
        <img src='logo3.png' alt='logozz' onClick={handleClick} />
        <img src='logo4.pjpeg' alt='logozz' onClick={handleClick} />
        <img src='logo6.jpeg' alt='logozz' onClick={handleClick} />
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        
        
    )
}

export default Enter;