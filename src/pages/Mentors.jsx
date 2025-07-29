import React from 'react';
import MentorsSection from '../components/MentorsSection';

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
  {
    name: 'Sarah Lee',
    role: 'UX Researcher',
    img: 'https://i.pravatar.cc/300?img=12',
    tasks: 21,
    rating: '4.5',
    reviews: 300,
  },
  {
    name: 'Amr Helmy',
    role: 'React Developer',
    img: 'https://i.pravatar.cc/300?img=16',
    tasks: 55,
    rating: '4.8',
    reviews: 850,
  },
  {
    name: 'Yasmin Khalid',
    role: 'Brand Strategist',
    img: 'https://i.pravatar.cc/300?img=20',
    tasks: 28,
    rating: '4.4',
    reviews: 420,
  },
  {
    name: 'Ahmed Lotfy',
    role: 'Full Stack Developer',
    img: 'https://i.pravatar.cc/300?img=22',
    tasks: 60,
    rating: '4.9',
    reviews: 1000,
  },
];
 const mentors1 = [{
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
  {
    name: 'Sarah Lee',
    role: 'UX Researcher',
    img: 'https://i.pravatar.cc/300?img=12',
    tasks: 21,
    rating: '4.5',
    reviews: 300,
  }]
export default function Mentors() {
  return (
    <div className="p-6">
      <MentorsSection title="Recent  Mentors" mentors={mentors1} />

       <MentorsSection title="Top Mentors" mentors={mentors} />
    </div>
  );
}
