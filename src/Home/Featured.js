import React, { useEffect, useState } from 'react';

const Featured = () => {
  const [movies, setMovies] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    fetch('http://localhost:8002/Featured')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  const handleHover = index => {
    setHoverIndex(index);
  };

  const handleLeave = () => {
    setHoverIndex(-1);
  };

  return (
    <div className="container mx-auto my-5 mt-20">
      <h2 className="text-3xl font-bold mb-5">Featured</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`bg-black rounded-lg shadow-lg overflow-hidden ${
              index === hoverIndex ? 'scale-110 transition duration-300 h-82' : 'h-51'
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
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
