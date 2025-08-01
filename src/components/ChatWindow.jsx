import React from 'react';
import { Call, Video, More, Send2 } from 'iconsax-react';
import img1 from '../images/img2.png';
const messages = [
  {
    id: 1,
    sender: 'me',
    type: 'text',
    content: 'Morning Angela, I have question about My Task',
    time: '13:52',
  },
  {
    id: 2,
    sender: 'other',
    type: 'text',
    content: 'Yes sure. Any problem with your assignment?',
    time: '13:53',
  },
  {
    id: 3,
    sender: 'me',
    type: 'image',
    content: img1 ,
    time: '13:54',
  },
  {
    id: 4,
    sender: 'me',
    type: 'text',
    content: 'Is there a plugin to do this task?',
    time: '13:55',
  },
  {
    id: 5,
    sender: 'other',
    type: 'text',
    content: 'No plugin. You’ll have to make it manually.',
    time: '13:56',
  },
];

export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/150?img=20" className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Angela Crison</h3>
            <span className="text-xs text-green-500">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <Call size="20" />
          <Video size="20" />
          <More size="20" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-6 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl text-sm shadow
              ${msg.sender === 'me'
              ? 'ml-auto bg-indigo-100 text-indigo-900'
              : 'mr-auto bg-gray-100 text-gray-700'
            }`}
          >
            {msg.type === 'text' ? (
              <p>{msg.content}</p>
            ) : (
              <img src={msg.content} alt="chat" className="w-64 h-auto p-1 mt-1 rounded-lg" />
            )}
            <div className="text-[13px] text-right mt-1 opacity-50">{msg.time}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 p-4 border-t">
        <input
          type="text"
          placeholder="Send your message..."
          className="flex-1 px-4 py-2 text-sm border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button className="p-2 text-white bg-indigo-500 rounded-full hover:bg-indigo-600">
          <Send2 size="18" />
        </button>
      </div>
    </div>
  );
}
