import React from 'react';
import { ArrowLeft, ArrowRight } from 'iconsax-react';

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dates = [7, 8, 9, 10, 11, 12, 13, 14];

export default function CalendarSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <button>
          <ArrowLeft size="16" color="#777" />
        </button>
        <h3 className="text-sm font-semibold text-gray-700">July 2024</h3>
        <button>
          <ArrowRight size="16" color="#777" />
        </button>
      </div>

      <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
        {days.map((d, i) => (
          <div key={i} className="text-center">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-sm">
        {dates.map((d, i) => (
          <div
            key={i}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              d === 10 ? 'bg-indigo-500 text-white font-semibold' : 'text-gray-600'
            }`}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}
