import React from 'react';

export const Card3D = ({ children, className = '' }) => {
  return (
    <div className={`transform-gpu transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}; 