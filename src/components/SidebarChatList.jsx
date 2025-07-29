import React from 'react';
import { SearchNormal1, TickCircle } from 'iconsax-react';

const chats = [
  {
    id: 1,
    name: 'Angela Crison',
    avatar: 'https://i.pravatar.cc/150?img=20',
    lastMessage: 'Thank you so much! I’m glad...',
    time: '1m ago',
    unread: false,
    isOnline: true,
  },
  {
    id: 2,
    name: 'Jakob Saris',
    avatar: 'https://i.pravatar.cc/150?img=25',
    lastMessage: 'Sure! Let me tell you about...',
    time: '2m ago',
    unread: true,
    isOnline: false,
  },
  {
    id: 3,
    name: 'Laila Shawky',
    avatar: 'https://i.pravatar.cc/150?img=33',
    lastMessage: 'Do you want to send it now?',
    time: '3m ago',
    unread: true,
    isOnline: true,
  },
  {
    id: 4,
    name: 'Hussein M.',
    avatar: 'https://i.pravatar.cc/150?img=39',
    lastMessage: 'We can schedule it later.',
    time: '5m ago',
    unread: false,
    isOnline: false,
  },
  {
    id: 5,
    name: 'Fatima Rami',
    avatar: 'https://i.pravatar.cc/150?img=42',
    lastMessage: 'Thanks 🙏',
    time: '6m ago',
    unread: false,
    isOnline: true,
  },
  {
    id: 6,
    name: 'Ali Gabr',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Sent you the PDF just now.',
    time: '7m ago',
    unread: true,
    isOnline: true,
  },
  {
    id: 7,
    name: 'Maryam Said',
    avatar: 'https://i.pravatar.cc/150?img=49',
    lastMessage: 'See you tomorrow!',
    time: '10m ago',
    unread: false,
    isOnline: false,
  },
    {
    id: 1,
    name: 'Angela Crison',
    avatar: 'https://i.pravatar.cc/150?img=20',
    lastMessage: 'Thank you so much! I’m glad...',
    time: '1m ago',
    unread: false,
    isOnline: true,
  },
  {
    id: 2,
    name: 'Jakob Saris',
    avatar: 'https://i.pravatar.cc/150?img=25',
    lastMessage: 'Sure! Let me tell you about...',
    time: '2m ago',
    unread: true,
    isOnline: false,
  },
  {
    id: 3,
    name: 'Laila Shawky',
    avatar: 'https://i.pravatar.cc/150?img=33',
    lastMessage: 'Do you want to send it now?',
    time: '3m ago',
    unread: true,
    isOnline: true,
  },
  {
    id: 4,
    name: 'Hussein M.',
    avatar: 'https://i.pravatar.cc/150?img=39',
    lastMessage: 'We can schedule it later.',
    time: '5m ago',
    unread: false,
    isOnline: false,
  },
  {
    id: 5,
    name: 'Fatima Rami',
    avatar: 'https://i.pravatar.cc/150?img=42',
    lastMessage: 'Thanks 🙏',
    time: '6m ago',
    unread: false,
    isOnline: true,
  },
  {
    id: 6,
    name: 'Ali Gabr',
    avatar: 'https://i.pravatar.cc/150?img=47',
    lastMessage: 'Sent you the PDF just now.',
    time: '7m ago',
    unread: true,
    isOnline: true,
  },
  {
    id: 7,
    name: 'Maryam Said',
    avatar: 'https://i.pravatar.cc/150?img=49',
    lastMessage: 'See you tomorrow!',
    time: '10m ago',
    unread: false,
    isOnline: false,
  },
];


export default function SidebarChatList() {
  return (
    <div className="w-full lg:w-80 border-r h-full flex flex-col p-4 bg-white">
      {/* العنوان */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Message</h2>

      {/* البحث */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search Name"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <SearchNormal1 size="18" className="absolute left-3 top-2.5 text-gray-400" />
      </div>

      {/* قائمة المحادثات */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {chats.map((chat) => (
          <div key={chat.id} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition">
            {/* صورة + حالة */}
            <div className="relative">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {chat.isOnline && (
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>

            {/* اسم + رسالة + وقت */}
            <div className="flex-1">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-800">{chat.name}</span>
                <span className="text-xs text-gray-500">{chat.time}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span className="truncate w-40">{chat.lastMessage}</span>
                {chat.unread ? (
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                ) : (
                  <TickCircle size="14" className="text-indigo-400" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
