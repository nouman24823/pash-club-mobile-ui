import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState('gold');
  const [preferences, setPreferences] = useState(['dining', 'rsvp']);
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const togglePreference = (pref) => {
    if (preferences.includes(pref)) {
      setPreferences(preferences.filter((p) => p !== pref));
    } else {
      setPreferences([...preferences, pref]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile setup complete:', { avatar, preferences, dob, phone });
    navigate('/dashboard');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFFFF] p-4 h-full overflow-y-auto select-none">
      <div>
        {/* Title */}
        <div className="mb-4">
          <span className="text-[9px] font-bold text-[#B8923E] uppercase tracking-widest">
            PROFILE PERSONALIZATION
          </span>
          <h1 className="font-poppins text-[14px] font-medium text-[#1C1510] leading-none mb-1">
            Tailor Your Privilege
          </h1>
          <p className="font-poppins text-[10.5px] text-[#9A8878] leading-tight mt-1.5">
            Personalize your interests so our private concierge agents can curate events for you.
          </p>
        </div>

        {/* Profile Avatar Selection */}
        <div className="flex flex-col items-center gap-2.5 mb-5">
          <div className="relative w-16 h-16 rounded-full border border-[#B8923E]/30 bg-[#FAF7F2] flex items-center justify-center overflow-hidden">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#B8923E]">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#B8923E] border border-white rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-white text-[9px] font-bold">+</span>
            </div>
          </div>
          <span className="font-poppins text-[10px] text-[#9A8878]">Upload Digital Portrait</span>
        </div>

        {/* Onboarding Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Phone Details */}
          <div>
            <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-1">
              Private Phone Line
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 019-2834"
              className="gold-field w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] rounded-lg px-2.5 py-2 font-poppins text-[11.5px] text-[#1C1510]"
            />
          </div>

          {/* DOB Details */}
          <div>
            <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              required
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="gold-field w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] rounded-lg px-2.5 py-2 font-poppins text-[11.5px] text-[#1C1510]"
            />
          </div>

          {/* Interests Preferences Selection */}
          <div>
            <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-2">
              Privilege Focus Areas
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'travel', label: 'VIP Travel' },
                { id: 'dining', label: 'Fine Dining' },
                { id: 'aviation', label: 'Private Aviation' },
                { id: 'estates', label: 'Exclusive Estates' },
                { id: 'rsvp', label: 'Private RSVP Events' },
                { id: 'art', label: 'High Art & Auctions' },
              ].map((item) => {
                const isActive = preferences.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => togglePreference(item.id)}
                    className={`text-left px-2.5 py-2 rounded-lg border font-poppins text-[10px] font-medium tracking-wide transition-all ${
                      isActive
                        ? 'border-[#B8923E] bg-[#FAF7F2] text-[#1C1510]'
                        : 'border-[rgba(184,146,62,0.12)] bg-[#FFFFFF] text-[#9A8878]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-[#B8923E] rounded-full"></span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="btn-shimmer w-full rounded-lg py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510] cursor-pointer mt-4"
          >
            Launch PASH·CLUB Pass
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;
