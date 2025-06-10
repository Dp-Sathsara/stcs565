import React from "react";
import { LinkedinIcon, FacebookIcon } from "lucide-react";
interface MemberCard {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  facebook?: string;
}
const ExCo: React.FC = () => {
  // Academic members
  const academicMembers: MemberCard[] = [
    {
      id: "a1",
      name: "Dr. Basitha Kavinga",
      position: "Senior Treasurer",
      image:
        "https://science.kln.ac.lk/depts/stcs/images/Staff/Academic/Basithakavinga.jpg",
      bio: "Senior Lecturer in the Department of Statistics and Computer Science, specializing in Time Series Analysis and Stochastic Processes.",
      linkedin:
        "https://www.linkedin.com/in/dr-basitha-kavinga-university-of-kelaniya-a68bb3312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];
  // Top board members
  const boardMembers: MemberCard[] = [
    {
      id: "b1",
      name: "Dasun Navindu",
      position: "President",
      image: "/images/Committee/president.jpg",
      bio: "",
      linkedin:
        "https://www.linkedin.com/in/dasun-navindu-987857292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: "b2",
      name: "Chirath Rasandun",
      position: "Vice President",
      image: "/images/Committee/vice-president.jpg",
      bio: "",
      linkedin:
        "https://www.linkedin.com/in/chirath-rasandun-00526327b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: "b3",
      name: "Sandali Tharushika",
      position: "Secretary",
      image: "/images/Committee/secretary.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/sandali-sewmini-8a87a3314/",
    },
    {
      id: "b4",
      name: "Samadhi Anusara",
      position: "Vice Secretary",
      image: "/images/Committee/samadhi.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/samadhi-jagathsiri-566931314/",
    },
    {
      id: "b5",
      name: "Jithnuka Weerasinghe",
      position: "Treasurer",
      image: "/images/Committee/jithnuka.jpg",
      bio: "",
      linkedin:
        "https://www.linkedin.com/in/jithnuka-weerasinghe-b9408b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];
  // Committee members
  const committeeMembers: MemberCard[] = [
    {
      id: "c1",
      name: "Desitha Pavidu",
      position: "Editor",
      image: "/images/Committee/deshitha.jpg",
      bio: "",
      linkedin: "https://linkedin.com",
    },
    {
      id: "c2",
      name: "Matheesha Koralegedara",
      position: "Co Editor",
      image: "/images/Committee/matheesha.jpg",
      bio: "",
      linkedin:
        "https://www.linkedin.com/in/matheesha-koralegedara-8090b2236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      id: "c3",
      name: "Ravindu Indranath",
      position: "Co Editor",
      image: "/images/Committee/ravindu.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/indranath-ravindu-95423b356/",
    },
    {
      id: "c4",
      name: "Manavee Mahindapala",
      position: "4th Year Representative",
      image: "/images/Committee/manavee.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/manavee-mahindapala99/",
    },
    {
      id: "c5",
      name: "Kavindu Dilshan",
      position: "3rd Year Representative",
      image: "/images/Committee/4th.jpg",
      bio: "",
      linkedin:
        "https://www.linkedin.com/in/kavindu-dilshan-abeysekara-161387225/",
    },
    {
      id: "c6",
      name: "Nidula Dharmapriya",
      position: "2nd Year Representative",
      image: "/images/Committee/nidula.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/nidula-dharmapriya/",
    },
    {
      id: "c6",
      name: "Pasindu Serasinghe",
      position: "2nd Year Representative",
      image: "/images/Committee/pasindu.jpg",
      bio: "",
      linkedin: "https://linkedin.com",
    },
    {
      id: "c6",
      name: "Chandali Nirmitha",
      position: "2nd Year Representative",
      image: "/images/Committee/chandali.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/chandali-nirmitha-22209427b/",
    },
    {
      id: "c6",
      name: "Movindu Anusara",
      position: "2nd Year Representative",
      image: "/images/Committee/movindu.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/movindu-anusara-9441b1258/",
    },
    {
      id: "c6",
      name: "Chamith Madhusanka",
      position: "2nd Year Representative",
      image: "/images/Committee/chamith.jpg",
      bio: "",
      linkedin: "https://www.linkedin.com/in/chamith-madhusanka-378412310/",
    },
    {
      id: "c6",
      name: "Maneesha Sathsara",
      position: "1st Year Representative",
      image: "/images/Committee/maneesha.jpg",
      bio: "",
      linkedin: "https://linkedin.com",
    },
  ];
  const MemberCard: React.FC<{
    member: MemberCard;
  }> = ({ member }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-white text-sm mb-4">{member.bio}</p>
            <div className="flex space-x-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {member.facebook && (
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label={`${member.name}'s Facebook profile`}
                >
                  <FacebookIcon size={16} />
                </a>
              )}
              {/* <button className="bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition-colors ml-auto">
                Follow
              </button> */}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
          <p className="text-blue-600">{member.position}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Executive Committee 2025
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to Know Our Exceptional Executive Committee Members
          </p>
        </div>
        {/* Academic Members */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Executive Academic Members
          </h2>
          <div className="flex justify-center items-center min-h-[300px]">
            {academicMembers.map((member) => (
              <div className="w-full max-w-md">
                <MemberCard key={member.id} member={member} />
              </div>
            ))}
          </div>
        </section>
        {/* Top Board Members */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Top Board Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        {/* Committee Members */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Committee Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committeeMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
        {/* Join the Committee CTA */}
        <div className="mt-16 bg-blue-700 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Joining the Committee?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Elections for the next executive committee will be held during the
            Annual General Meeting. Stay tuned for announcements!
          </p>
          <button className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors">
            Learn About the Election Process
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExCo;
