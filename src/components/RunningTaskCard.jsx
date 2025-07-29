import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function RunningTaskCard() {
  const value = 45;

  return (
    <div className="bg-[#1E1F4B] text-white rounded-xl p-6 flex sm:flex-row md:flex-col lg:flex-row items-center justify-evenly shadow-md w-full">
      {/* Left Section */}
      <div className="text-center md:text-left md:mb-0 mb-4">
        <h2 className="text-sm opacity-70 mb-1">Running Task</h2>
        <p className="text-3xl font-bold">65</p>
        <p className="text-sm mt-1 opacity-70">100 Task</p>
      </div>

      {/* Progress Circle */}
      <div className="w-16 h-16 mx-auto md:mx-0">
        <CircularProgressbar
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            textSize: '24px',
            textColor: '#fff',
            pathColor: '#7064F5',
            trailColor: '#2C2F5E',
          })}
        />
      </div>
    </div>
  );
}
