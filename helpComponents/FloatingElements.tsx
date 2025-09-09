import { HardHat, Wrench, Cog, Triangle } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Construction themed floating icons */}
      <div className="absolute top-20 left-10 animate-float">
        <HardHat className="h-8 w-8 text-accent/30" style={{ animationDelay: '0s' }} />
      </div>
      
      <div className="absolute top-32 right-16 animate-float">
        <Wrench className="h-6 w-6 text-primary/20" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="absolute bottom-32 left-20 animate-float">
        <Cog className="h-10 w-10 text-accent/25" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="absolute bottom-20 right-10 animate-float">
        <Triangle className="h-7 w-7 text-primary/30" style={{ animationDelay: '1s' }} />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-accent/5 rotate-45 animate-float" style={{ animationDelay: '5s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 right-8 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '3.5s' }} />
    </div>
  );
};

export default FloatingElements;