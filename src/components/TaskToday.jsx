import React from 'react';
import img3 from '../images/img3.png'; // Assuming img3 is the image you want to use
export default function TaskToday() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">Task Today</h2>

      {/* Task Image */}
      <img
        src={img3}
        alt="Task"
        className="w-full h-28 object-cover rounded-xl mb-4"
      />

      {/* Task Info */}
      <h3 className="text-sm font-semibold text-gray-800">Creating Awesome Mobile Apps</h3>
      <p className="text-xs text-gray-500 mb-2">UI/UX Designer</p>

      {/* Progress Bar */}
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-gray-500">Progress</span>
        <span className="text-indigo-600 font-medium">90%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
        <div
          className="h-full bg-indigo-500 rounded-full"
          style={{ width: `90%` }}
        ></div>
      </div>

      {/* Time + Avatars */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>1 Hour</span>
        <div className="flex -space-x-2">
          {['11', '12', '13'].map((n) => (
            <img
              key={n}
              src={`https://i.pravatar.cc/150?img=${n}`}
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="avatar"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
