import React, { useState } from 'react';

export default function GeneralSettingsForm() {
  const [language, setLanguage] = useState('english');
  const [timezone, setTimezone] = useState('utc');
  const [timeFormat, setTimeFormat] = useState('24');

  return (
    <form className="bg-white p-6 rounded-xl shadow-md space-y-6 max-w-xl">
      {/* Language */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="english">English (Default)</option>
          <option value="arabic">Arabic</option>
          <option value="french">French</option>
        </select>
      </div>

      {/* Timezone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
        <select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="utc">UTC (Default)</option>
          <option value="cairo">Africa/Cairo</option>
          <option value="riyadh">Asia/Riyadh</option>
        </select>
      </div>

      {/* Time Format */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Time Format</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="timeFormat"
              value="24"
              checked={timeFormat === '24'}
              onChange={(e) => setTimeFormat(e.target.value)}
              className="accent-indigo-500"
            />
            <span className="text-sm text-gray-700">24 Hours</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="timeFormat"
              value="12"
              checked={timeFormat === '12'}
              onChange={(e) => setTimeFormat(e.target.value)}
              className="accent-indigo-500"
            />
            <span className="text-sm text-gray-700">12 Hours</span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm"
      >
        Save Changes
      </button>
    </form>
  );
}
