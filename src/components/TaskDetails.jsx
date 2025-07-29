import React from 'react';

const steps = [
  'Understanding the tools in Figma',
  'Understand the basics of making designs',
  'Design a mobile application with Figma',
];

export default function TaskDetail() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md ">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">Detail Task</h2>

      <div className="flex flex-col gap-3 text-sm text-gray-700 mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className="bg-indigo-100 text-indigo-600 font-medium px-2 py-0.5 rounded-md text-xs">
              {index + 1}
            </span>
            <p>{step}</p>
          </div>
        ))}
      </div>

      <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium py-2 rounded-lg transition">
        Go To Detail
      </button>
    </div>
  );
}
