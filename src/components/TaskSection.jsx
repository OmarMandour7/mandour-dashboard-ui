import React from 'react';
import TaskCard from './Taskscard';


export default function TaskSection({ title, tasks }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-700">{title}</h2>
        <button className="text-4xl text-indigo-500 font-medium">‹›</button>
         
      </div>

      {/* Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </div>
    </div>
  );
}
