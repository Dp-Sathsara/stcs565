import React from 'react';
import { Link } from 'react-router-dom';
const About: React.FC = () => {
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About SCSSA
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about the Statistics and Computer Science Students'
            Association at the University of Kelaniya.
          </p>
        </div>
        {/* Mission and Vision */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              The Statistics and Computer Science Students' Association (SCSSA)
              aims to foster academic excellence, professional development, and
              community engagement among students in the Department of
              Statistics and Computer Science at the University of Kelaniya. We
              strive to bridge the gap between academic learning and industry
              requirements, creating well-rounded graduates ready to excel in
              their careers.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              To be a leading student association that empowers members with
              knowledge, skills, and networks necessary to become innovative
              professionals and researchers in statistics, data science, and
              computer science fields, contributing meaningfully to
              technological advancement and societal development.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-blue-800 mb-3">
                  Excellence
                </h3>
                <p className="text-gray-700">
                  We strive for excellence in all our academic and
                  extracurricular activities, encouraging members to reach their
                  highest potential.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-blue-800 mb-3">
                  Innovation
                </h3>
                <p className="text-gray-700">
                  We foster creative thinking and innovative approaches to
                  problem-solving in statistics and computer science.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-blue-800 mb-3">
                  Collaboration
                </h3>
                <p className="text-gray-700">
                  We believe in the power of teamwork and collaborative learning
                  to achieve greater outcomes.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-blue-800 mb-3">
                  Inclusivity
                </h3>
                <p className="text-gray-700">
                  We welcome and value diverse perspectives, ensuring all
                  members feel respected and included.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* History and Committee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Our History
            </h2>
            <p className="text-gray-700 mb-4">
              The Statistics and Computer Science Students' Association was
              established in 1995 with the goal of representing and supporting
              students in the Department of Statistics and Computer Science at
              the University of Kelaniya.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years, SCSSA has grown from a small group of dedicated
              students to a vibrant community of over 300 members. The
              association has been instrumental in organizing academic
              workshops, industry networking events, and social activities that
              enhance the university experience for our members.
            </p>
            <p className="text-gray-700">
              Today, SCSSA continues to evolve, adapting to the changing
              landscape of technology and education while maintaining its core
              mission of student empowerment and academic excellence.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Executive Committee
            </h2>
            <p className="text-gray-700 mb-6">
              The SCSSA is led by a dedicated Executive Committee elected
              annually by the student body. Our committee members work
              tirelessly to organize events, liaise with industry partners, and
              represent student interests to the department and university
              administration.
            </p>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="SCSSA Committee" className="w-full h-64 object-cover rounded-lg mb-6" />
            <div className="text-center">
              <Link to="/exco" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Meet Our Committee
              </Link>
            </div>
          </div>
        </div>
        {/* Activities and Achievements */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Our Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Academic Workshops
              </h3>
              <p className="text-gray-600">
                We organize technical workshops, coding competitions, and guest
                lectures to enhance learning beyond the classroom.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Industry Connections
              </h3>
              <p className="text-gray-600">
                We facilitate networking with industry professionals, organize
                career fairs, and share internship opportunities.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-100 text-blue-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                Social Activities
              </h3>
              <p className="text-gray-600">
                We build community through social events, sports competitions,
                and cultural celebrations throughout the academic year.
              </p>
            </div>
          </div>
        </div>
        {/* Join Us CTA */}
        <div className="bg-blue-700 rounded-lg shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Join the SCSSA Community</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Become a member of SCSSA and be part of a vibrant community
            dedicated to academic excellence and professional growth.
          </p>
          <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors">
            Register Now
          </a>
        </div>
      </div>
    </div>;
};
export default About;