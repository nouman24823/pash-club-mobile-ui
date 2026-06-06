import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Gem } from 'lucide-react';

const ChoosePlan = () => {
  const navigate = useNavigate();
  const basePrice = 50;

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFFFF] p-4 h-full overflow-y-auto select-none">
      <div>
        {/* Title */}
        <div className="mb-6">
          <span className="text-[9px] font-bold text-[#B8923E] uppercase tracking-widest">
            STEP 01 OF 02
          </span>
          <h1 className="font-poppins text-[14px] font-medium text-[#1C1510] leading-none mb-1">
            Membership Plan
          </h1>
          <p className="font-poppins text-[10.5px] text-[#9A8878] leading-tight mt-1.5">
            Activate your official Basic Membership pass to enter the exclusive PASH·CLUB.
          </p>
        </div>

        {/* The 1 Basic Plan Card */}
        <div className="relative rounded-xl p-5 border border-[#B8923E] bg-[#FAF7F2] shadow-sm">
          <span className="absolute -top-1.5 right-4 bg-[#B8923E] text-white text-[7.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
            Standard Tier
          </span>

          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#B8923E]" />
                <h3 className="font-poppins text-[13px] font-bold uppercase tracking-wide text-[#1C1510]">
                  Basic Membership
                </h3>
              </div>
              <p className="font-poppins text-[10px] text-[#9A8878] mt-1 max-w-[190px] leading-tight">
                Essential entry-pass to private partner directories, curated benefits, and standard concierge support.
              </p>
            </div>

            <div className="text-right">
              <span className="font-poppins text-[16px] font-bold text-[#1C1510]">
                ${basePrice}
              </span>
             
            </div>
          </div>

          {/* Features */}
          <div className="border-t border-[rgba(184,146,62,0.12)] pt-3.5 space-y-2">
            <div className="flex items-center gap-2.5">
              <Gem size={11} className="text-[#B8923E]" />
              <span className="font-poppins text-[10px] text-[#1C1510] font-medium">
                Curated boutique hotel perks & upgrades
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Gem size={11} className="text-[#B8923E]" />
              <span className="font-poppins text-[10px] text-[#1C1510] font-medium">
                Access to private local dining reservation lines
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Gem size={11} className="text-[#B8923E]" />
              <span className="font-poppins text-[10px] text-[#1C1510] font-medium">
                Standard digital concierge and email assistance
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Button CTA */}
      <div className="pt-4 mt-4 border-t border-[rgba(184,146,62,0.08)]">
        <div className="flex justify-between items-center mb-3.5 px-1 text-[11px]">
          <span className="text-[#9A8878] font-medium">Total:</span>
          <span className="text-[#1C1510] font-bold text-[14px]">${basePrice}.00 USD</span>
        </div>
        
        <button
          onClick={() => navigate('/payment')}
          className="btn-shimmer w-full rounded-lg py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510] cursor-pointer"
        >
          Proceed to Secure Payment
        </button>
      </div>
    </div>
  );
};

export default ChoosePlan;
