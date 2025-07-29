import React from 'react';
import { Star, DocumentText } from 'iconsax-react';

export default function MentorCard({ img, name, role, tasks, rating, reviews }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full flex flex-col gap-3">
      {/* Top: Avatar + Info + Follow */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
        <button className="text-xs text-indigo-500 font-medium hover:underline">+ Follow</button>
      </div>

      {/* Bottom: Task & Rating */}
      <div className="flex justify-between text-sm text-gray-600 items-center">
        <div className="flex items-center gap-1">
          <DocumentText size="18" variant="Outline" className="text-indigo-500" />
          <span>{tasks} Task</span>
        </div>
        <div className="flex items-center gap-1">
          <Star size="18" variant="Bold" className="text-yellow-400" />
          <span>{rating} ({reviews} Reviews)</span>
        </div>
      </div>
    </div>
  );
}
