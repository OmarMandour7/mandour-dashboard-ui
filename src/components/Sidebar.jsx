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
        <div className="flex items-center gap-2 px-6 py-6 justify-between">
          <div className="bg-indigo-100 p-2 rounded-lg">
            <Book size="20" color="#7064F5" variant="Bold" />
          </div>
          <span className="font-semibold text-lg">Omar Mandour</span>
           <div className="lg:hidden flex justify-end p-4">
  <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800 text-xl">
    &times;
  </button>
</div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 px-6 text-gray-600">
          <Link to="/" className="flex items-center gap-3 text-indigo-600 font-semibold">
            <Home2 size="20" color="#7064F5" variant="Bold" />
            Overview
          </Link>
          <Link to="/task" className="flex items-center gap-3 hover:text-indigo-600">
            <Book size="20" color="#7064F5" variant="Outline" />
            Task
          </Link>
          <Link to="/mentors" className="flex items-center gap-3 hover:text-indigo-600">
            <People size="20" color="#7064F5" variant="Outline" />
            Mentors
          </Link>
          <Link to="/message" className="flex items-center gap-3 hover:text-indigo-600">
            <Message size="20" color="#7064F5" variant="Outline" />
            Message
          </Link>
          <Link to="/settings" className="flex items-center gap-3 hover:text-indigo-600">
            <Setting2 size="20" color="#7064F5" variant="Outline" />
            Settings
          </Link>
        </nav>
      </div>

      {/* Help Center Box */}
      <div className="bg-gray-900 text-white m-3 p-4 rounded-xl relative mt-64">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow">
          <MessageQuestion size="20" color="#111" variant="Outline" />
        </div>
        <h3 className="text-sm font-semibold mt-6 mb-2 text-center">Help Center</h3>
        <p className="text-xs text-center mb-3 opacity-75">
          Having Trouble in Learning? Please contact us for more questions.
        </p>
        <button className="block w-full text-sm bg-white text-gray-900 font-medium py-1 rounded hover:bg-gray-200 transition">
          Go To Help Center
        </button>
      </div>
    </aside>
  );
}
