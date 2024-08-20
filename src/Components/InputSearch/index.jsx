import React from 'react';

const InputSearch = () => {
  return (
    <div className="px-3 lg:px-0 flex flex-col gap-5 my-10">
      <div className=" text-center">
        {/* <p className=" inline-block bg-gradient-to-br from-quaternary to-tertiary bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          My Notes
        </p> */}
      </div>
      <p className="text-3xl md:text-4xl text-primary font-bold italic text-center underline">
        My Notes
      </p>
      <div>
        <div className="relative flex rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Search note..."
            id="search"
            name="search"
            className="py-3 px-4 ps-11 block w-full border shadow-sm rounded-lg text-sm focus:outline-none focus:ring-0"
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
      </div>
    </div>
  );
};

export default InputSearch;
