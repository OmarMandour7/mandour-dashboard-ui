import React from 'react';
import MentorCard from './MentorCard';


export default function MentorsSection({ title, mentors }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-5">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {mentors.map((mentor, idx) => (
          <MentorCard key={idx} {...mentor} />
        ))}
      </div>
    </div>
  );
}
