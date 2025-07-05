interface LoadingSpinnerProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LoadingSpinner = ({ message = 'Loading...', size = 'md' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const containerClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16'
  };

  return (
    <div className={`text-center ${containerClasses[size]}`}>
      <div className={`inline-flex items-center justify-center ${sizeClasses[size]} bg-primary/20 rounded-full mb-4`}>
        <div className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8'} border-2 border-primary border-t-transparent rounded-full animate-spin`}></div>
      </div>
      <p className="text-muted-foreground font-medium">{message}</p>
    </div>
  );
};

export default LoadingSpinner;