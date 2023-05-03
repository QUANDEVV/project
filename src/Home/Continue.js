import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const Continue = () => {
  const [movies, setMovies] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const handleHover = index => {
    setHoverIndex(index);
  };

  const handleLeave = () => {
    setHoverIndex(-1);
  };

  const handleAddToWatchList = movie => {
    setWatchList(prevList => [...prevList, movie]);
  };

  const handleRemoveFromWatchList = id => {
    setWatchList(prevList => prevList.filter(movie => movie.id !== id));
  };

  return (
    <div className=" container mx-auto my-5 mt-10">
      <h2 className="text-3xl font-bold mb-5">Continue Watching For group 6</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`bg-black rounded-lg shadow-lg overflow-hidden ${
              index === hoverIndex ? 'scale-110 transition duration-300 h-70' : 'h-70'
            }`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover" />
            {index === hoverIndex && (
              <div className="px-4 py-2">
                <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
                <p className="text-gray-700 text-base">{movie.description}</p>
                <button onClick={() => handleAddToWatchList(movie)}>Add to Watch List</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold mb-5">My Watch List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20">
        {watchList.map(movie => (
          <div
            key={movie.id}
            className="bg-black rounded-lg shadow-lg overflow-hidden h-70"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover" />
            <div className="px-4 py-2">
              <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
              <p className="text-gray-700 text-base">{movie.description}</p>
              <button onClick={() => handleRemoveFromWatchList(movie.id)}>Remove from Watch List</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Continue;
