import React from 'react';
import TeamMember from './TeamMember';

function Team() {
  let teamMembers = [
    {
      name: 'Dhirender Pratap Singh',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQF8Jk3_DDL1rw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695220427749?e=1739404800&v=beta&t=aFUXHI1T0tLVt2xQvQxIACsB5W7lxazLm5GYZ5lcP4o',
      email: 'saurav71412@gmail.com',
      linkedin: 'https://www.linkedin.com/in/dhirender-pratap-singh-d1705/',
      twitter: 'https://x.com/DhirendrePratap',
      bio: '',
      expertise: ['Frontend', 'Backend', 'Java', 'Cloud'],
    },
    {
      name: 'Sapna Singh',
      image: 'https://media.licdn.com/dms/image/v2/D5635AQEACBfTyZ2ARw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1719441209076?e=1734786000&v=beta&t=7WrRiE0vdFS8O18YkH2j3trStHTr1XwSlbrix22ACd4',
      email: 'sappysingh1004@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sapna-singh-3933b9228/',
      bio: '',
      expertise: ['Frontend', 'UI/UX', 'Data Science'],
    },
    {
      name: 'Kajal',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGE3vLjstoo0A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708450847198?e=1739404800&v=beta&t=o5J5KfJW1mX826Njr59d4vV-KIprvZoqeUlMJZfTCPE',
      email: '',
      bio: '',
      linkedin:'https://www.linkedin.com/in/kajal99/',
      expertise: ['Full Stack Developer', 'C++'],
    },
    {
      name: 'Shivang Raman',
      image: 'https://media.licdn.com/dms/image/v2/C4E03AQECvwYMOGaNhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1646815121743?e=1739404800&v=beta&t=RIdk93d6Ngr8Jfz0QTFo7PoGvzjHL0j5nyo6h9kKRec',
      email: '',
      bio: '',
      linkedin:'https://www.linkedin.com/in/shivang-raman-73a799231/',
      expertise: ['Machine Learning','C++'],
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