import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFFFF] p-5 h-full select-none">
      {/* Upper Area */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold text-[#B8923E] uppercase tracking-[0.2em]">
            MEMBERSHIP PASS
          </span>
          <h1 className="font-poppins text-[16px] font-semibold text-[#1C1510] mt-1">
            Choose Your Gateway
          </h1>
          <p className="font-poppins text-[11px] text-[#9A8878] mt-1">
            Activate your digital profile or log in to access benefits.
          </p>
        </div>

        {/* Feature List */}
        <div className="space-y-4 px-2 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#B8923E]/20 flex items-center justify-center shrink-0 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#B8923E]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-poppins text-[11px] font-bold text-[#1C1510] uppercase tracking-wide">
                Private & Secured
              </h4>
              <p className="font-poppins text-[10px] text-[#9A8878] leading-tight mt-0.5">
                Each account is fully encrypted and tied to a private membership token.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#FAF7F2] border border-[#B8923E]/20 flex items-center justify-center shrink-0 mt-0.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#B8923E]">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <h4 className="font-poppins text-[11px] font-bold text-[#1C1510] uppercase tracking-wide">
                Immediate Concierge
              </h4>
              <p className="font-poppins text-[10px] text-[#9A8878] leading-tight mt-0.5">
                Connect instantly with certified luxury experience managers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Button CTAs */}
      <div className="flex flex-col gap-3 pt-4">
        {/* Sign In Option */}
        <button
          onClick={() => navigate('/login')}
          className="btn-shimmer w-full rounded-lg py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510] cursor-pointer"
        >
          I am a Member — Sign In
        </button>

        {/* Sign Up Option */}
        <button
          onClick={() => navigate('/signup')}
          className="w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] hover:bg-[#F5EFE6] rounded-lg py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510] cursor-pointer transition-all active:scale-[0.99]"
        >
          Join the Club — Sign Up
        </button>
      </div>
    </div>
  );
};

export default AuthSelector;
