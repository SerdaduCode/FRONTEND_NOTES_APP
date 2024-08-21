import React from 'react';

const InputSearch = (props) => {
  const { setSearch } = props;

  return (
    <div className="relative flex rounded-lg shadow-sm">
      <input
        type="text"
        placeholder="Search note..."
        id="search"
        name="search"
        className="py-3 px-4 ps-11 block w-full border shadow-sm rounded-lg text-sm focus:outline-none focus:ring-0"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
        <svg
          className="shrink-0 size-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      </div>
    </div>
  );
};

export default InputSearch;
