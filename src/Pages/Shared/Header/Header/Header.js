import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link  rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2  text-2xl font-extrabold dark:text-gray-50">
        <img alt="" className="w-12 h-12 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://previews.123rf.com/images/butenkow/butenkow1701/butenkow170102106/70227809-wedding-photographer-vector-illustration-of-icon.jpg" />Wedding Photographer
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" to="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Link</Link>
          </li>
          <li className="flex">
            <Link rel="noopener noreferrer" to="/blog" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Blog</Link>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link to="/login"><button className="self-center px-8 py-3 rounded">Login</button></Link>
          <Link to="/"><button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sign up</button></Link>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
        
    );
};

export default Header;