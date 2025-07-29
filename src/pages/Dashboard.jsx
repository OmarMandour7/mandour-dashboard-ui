import React from 'react';
import Navbar from '../components/Navbar';
import RunningTaskCard from '../components/RunningTaskCard';
import ActivityChart from '../components/ActivityChart';
import MentorsSection from '../components/MentorsSection';
import UpcomingTasksSection from '../components/UpcomingTasksSection';
import CalendarSection from '../components/CalenderSection';
import TaskToday from '../components/TaskToday';
import TaskDetail from '../components/TaskDetails';
export default function Dashboard() {

  const mentors = [
    {
      name: 'Skylar Dias',
      role: 'UI Designer',
      img: 'https://i.pravatar.cc/300?img=1',
      tasks: 40,
      rating: '4.7',
      reviews: 510,
    },
    {
      name: 'Noah Smith',
      role: 'Product Manager',
      img: 'https://i.pravatar.cc/300?img=8',
      tasks: 32,
      rating: '4.9',
      reviews: 610,
    },
  ];
  
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Navbar */}
      

      {/* Main Dashboard Content */}
     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">

        <div className="xl:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-5">
        <RunningTaskCard />
        <ActivityChart/>
          </div>
          <div className="my-6">
             <MentorsSection title="Top Mentors" mentors={mentors} />
        <UpcomingTasksSection />
       
          </div>
         
  </div>
       
        <div className="flex flex-col gap-6 my-2">
          <CalendarSection />
          <TaskToday />
          <TaskDetail />
  </div>
     
      </div>
    </div>
  );
}
