import React, { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };
    return (
        <div className="search-bar">
      <input className='px-2 py-2 focus:outline-none text-black rounded-l-xl'
        type="text"
        placeholder="Search here...."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='bg-[#FF444A] rounded-r-2xl text-white px-4 py-2' onClick={handleSearch}>Search</button>
    </div>
    );
};

export default SearchBar;