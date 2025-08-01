import React from 'react';
import {
  Home2,
  Book,
  People,
  Message,
  Setting2,
  MessageQuestion
} from 'iconsax-react';
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <aside className={`
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      fixed lg:static top-0 left-0 z-40 w-64 min-h-screen bg-white border-r
      transform transition-transform duration-300 ease-in-out
      lg:translate-x-0 lg:flex lg:flex-col 
    `}>
     
      <div>
        {/* Logo */}
        <div className="flex items-center justify-between gap-2 px-6 py-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Book size="20" color="#7064F5" variant="Bold" />
          </div>
          <span className="text-lg font-semibold">Omar Mandour</span>
           <div className="flex justify-end p-4 lg:hidden">
  <button onClick={() => setIsOpen(false)} className="text-xl text-gray-500 hover:text-gray-800">
    &times;
  </button>
</div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 px-6 text-gray-600">
          <Link to="/" className="flex items-center gap-3 font-semibold text-indigo-600 duration-200 hover:translate-x-10">
            <Home2 size="20" color="#7064F5" variant="Bold" />
            Overview
          </Link>
          <Link to="/task" className="flex items-center gap-3 duration-200 hover:text-indigo-600 hover:translate-x-10">
            <Book size="20" color="#7064F5" variant="Outline" />
            Task
          </Link>
          <Link to="/mentors" className="flex items-center gap-3 duration-200 hover:text-indigo-600 hover:translate-x-10">
            <People size="20" color="#7064F5" variant="Outline" />
            Mentors
          </Link>
          <Link to="/message" className="flex items-center gap-3 duration-200 hover:text-indigo-600 hover:translate-x-10">
            <Message size="20" color="#7064F5" variant="Outline" />
            Message
          </Link>
          <Link to="/settings" className="flex items-center gap-3 duration-200 hover:text-indigo-600 hover:translate-x-10">
            <Setting2 size="20" color="#7064F5" variant="Outline" />
            Settings
          </Link>
        </nav>
      </div>

      {/* Help Center Box */}
      <div className="relative p-4 m-3 mt-64 text-white bg-gray-900 rounded-xl">
        <div className="absolute p-2 transform -translate-x-1/2 bg-white rounded-full shadow -top-4 left-1/2">
          <MessageQuestion size="20" color="#111" variant="Outline" />
        </div>
        <h3 className="mt-6 mb-2 text-sm font-semibold text-center">Help Center</h3>
        <p className="mb-3 text-xs text-center opacity-75">
          Having Trouble in Learning? Please contact us for more questions.
        </p>
        <button className="block w-full py-1 text-sm font-medium text-gray-900 transition bg-white rounded hover:bg-gray-200">
          Go To Help Center
        </button>
      </div>
    </aside>
  );
}
