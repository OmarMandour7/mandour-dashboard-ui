import React from 'react';
export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
        <button className="bg-blue-500 text-white w-full py-2 rounded">Login</button>
      </div>
    </div>
  );
}
