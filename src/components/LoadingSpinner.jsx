const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] 
      flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-400/20 border-t-purple-500 
          rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-cyan-400/20 
          border-b-cyan-500 rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 