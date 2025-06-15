
const HeroBackground = () => {
  return (
    <div className="absolute inset-0">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(4,217,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(4,217,139,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-wp-teal/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-wp-teal/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default HeroBackground;
