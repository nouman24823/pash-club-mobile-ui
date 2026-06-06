import React from 'react';
import { Home, User, Compass, Settings, Gem } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F0EDE8] h-full overflow-y-auto select-none pb-12">
      {/* Scrollable Container */}
      <div className="p-4 space-y-4">
        {/* User Greet & Jewels */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-[9px] text-[#9A8878] uppercase tracking-wider font-semibold">
              MEMBERSHIP PROFILE
            </span>
            <h2 className="font-poppins text-[13px] font-bold text-[#1C1510] leading-none">
              Welcome back, Sir
            </h2>
          </div>
          <div className="bg-[#FAF7F2] border border-[#B8923E]/20 px-2 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#B8923E] rounded-full animate-pulse"></span>
            <span className="text-[8px] font-mono font-bold text-[#1C1510]">
              12,500 JEWELS
            </span>
          </div>
        </div>

        {/* Digital Membership Pass Card */}
        <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-[#1C1510] to-[#2B211A] border border-[#B8923E]/45 p-4.5 flex flex-col justify-between shadow-xl text-[#F0EDE8] relative overflow-hidden">
          {/* Subtle gold lines effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B8923E]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

          <div className="flex justify-between items-start z-10">
            <div>
              <span className="block text-[8px] tracking-[0.2em] font-semibold text-[#B8923E] uppercase">
                PASH·CLUB PASS
              </span>
              <span className="block text-[14px] font-bold text-white tracking-wide uppercase mt-0.5">
                NOUMAN A.
              </span>
            </div>
            <div className="px-2 py-0.5 rounded-full border border-[#B8923E]/30 bg-[#B8923E]/15">
              <span className="text-[7.5px] font-bold uppercase tracking-widest text-[#B8923E]">
                GOLD ELITE
              </span>
            </div>
          </div>

          <div className="z-10">
            <div className="w-8 h-6 bg-gradient-to-br from-[#E2E8F0] to-[#94A3B8] rounded-[4px] border border-[#CBD5E1]/30 mb-2 relative overflow-hidden flex items-center justify-center">
              <div className="grid grid-cols-3 gap-0.5 w-6 h-4 opacity-30">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border border-[#475569]/30"></div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-[6.5px] text-[#9A8878] uppercase tracking-wider">
                  MEMBER ID
                </span>
                <span className="block font-mono text-[9px] text-[#FAF7F2] font-semibold tracking-widest">
                  PC-8842-195
                </span>
              </div>
              <span className="font-poppins text-[7px] text-[#B8923E] font-medium tracking-wider uppercase">
                ACTIVATE NFC SCAN
              </span>
            </div>
          </div>
        </div>

        {/* UPGrade Plan */}
        <button className="w-full bg-[#1C1510] border border-[#B8923E] text-[#B8923E] rounded-xl p-3.5 flex items-center justify-between active:scale-[0.99] transition-all cursor-pointer shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#B8923E]/15 border border-[#B8923E]/30 flex items-center justify-center shrink-0">
              <Gem className="w-4 h-4 text-[#B8923E]" />
            </div>
            <div className="text-left">
              <h4 className="font-poppins text-[10.5px] font-bold text-white uppercase tracking-wide">
                UPGRADE TO ELITE
              </h4>
              <p className="font-poppins text-[9.5px] text-[#9A8878] leading-tight">
                Unlock exclusive benefits and experiences
              </p>
            </div>
          </div>
          <span className="text-[12px]">→</span>
        </button>

       
      </div>

 
    </div>
  );
};

export default Dashboard;
