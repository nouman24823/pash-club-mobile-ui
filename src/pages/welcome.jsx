import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F0EDE8] p-5 h-full select-none">
      {/* Visual Header / Premium Illustration representation */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-h-[220px] aspect-[4/3] rounded-2xl bg-[#1C1510] border border-[#B8923E]/20 relative overflow-hidden flex flex-col justify-end p-4 mb-4 shadow-md">
          {/* Subtle geometric gold rings background */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-44 rounded-full border border-[#B8923E] absolute"></div>
            <div className="w-32 h-32 rounded-full border border-[#B8923E] absolute"></div>
          </div>
          
          <div className="z-10 flex flex-col">
            <span className="text-[9px] font-semibold text-[#B8923E] tracking-widest uppercase mb-1">
              Exclusive Access
            </span>
            <h2 className="font-poppins text-[15px] font-bold text-white tracking-wide leading-tight uppercase">
              Curated Luxury For The Discerning Member
            </h2>
          </div>
        </div>

        {/* Text Area */}
        <div className="text-center px-2 mt-2">
          <h3 className="font-poppins text-[16px] font-semibold text-[#1C1510] tracking-wide mb-2 leading-snug">
            Welcome to the Elite Circle
          </h3>
          <p className="font-poppins text-[11px] text-[#9A8878] leading-relaxed">
            PASH·CLUB unlocks global VIP events, custom luxury partner rewards, and an immediate private concierge at your fingertips.
          </p>
        </div>
      </div>

      {/* Button CTA */}
      <div className="flex flex-col gap-3.5 pt-4">
        <button
          onClick={() => navigate('/auth')}
          className="btn-shimmer w-full rounded-lg py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510] cursor-pointer"
        >
          Enter The Club
        </button>
        <span className="text-[9px] text-[#9A8878] text-center uppercase tracking-wider font-light">
          By continuing, you agree to our private terms
        </span>
      </div>
    </div>
  );
};

export default Welcome;
