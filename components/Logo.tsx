
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 
        The square logo provided by the user. 
        It contains both the icon and the brand name 'EditXcel'.
      */}
      <img 
        src="logo.png" 
        alt="EditXcel" 
        className="h-10 w-auto object-contain hover:brightness-125 transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,245,180,0.3)]"
        onError={(e) => {
          // Fallback if image is missing
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const nextSpan = target.nextElementSibling as HTMLElement;
          if (nextSpan) nextSpan.style.display = 'block';
        }}
      />
      <span className="text-xl font-black tracking-tighter text-white hidden">
        Edit<span className="text-[#00f5b4]">Xcel</span>
      </span>
    </div>
  );
};

export default Logo;
