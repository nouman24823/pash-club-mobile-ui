import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  // Define smart back button destinations for each flow stage
  const backPaths = {
    '/otp': '/login',
    '/signup': '/auth',
    '/choose-plan': '/signup',
    '/payment': '/choose-plan'
  };

  const showBackButton = !!backPaths[path];
  const targetBackPath = backPaths[path];

  return (
    <header className="hdr sticky top-0 z-50 bg-[#FBF8F3]/92 backdrop-blur-[22px] border-b border-[rgba(184,146,62,0.28)]">
      <div className="flex items-center justify-between px-3.5 h-11">
        {/* Left — Back button or brand icon */}
        {showBackButton ? (
          <button
            type="button"
            aria-label="Go back"
            onClick={() => navigate(targetBackPath)}
            className="w-7 h-7 flex items-center justify-center rounded-full transition-all active:scale-95 cursor-pointer"
            style={{
              background: 'rgba(184,146,62,0.1)',
              border: '0.5px solid rgba(184,146,62,0.22)',
            }}
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 2L4 7L9 12"
                stroke="#B8923E"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ) : (
          <div className="w-7 h-7 flex items-center justify-center rounded-full animate-none" style={{ background: 'rgba(184,146,62,0.05)' }}>
            <span className="text-[10px] font-bold" style={{ color: '#B8923E' }}>P</span>
          </div>
        )}

        {/* Centre — logotype */}
        <span
          className="font-poppins text-xs font-bold uppercase tracking-[0.18em] select-none"
          style={{ color: '#B8923E' }}
        >
          PASH·CLUB
        </span>

        <div></div>
      </div>
    </header>
  );
};

export default Header;
