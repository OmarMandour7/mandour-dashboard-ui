import React from 'react';

export default function TaskCard({ image, title, role, progress, timeLabel, avatars }) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl shadow-sm w-full">
      {/* صورة المهمة */}
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover rounded-lg mb-4"
      />

      {/* عنوان المهمة وتخصصها */}
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="text-xs text-gray-500 mb-2">{role}</p>

      {/* Progress Bar */}
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

      {/* الوقت + الأشخاص */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>{timeLabel}</span>
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
