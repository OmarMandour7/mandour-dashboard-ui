import React from 'react';
import SidebarChatList from '../components/SidebarChatList';
import ChatWindow from '../components/ChatWindow';
import PageTransition from "../components/PageTransition";

export default function Messages() {
  return (
     <PageTransition> <div className="flex h-screen bg-gray-50">
      {/* Sidebar: فقط يظهر في الشاشات الكبيرة */}
      <div className=" w-80">
        <SidebarChatList />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 hidden md:block">
        <ChatWindow />
      </div>
    </div></PageTransition>
   
  );
}
