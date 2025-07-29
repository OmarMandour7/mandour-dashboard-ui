import React from 'react';
import SidebarChatList from '../components/SidebarChatList';
import ChatWindow from '../components/ChatWindow';

export default function Messages() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar: فقط يظهر في الشاشات الكبيرة */}
      <div className=" w-80">
        <SidebarChatList />
      </div>

      {/* Main Chat Area */}
      <div className=" hidden md:block flex-1">
        <ChatWindow />
      </div>
    </div>
  );
}
