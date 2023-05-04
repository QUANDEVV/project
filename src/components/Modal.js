import { XCircleIcon } from '@heroicons/react/24/outline';
import ReactPlayer from 'react-player';
import React, { useEffect, useState } from 'react';

const Modal = ({ closeModal }) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/Scifi')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center text-black dark:text-white ">
      <div className="bg-white dark:bg-black p-6 rounded-lg relative text-black dark:text-white w-[50vw] h-[30vw]">
        <button
          className="absolute top-0 right-0 m-4 focus:outline-none"
          onClick={closeModal}
        >
          <XCircleIcon className="w-8 h-8 text-black hover:text-gray-900  text-black dark:text-white" />
        </button>
        <h2 className="text-xl font-semibold mb-2">Movie Title</h2>
        <div>
        <video
        className="w-full h-[16.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src="./vid.mp4"
      ></video>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-black rounded-lg shadow-lg overflow-hidden">
            <ReactPlayer
              url={movie.url}
              className="w-full h-full object-cover object-center"
              controls
              light={movie.poster} // use the movie poster as a preview image
              width="100%"
              height="100%"
            />
            <div className="px-4 py-2">
              <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
              <p className="text-gray-700 text-base">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
     
       
      </div>
    </div>
  );
};

export default Modal;