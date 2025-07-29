import React, { useState } from 'react';
import GeneralSettingsForm from '../components/GeneralSettingsForm';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="p-6 space-y-6">
      {/* العنوان */}
      <h2 className="text-xl font-semibold text-gray-800">Settings</h2>

      {/* التابز */}
      <div className="border-b">
        <nav className="flex gap-6">
          <button
            onClick={() => setActiveTab('general')}
            className={`pb-2 border-b-2 text-sm font-medium transition ${
              activeTab === 'general'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            General
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`pb-2 border-b-2 text-sm font-medium transition ${
              activeTab === 'notifications'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Notification
          </button>
        </nav>
      </div>

      {/* المحتوى المتغير */}
      <div>
        {activeTab === 'general' && <GeneralSettingsForm />}
        {activeTab === 'notifications' && <div className="text-sm text-gray-500">Notifications settings coming soon...</div>}
      </div>
    </div>
  );
}
