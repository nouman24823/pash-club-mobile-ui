import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFFFF] p-5 h-full select-none">
      {/* Icon Area */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {/* Pulsing check circle */}
        <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#B8923E]/30 flex items-center justify-center mb-5 relative shadow-inner">
          <div className="absolute inset-0 rounded-full border-4 border-[#B8923E]/10 animate-ping"></div>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-[#B8923E]">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Success Message */}
        <div className="text-center px-2">
          <span className="text-[9px] font-bold text-[#B8923E] uppercase tracking-[0.18em]">
            MEMBERSHIP ACTIVATED
          </span>
          <h1 className="font-poppins text-[16px] font-semibold text-[#1C1510] mt-1 mb-2">
            Welcome to the Elite
          </h1>
          <p className="font-poppins text-[11px] text-[#9A8878] leading-relaxed">
            Your payment has been successfully authorized. Your official Gold Elite Pass is now active.
          </p>
        </div>

        {/* Transaction Summary Card */}
        <div className="w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.18)] rounded-xl p-3.5 mt-6 space-y-2.5">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-[#9A8878] font-medium">Reference ID</span>
            <span className="text-[#1C1510] font-mono font-semibold">PASH-716491-03</span>
          </div>
          <div className="flex justify-between items-center text-[10px] border-t border-[rgba(184,146,62,0.08)] pt-2">
            <span className="text-[#9A8878] font-medium">Membership Tier</span>
            <span className="text-[#B8923E] font-bold uppercase tracking-wide">Gold Elite Pass</span>
          </div>
          <div className="flex justify-between items-center text-[10px] border-t border-[rgba(184,146,62,0.08)] pt-2">
            <span className="text-[#9A8878] font-medium">Status</span>
            <span className="text-[#15803D] font-bold uppercase tracking-wider text-[8.5px] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
              CONFIRMED
            </span>
          </div>
        </div>
      </div>

      {/* Button CTA */}
      <div className="pt-4 border-t border-[rgba(184,146,62,0.08)]">
        <button
          onClick={() => navigate('/profile-setup')}
          className="btn-shimmer w-full rounded-lg py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510] cursor-pointer"
        >
          Begin Personalization
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
