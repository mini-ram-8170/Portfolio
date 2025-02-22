import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card3D } from './3DCard';
import Navbar from './Navbar';
import ContactInfo from './ContactInfo';

const servicesList = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating beautiful, responsive websites that engage users and drive results",
    icon: "🎨",
    categories: ["Design", "Development"],
    tiers: [
      {
        name: "Basic",
        price: "$500",
        features: [
          "3-5 Pages Website",
          "Mobile Responsive Design",
          "Basic SEO Setup",
          "Contact Form",
          "2 Rounds of Revisions"
        ]
      },
      {
        name: "Professional",
        price: "$1000",
        features: [
          "5-8 Pages Website",
          "Custom Animations",
          "Advanced SEO Setup",
          "Social Media Integration",
          "Newsletter Integration",
          "4 Rounds of Revisions",
          "1 Month Support"
        ]
      },
      {
        name: "Enterprise",
        price: "$2000+",
        features: [
          "10+ Pages Website",
          "Custom Features",
          "E-commerce Integration",
          "Premium Animations",
          "Advanced Analytics",
          "Unlimited Revisions",
          "3 Months Support",
          "Performance Optimization"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Logo Design",
    description: "Crafting unique brand identities that make lasting impressions",
    icon: "✏️",
    categories: ["Design", "Branding"],
    tiers: [
      {
        name: "Basic",
        price: "$200",
        features: [
          "2 Logo Concepts",
          "2 Revisions",
          "Basic File Formats",
          "Black & White Version"
        ]
      },
      {
        name: "Professional",
        price: "$350",
        features: [
          "4 Logo Concepts",
          "4 Revisions",
          "All File Formats",
          "Color Variations",
          "Brand Guidelines",
          "Social Media Kit"
        ]
      },
      {
        name: "Premium",
        price: "$500",
        features: [
          "6 Logo Concepts",
          "Unlimited Revisions",
          "All File Formats",
          "Full Brand Identity",
          "Stationery Design",
          "Social Media Kit",
          "Brand Guidelines",
          "Source Files"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Web Development",
    description: "Building robust, scalable web applications with modern technologies",
    icon: "💻",
    categories: ["Development"],
    tiers: [
      {
        name: "Basic",
        price: "$1000",
        features: [
          "Single Page Application",
          "Basic Authentication",
          "RESTful API Integration",
          "Basic Database Setup",
          "1 Month Support"
        ]
      },
      {
        name: "Professional",
        price: "$2500",
        features: [
          "Multi-page Application",
          "Advanced Authentication",
          "Custom API Development",
          "Database Optimization",
          "Real-time Features",
          "Payment Integration",
          "3 Months Support"
        ]
      },
      {
        name: "Enterprise",
        price: "$5000+",
        features: [
          "Complex Web Application",
          "Custom Features & Integrations",
          "Scalable Architecture",
          "High Performance Setup",
          "Advanced Security",
          "Load Balancing",
          "Database Clustering",
          "6 Months Support"
        ]
      }
    ]
  }
];

const categories = [
  "All",
  "Design",
  "Development",
  "Branding",
  "Marketing"
];

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [compareMode, setCompareMode] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleServiceClick = (service) => {
    if (compareMode) {
      if (selectedServices.includes(service)) {
        setSelectedServices(selectedServices.filter(s => s.id !== service.id));
      } else if (selectedServices.length < 2) {
        setSelectedServices([...selectedServices, service]);
      }
    } else {
      setSelectedService(service);
    }
  };

  const toggleCompareMode = () => {
    setCompareMode(!compareMode);
    setSelectedServices([]);
    setShowComparison(false);
    setSelectedService(null);
  };

  const filteredServices = useMemo(() => {
    return servicesList.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || service.categories.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const renderServiceCard = (service) => (
    <Card3D
      key={service.id}
      className="bg-white/5 rounded-xl p-8 backdrop-blur-sm group w-full
        hover:bg-white/10 transition-all duration-500
        hover:shadow-[0_8px_30px_rgb(168,85,247,0.2)]"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p className="text-gray-400">{service.description}</p>
        </div>
      </div>

      {/* Pricing Tiers - Horizontal Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {service.tiers.map((tier, index) => (
          <div 
            key={index}
            className="border border-white/10 rounded-lg p-6 hover:border-purple-500/50 
              transition-all duration-300 hover:bg-white/5"
          >
            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
            <p className="text-2xl font-bold text-purple-400 mb-4">{tier.price}</p>
            <ul className="space-y-2 mb-6">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-purple-400 mt-1">✓</span>
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate('/contact')}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-cyan-500 
                rounded-full font-bold hover:scale-105 transition-all duration-300"
            >
              Choose {tier.name}
            </button>
          </div>
        ))}
      </div>
    </Card3D>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 bg-purple-500/5 rounded-2xl -top-32 -left-32 animate-float-slow"></div>
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-2xl top-1/2 -right-48 animate-float-delayed"></div>
        <div className="absolute w-72 h-72 bg-blue-500/5 rounded-2xl -bottom-36 -left-36 animate-float"></div>
      </div>

      <Navbar />

      <main className="relative pt-32 px-4 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            My Services
          </h1>
          
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* Search Bar */}
            <div className="relative group flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full px-4 py-2 bg-white/5 rounded-lg border border-white/10
                  focus:border-purple-500 outline-none transition-all duration-300
                  hover:bg-white/10 text-white placeholder-gray-400"
              />
              <div className={`absolute right-3 top-1/2 -translate-y-1/2 transition-opacity duration-300
                ${searchQuery ? 'opacity-100' : 'opacity-0'}`}>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300
                    ${selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                      : 'bg-white/5 hover:bg-white/10'}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Compare Button */}
            <button
              onClick={toggleCompareMode}
              className="px-6 py-2 rounded-full transition-all duration-300
                bg-white/5 hover:bg-white/10 flex items-center gap-2 whitespace-nowrap"
            >
              <span>{compareMode ? 'Exit Compare' : 'Compare'}</span>
              <span className="text-xl">⚖️</span>
            </button>
          </div>
        </div>

        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No services found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Services Grid - One service per row */}
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {(selectedService ? [selectedService] : filteredServices).map(service => renderServiceCard(service))}
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

export default Services; 