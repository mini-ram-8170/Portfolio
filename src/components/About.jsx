import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card3D } from './3DCard';
import ContactInfo from './ContactInfo';
import Navbar from './Navbar';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-2xl -top-32 -left-32 animate-float-slow"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-2xl top-1/2 -right-48 animate-float-delayed"></div>
        <div className="absolute w-72 h-72 bg-blue-500/5 rounded-2xl -bottom-36 -left-36 animate-float"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative pt-32 px-4 md:px-24">
        <Card3D className="max-w-4xl mx-auto p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
          {/* Profile Section */}
          <div className="text-center mb-12">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500/20
              hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_30px_rgb(168,85,247,0.3)]">
              <img
                src="/profile.jpg"
                alt="Rishabh Ostwal"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-400">Web Designer & Developer</p>
          </div>

          {/* Bio Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Who I Am</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm Rishabh Ostwal, a passionate web designer and developer based in India. 
                I specialize in creating beautiful, functional websites and applications that 
                deliver exceptional user experiences.
              </p>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "HTML/CSS", "JavaScript", "React", "Node.js",
                  "UI/UX Design", "Responsive Design", "Logo Design",
                  "MongoDB", "Git", "Tailwind CSS", "C++", "Python", "MySQL"
                ].map((skill) => (
                  <div key={skill} className="bg-white/5 rounded-lg p-3 text-center
                    hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Experience</h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2">Freelance Web Developer</h3>
                  <p className="text-gray-400 mb-2">2022 - Present</p>
                  <p className="text-gray-300">
                    Working with clients worldwide to create custom websites and applications.
                    Specializing in React, Node.js, and modern web technologies.
                  </p>
                </div>
                {/* Add more experience items as needed */}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Education</h2>
              <div className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">Bachelor of Technology</h3>
                <p className="text-gray-400 mb-2">Computer Science and Engineering:- 2024-2028</p>
                <p className="text-gray-300">Mandsaur University</p>
              </div>
            </div>

            {/* Contact Button */}
            <div className="text-center pt-8">
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full 
                  font-bold hover:scale-105 transition-all duration-300
                  hover:shadow-[0_0_30px_rgb(168,85,247,0.3)]"
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="border-t border-white/10 mt-16">
            <ContactInfo />
          </div>
        </Card3D>
      </main>
    </div>
  );
};

export default About; 