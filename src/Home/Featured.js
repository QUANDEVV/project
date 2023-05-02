import React, { useEffect, useState } from 'react';

const Featured = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/Featured')
      .then(response => response.json())
      .then(data => setMovies(data)); // set the movies state to the Featured array
  }, []);

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-3xl font-bold mb-5">Featured For You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {movies.map(movie => ( // map through the movies state instead of Featured
          <div key={movie.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover" />
            <div className="px-4 py-2">
              <h3 className="text-lg font-bold mb-2">{movie.title}</h3>
              <p className="text-gray-700 text-base">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
