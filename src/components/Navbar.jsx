import React from 'react';
import { Menu } from 'iconsax-react';




export default function Navbar({toggleSidebar}) {
  return (
    
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-3">
        <button className="lg:hidden" onClick={toggleSidebar}>
          <Menu size="24" className="text-gray-700" />
        </button>
        </div>
      {/* Welcome Message */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Hi,Omar Mandour </h1>
        <p className="text-sm text-gray-500">Let’s finish your task today!</p>
      </div>


      {/* Avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
        <img
          src="https://i.pravatar.cc/300?img=32"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}
