import React from 'react';
import { User, ShieldCheck, Mail, Phone, Calendar, Key } from 'lucide-react';

const Profile = () => {
  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F0EDE8] h-full overflow-y-auto select-none pb-12">
      <div className="p-4 space-y-4">
        {/* Header Title */}
        <div>
          <span className="text-[9px] text-[#9A8878] uppercase tracking-wider font-semibold">
            YOUR IDENTITY
          </span>
          <h2 className="font-poppins text-[13px] font-bold text-[#1C1510] leading-none">
            Member Profile
          </h2>
        </div>

        {/* Profile Card Summary */}
        <div className="bg-white border border-[rgba(184,146,62,0.12)] rounded-2xl p-4 flex flex-col items-center text-center shadow-sm">
          {/* Avatar representation */}
          <div className="w-14 h-14 rounded-full border border-[#B8923E]/30 bg-[#FAF7F2] flex items-center justify-center mb-2.5 relative">
            <User size={24} className="text-[#B8923E]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#15803D] border-2 border-white rounded-full"></div>
          </div>
          
          <h3 className="font-poppins text-[12.5px] font-bold text-[#1C1510] tracking-wide">
            NOUMAN A.
          </h3>
          <span className="text-[8.5px] font-mono font-bold text-[#B8923E] uppercase tracking-widest mt-0.5 bg-[#FAF7F2] px-2.5 py-0.5 rounded-full border border-[#B8923E]/10">
            Basic Member Pass
          </span>
        </div>

        {/* Account Details list */}
        <div className="bg-white border border-[rgba(184,146,62,0.12)] rounded-2xl p-3.5 space-y-3 shadow-sm">
          <h4 className="font-poppins text-[9.5px] font-bold text-[#1C1510] uppercase tracking-wider mb-1.5">
            Personal Credentials
          </h4>

          {/* Mail info */}
          <div className="flex items-center gap-3 text-[10.5px]">
            <Mail size={12} className="text-[#9A8878] shrink-0" />
            <div className="text-left">
              <span className="block text-[7.5px] text-[#9A8878] uppercase leading-none">Registered Email</span>
              <span className="font-medium text-[#1C1510]">nouman@pash.club</span>
            </div>
          </div>

          {/* Phone info */}
          <div className="flex items-center gap-3 text-[10.5px] border-t border-[rgba(184,146,62,0.05)] pt-2.5">
            <Phone size={12} className="text-[#9A8878] shrink-0" />
            <div className="text-left">
              <span className="block text-[7.5px] text-[#9A8878] uppercase leading-none">Private Line</span>
              <span className="font-medium text-[#1C1510]">+1 (555) 019-2834</span>
            </div>
          </div>

          {/* Member since info */}
          <div className="flex items-center gap-3 text-[10.5px] border-t border-[rgba(184,146,62,0.05)] pt-2.5">
            <Calendar size={12} className="text-[#9A8878] shrink-0" />
            <div className="text-left">
              <span className="block text-[7.5px] text-[#9A8878] uppercase leading-none">Enrolled Since</span>
              <span className="font-medium text-[#1C1510]">June 2026</span>
            </div>
          </div>

          {/* NFC key info */}
          <div className="flex items-center gap-3 text-[10.5px] border-t border-[rgba(184,146,62,0.05)] pt-2.5">
            <Key size={12} className="text-[#9A8878] shrink-0" />
            <div className="text-left">
              <span className="block text-[7.5px] text-[#9A8878] uppercase leading-none">Digital NFC Key</span>
              <span className="font-mono font-bold text-[#15803D] text-[9.5px]">ACTIVE & SECURED</span>
            </div>
          </div>
        </div>

        {/* Security badge footer */}
        <div className="flex items-center gap-1.5 justify-center py-1">
          <ShieldCheck size={11} className="text-[#9A8878]" />
          <span className="text-[8.5px] text-[#9A8878] font-medium uppercase tracking-wider">
            Identity Encrypted & Handled under GDPR
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
