import React from 'react';
import UpcomingTaskCard from './UpcomingTaskCard';
import img1 from '../images/image.png';
import img2 from '../images/img2.png';

const tasks = [
  {
    image: img1,
    title: 'Creating Mobile App Design',
    role: 'UI/UX Design',
    progress: 75,
    daysLeft: 3,
    avatars: [
      'https://i.pravatar.cc/150?img=11',
      'https://i.pravatar.cc/150?img=12',
      'https://i.pravatar.cc/150?img=13',
    ],
  },
  {
    image: img2,
    title: 'Creating Perfect Website',
    role: 'Web Developer',
    progress: 85,
    daysLeft: 4,
    avatars: [
      'https://i.pravatar.cc/150?img=14',
      'https://i.pravatar.cc/150?img=15',
    ],
  },
];

export default function UpcomingTasksSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md my-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-700">Upcoming Task</h2>
        <button className="text-xs text-indigo-500 font-medium">›</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tasks.map((task, i) => (
          <UpcomingTaskCard key={i} {...task} />
        ))}
      </div>
    </div>
  );
}
