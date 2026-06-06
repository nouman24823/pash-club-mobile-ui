import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-1 flex flex-col items-center justify-between bg-[#1C1510] text-[#F0EDE8] p-6 h-full select-none">
      {/* Top spacer */}
      <div></div>

      {/* Main Logo */}
      <div className="flex flex-col items-center gap-3">
        {/* Styled crown or brand emblem */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full border border-[#B8923E]/40 bg-[#B8923E]/10 mb-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#B8923E]">
            <path
              d="M12 2L15 8L22 9L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9L9 8L12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="font-poppins text-[22px] font-bold uppercase tracking-[0.25em] text-[#B8923E]">
          PASH·CLUB
        </h1>
        <p className="font-poppins text-[9px] font-light tracking-[0.3em] uppercase text-[#9A8878] -mt-1">
          Elegance In Every Detail
        </p>
      </div>

      {/* Footer loading indicator */}
      <div className="flex flex-col items-center gap-4 w-full">
        {/* Simple static progress bar representation */}
        <div className="w-24 h-[1px] bg-[#B8923E]/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-12 bg-[#B8923E] rounded-full animate-pulse"></div>
        </div>
        <button
          onClick={() => navigate('/welcome')}
          className="text-[10px] font-medium tracking-wider uppercase text-[#9A8878] hover:text-[#B8923E]"
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default Splash;
