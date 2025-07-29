import React from 'react'
import TasksHeader from '../components/TasksHeader'
import TaskSection from '../components/TaskSection';
import task1 from '../images/task1.png';
import task2 from '../images/task2.png';
import Navbar from '../components/Navbar';

const Tasks = () => {
  const timeLimitTasks = [
  {
    image: task1,
    title: 'Creating Mobile App Design',
    role: 'UI/UX Design',
    progress: 90,
    timeLabel: '1 Hour',
    avatars: [
      'https://i.pravatar.cc/150?img=11',
      'https://i.pravatar.cc/150?img=12',
    ],
  },
  {
    image: task2,
    title: 'Creating Perfect Website',
    role: 'Frontend Dev',
    progress: 60,
    timeLabel: '2 Hours',
    avatars: [
      'https://i.pravatar.cc/150?img=14',
      'https://i.pravatar.cc/150?img=15',
    ],
  },
  {
    image: task1,
    title: 'Admin Dashboard Design',
    role: 'UI Designer',
    progress: 45,
    timeLabel: '3 Hours',
    avatars: [
      'https://i.pravatar.cc/150?img=16',
      'https://i.pravatar.cc/150?img=17',
    ],
  },
  {
    image: task2,
    title: 'User Onboarding Flow',
    role: 'Product Design',
    progress: 75,
    timeLabel: '4 Hours',
    avatars: [
      'https://i.pravatar.cc/150?img=18',
      'https://i.pravatar.cc/150?img=19',
    ],
  },
];


  return (
    <div className="container mx-auto p-6">
        <TasksHeader/>
         <div className="p-6 space-y-6">
      <TaskSection title="Time Limit" tasks={timeLimitTasks} />
      <TaskSection title="New Task" tasks={timeLimitTasks} />
    </div>
    </div>
  )
}

export default Tasks