
const ScrollIndicator = () => {
  return (
    <div className="flex justify-center animate-bounce">
      <div className="flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-wp-teal/60 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <div className="w-1 h-3 bg-wp-teal rounded-full animate-pulse"></div>
        </div>
        <span className="text-wp-teal text-xs font-medium">Scroll to explore</span>
      </div>
    </div>
  );
};

export default ScrollIndicator;
