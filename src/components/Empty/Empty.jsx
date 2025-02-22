import React from 'react';

import { Link } from 'react-router-dom';

const Empty = ({message, address, label}) => {
    return (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-116px)]'>
            <h1 className='mb-5 text-3xl font-bold text-dark '>{message}</h1>
            <Link
            to={address}
            className="relative inline-block px-4 py-2 font-medium font-bold group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-secondary"></span>
            <span className="relative text-black group-hover:text-white">
              {label}
            </span>
          </Link>
        </div>
    );
};

export default Empty;