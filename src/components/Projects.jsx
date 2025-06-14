import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card3D } from './3DCard';
import Navbar from './Navbar';
import ContactInfo from './ContactInfo';

const projects = [
  {
    id: 1,
    title: "Manglanam Naturals",
    subtitle: "Primium Spice Emporium",
    description: "Discover the world premium spices at Manglanam Naturals. 'I Bilive in Real Flavor - No Artificial Flavors, No Preservatives, No Additives.'",
    image: "/manglanam.png",
    technologies: ["React", "Node.js", "MongoDB", "UI/UX", "E-commerce"],
    category: "Web Development",
    link: "https://manglanam.com",
    github: "https://github.com/Rishabhostwal48/Manglanam_Naturals",
    features: [
      "Responsive Design",
      "User Authentication",
      "Real-time Updates",
      "Image Processing"
    ],
    status: "Live"
  },{
    id: 2,
    title: "StickMobi",
    subtitle: "Photography Tools Platform",
    description: "Professional photography and videography tools for creators on the move",
    image: "/stickmobi-preview.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Web Development",
    link: "https://ht0zr9u1uqq5o48j7.lite.vusercontent.net/",
    github: "https://github.com/rishabhostwal48/stickmobi",
    features: [
      "Responsive Design",
      "User Authentication",
      "Real-time Updates",
      "Image Processing"
    ],
    status: "Completed"
  },
  {
    id: 3,
    title: "Fashion Bazaar",
    subtitle: "E-commerce Platform",
    description: "A modern fashion e-commerce experience with advanced features",
    image: "/fashion-bazaar-preview.jpg",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
    category: "E-commerce",
    link: "https://tbpehi6mrtfjnpf0.vercel.app/",
    github: "https://github.com/rishabhostwal48/fashion-bazaar",
    features: [
      "Product Management",
      "Shopping Cart",
      "Payment Integration",
      "Order Tracking"
    ],
    status: "In Progress"
  },
  {
    id: 4,
    title: "EcoConnect",
    subtitle: "Environmental Platform",
    description: "Connecting eco-conscious individuals and organizations",
    image: "/eco-connect-preview.jpg",
    technologies: ["React", "Firebase", "Material-UI"],
    category: "Web Development",
    link: "https://kje2iuglwedakpid.vercel.app/",
    github: "https://github.com/rishabhostwal48/eco-connect",
    features: [
      "Social Networking",
      "Event Management",
      "Resource Sharing",
      "Impact Tracking"
    ],
    status: "Planning"
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile Apps", "E-commerce"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const navigate = useNavigate();

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
      <Navbar />

      <main className="relative pt-32 px-4 md:px-24">
        <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          My Projects
        </h1>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                  : 'bg-white/5 hover:bg-white/10'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map(project => (
            <Card3D
              key={project.id}
              className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 
                transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.subtitle}</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 
                      rounded-full text-center font-bold hover:scale-105 transition-transform"
                  >
                    View Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Contact Section */}
        <section className="py-16">
          <Card3D className="max-w-4xl mx-auto p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
            <ContactInfo />
          </Card3D>
        </section>
      </main>
    </div>
  );
};

export default Projects; 