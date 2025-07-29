import React from 'react';
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'S', tasks: 1 },
  { name: 'M', tasks: 3 },
  { name: 'T', tasks: 2 },
  { name: 'W', tasks: 4 },
  { name: 'T', tasks: 2 },
  { name: 'F', tasks: 5 },
  { name: 'S', tasks: 3 },
];

export default function ActivityChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-700">Activity</h2>
        <span className="text-xs text-gray-500">This Week</span>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#7064F5"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
