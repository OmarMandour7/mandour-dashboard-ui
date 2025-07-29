import React from 'react';
export default function Users() {
  const users = [
    { id: 1, name: 'Ahmed', email: 'ahmed@example.com' },
    { id: 2, name: 'Salma', email: 'salma@example.com' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center">
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
