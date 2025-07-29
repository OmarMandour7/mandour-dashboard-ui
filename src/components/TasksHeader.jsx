import React from 'react';
import { SearchNormal, Filter } from 'iconsax-react';

export default function TasksHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mt-5">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800">Explore Task</h2>

      {/* Search + Filter (responsive row) */}
      <div className="flex flex-1 items-stretch gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search Task"
            className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <SearchNormal className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* Filter */}
        <button className="bg-white border border-gray-300 p-2 rounded-lg hover:bg-gray-100 transition">
          <Filter size="18" className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}
