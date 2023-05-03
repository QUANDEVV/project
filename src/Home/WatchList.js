import React from 'react';

const WatchList = ({ watchList, onRemove }) => {
  return (
    <div className="container mx-auto my-5 mt-10">
      <h2 className="text-3xl font-bold mb-5">My Watch List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mb-20">
        {watchList.map(m => (
          <div key={m.id} className="bg-black rounded-lg shadow-lg overflow-hidden h-70" style={{ display: 'flex', flexDirection: 'column' }}>
            <img src={m.poster} alt={m.title} className="w-full h-48 object-cover" />
            <div className="px-4 py-2">
              <h3 className="text-lg font-bold mb-2">{m.title}</h3>
              <p className="text-gray-700 text-base">{m.description}</p>
              <button onClick={() => onRemove(m.id)}>Remove from Watch List</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
