import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setUsername('');
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search GitHub User"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
