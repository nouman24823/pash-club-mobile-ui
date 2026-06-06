import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sliders, Bell, Fingerprint, Shield, LogOut, Info, ArrowRight } from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(true);
  const [stealth, setStealth] = useState(false);

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#F0EDE8] h-full overflow-y-auto select-none pb-12">
      <div className="p-4 space-y-4">
        {/* Header Title */}
        <div>
          <span className="text-[9px] text-[#9A8878] uppercase tracking-wider font-semibold">
            SYSTEM CONTROL
          </span>
          <h2 className="font-poppins text-[13px] font-bold text-[#1C1510] leading-none">
            Preferences & Settings
          </h2>
        </div>

        {/* Info list */}
        <div className="bg-white border border-[rgba(184,146,62,0.12)] rounded-2xl p-3.5 space-y-2.5 shadow-sm">
          <div className="flex justify-between items-center text-[9.5px]">
            <span className="text-[#9A8878] font-medium flex items-center gap-1.5">
              <Info size={11} className="text-[#B8923E]" />
              Software Version
            </span>
            <span className="text-[#1C1510] font-mono font-semibold">v1.0.0-Beta</span>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate('/auth')}
          className="w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.22)] text-[#9A1F1F] rounded-xl p-3 flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer font-poppins text-[10.5px] font-bold uppercase tracking-wider"
        >
          <LogOut size={12} />
          Log Out
        </button>
        <button
          onClick={() => navigate('/auth')}
          className="w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.22)] text-[#9A1F1F] rounded-xl p-3 flex items-center justify-center gap-2 active:scale-[0.99] transition-all cursor-pointer font-poppins text-[10.5px] font-bold uppercase tracking-wider"
        >
          <ArrowRight size={12} />
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
