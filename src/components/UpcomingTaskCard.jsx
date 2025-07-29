import React from 'react';

export default function UpcomingTaskCard({ image, title, role, progress, daysLeft, avatars }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover rounded-lg mb-4"
      />
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500 mb-2">{role}</p>

      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-gray-500">Progress</span>
        <span className="text-indigo-600 font-medium">{progress}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-3">
        <div
          className="h-full bg-indigo-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{daysLeft} Days Left</span>
        <div className="flex -space-x-2">
          {avatars.map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-6 h-6 rounded-full border-2 border-white"
              alt="avatar"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
