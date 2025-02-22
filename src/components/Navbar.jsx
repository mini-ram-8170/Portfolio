import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full top-0 bg-black/10 backdrop-blur-sm px-6 md:px-24 flex justify-between items-center z-50 py-6">
      <a href="/" className="text-2xl font-bold text-white">RISHABH</a>
      <div className="flex gap-8">
        <button onClick={() => navigate('/projects')} className="text-white hover:text-purple-400 transition-colors">
          Projects
        </button>
        <button onClick={() => navigate('/services')} className="text-white hover:text-purple-400 transition-colors">
          Services
        </button>
        <button onClick={() => navigate('/about')} className="text-white hover:text-purple-400 transition-colors">
          About
        </button>
        <button onClick={() => navigate('/reviews')} className="text-white hover:text-purple-400 transition-colors">
          Reviews
        </button>
        <button onClick={() => navigate('/contact')} className="text-white hover:text-purple-400 transition-colors">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 