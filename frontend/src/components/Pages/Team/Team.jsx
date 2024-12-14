import React from 'react';
import TeamMember from './TeamMember';

function Team() {
  let teamMembers = [
    {
      name: 'Dhirender Pratap Singh',
      role: 'CEO & Founder',
      image: '',
      email: 'saurav71412@gmail.com',
      linkedin: 'https://www.linkedin.com/in/dhirender-pratap-singh-d1705/',
      twitter: 'https://x.com/DhirendrePratap',
      bio: '',
      expertise: ['Frontend', 'Backend', 'Java', 'Cloud'],
    },
    {
      name: 'Sapna Singh',
      role: 'Operations Director',
      image: '',
      email: 'sappysingh1004@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sapna-singh-3933b9228/',
      bio: '',
      expertise: ['Frontend', 'UI/UX', 'Data Science'],
    },
    {
      name: 'Kajal',
      role: 'Customer Success Manager',
      image: '',
      email: 'emily@parkease.com',
      bio: '',
      expertise: ['Full Stack Developer'],
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Meet Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Our dedicated team of professionals works tirelessly to revolutionize urban parking solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;