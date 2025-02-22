import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card3D } from './3DCard';
import ContactInfo from './ContactInfo';
import Navbar from './Navbar';

// Define projects data
const projects = [
  {
    id: 1,
    title: "StickMobi: Empowering Portable Creativity",
    description: "Professional photography and videography tools for creators on the move",
    image: "/stickmobi-preview.jpg",
    technologies: ["Web Design", "Logo Design", "UI/UX"],
    link: "https://ht0zr9u1uqq5o48j7.lite.vusercontent.net/"
  },
  {
    id: 2,
    title: "Fashion Bazaar",
    description: "A demo website showcasing modern fashion e-commerce experience",
    image: "/fashion-bazaar-preview.jpg",
    technologies: ["Web Design", "E-commerce", "UI/UX"],
    link: "#"
  },
  {
    id: 3,
    title: "EcoConnect",
    description: "Empowering Change, Building a Sustainable Future Together",
    image: "/eco-connect-preview.jpg",
    technologies: ["Web Development", "Logo Design", "Branding"],
    link: "#"
  }
];

// Define services data
const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating beautiful, responsive websites that engage users and drive results",
    icon: "🎨"
  },
  {
    id: 2,
    title: "Logo Design",
    description: "Crafting unique brand identities that make lasting impressions",
    icon: "✏️"
  },
  {
    id: 3,
    title: "Web Development",
    description: "Building robust, scalable web applications with modern technologies",
    icon: "💻"
  }
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  // Track mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
      {/* Simple floating cards background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-2xl -top-32 -left-32 animate-float-slow"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-2xl top-1/2 -right-48 animate-float-delayed"></div>
        <div className="absolute w-72 h-72 bg-blue-500/5 rounded-2xl -bottom-36 -left-36 animate-float"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative pt-32 px-4 md:px-24">
        {/* Hero Section */}
        <Card3D className="max-w-6xl mx-auto text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm
          hover:shadow-[0_0_30px_rgb(168,85,247,0.15)] transition-all duration-500">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500/20
            transform transition-all duration-300 hover:border-purple-500/40
            hover:shadow-[0_0_30px_rgb(168,85,247,0.3)]">
            <img
              src="/profile.jpg"
              alt="Rishabh Ostwal"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/128';
              }}
            />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Rishabh Ostwal
          </h1>
          <p className="text-2xl text-gray-400 mb-8">Web Designer & Developer</p>
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full font-bold hover:scale-105 transition-all duration-300"
          >
            Work with me
          </button>
        </Card3D>

        {/* Projects Section */}
        <section id="projects" className="py-32">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <Card3D key={project.id} className="group relative bg-white/5 rounded-xl p-6 backdrop-blur-sm 
                transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(168,85,247,0.2)]
                overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r 
                  from-transparent via-white/5 to-transparent transition-all duration-500">
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-500
                    group-hover:scale-105"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card3D>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card3D key={service.id} className="group relative bg-white/5 rounded-xl p-8 backdrop-blur-sm 
                transition-all duration-500 hover:bg-white/10 hover:translate-y-[-8px] 
                hover:shadow-[0_8px_30px_rgb(168,85,247,0.2)] overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  bg-gradient-to-b from-transparent via-white/5 to-transparent">
                </div>
                <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card3D>
            ))}
          </div>
        </section>

        <section className="py-16">
          <Card3D className="max-w-4xl mx-auto p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
            <ContactInfo />
          </Card3D>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
