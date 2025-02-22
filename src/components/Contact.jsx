import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card3D } from './3DCard';
import ContactInfo from './ContactInfo';
import Navbar from './Navbar';

const Contact = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Logo Design',
    description: '',
    budgetRange: '$500 - $1000'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track mouse movement for 3D effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 25;
    const y = (clientY - innerHeight / 2) / 25;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // First validate the form data
      if (!formData.name || !formData.email || !formData.description) {
        throw new Error('Please fill in all required fields');
      }

      // Use FormData instead of JSON
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        body: formDataToSend // Send as FormData instead of JSON
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to send message');
      }

      // Clear form and show success
      setFormData({
        name: '',
        email: '',
        projectType: 'Logo Design',
        description: '',
        budgetRange: '$500 - $1000'
      });
      alert('Message sent successfully!');
      
    } catch (error) {
      console.error('Error:', error);
      alert(error.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
        <Card3D className="max-w-4xl mx-auto p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's work together
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="group">
              <label className="block text-lg mb-2 text-gray-300">Name *</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 
                  focus:border-purple-500 text-white transition-all duration-300 outline-none 
                  hover:bg-white/10 focus:shadow-[0_0_20px_rgb(168,85,247,0.2)]
                  focus:translate-y-[-2px]"
              />
            </div>

            <div className="group">
              <label className="block text-lg mb-2 text-gray-300">Email *</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 
                  text-white transition-all duration-300 outline-none hover:bg-white/10"
              />
            </div>

            <div className="group">
              <label className="block text-lg mb-2 text-gray-300">Project Type *</label>
              <select 
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 
                  text-white transition-all duration-300 outline-none hover:bg-white/10"
              >
                <option>Logo Design</option>
                <option>Web Development</option>
                <option>Both</option>
              </select>
            </div>

            <div className="group">
              <label className="block text-lg mb-2 text-gray-300">Project Description *</label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                required
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 
                  text-white transition-all duration-300 outline-none hover:bg-white/10 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <div className="group">
              <label className="block text-lg mb-2 text-gray-300">Budget Range *</label>
              <select 
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 
                  text-white transition-all duration-300 outline-none hover:bg-white/10"
              >
                <option>$500 - $1000</option>
                <option>$1000 - $2000</option>
                <option>$2000+</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 
                rounded-full text-white font-bold text-lg transition-all duration-300 
                hover:shadow-[0_0_30px_rgb(168,85,247,0.3)] disabled:opacity-50 
                overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 bg-gradient-to-r from-purple-600 to-cyan-600">
              </div>
            </button>
          </form>

          <div className="border-t border-white/10 mt-16">
            <ContactInfo />
          </div>
        </Card3D>
      </main>
    </div>
  );
};

export default Contact; 