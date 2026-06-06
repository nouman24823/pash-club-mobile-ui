import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    navigate('/otp');
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
    

      {/* ─── LOGIN CARD ─── */}
      <form
        onSubmit={handleSubmit}
        className="px-3.5 pt-4 pb-6 flex-1 flex flex-col justify-between"
        style={{
          background: '#FFFFFF',
          borderTop: '0.5px solid rgba(184,146,62,0.2)',
        }}
      >
        <div>
          {/* Welcome heading */}
          <h1 className="font-poppins text-[14px] font-medium text-[#1C1510] leading-none mb-1">
            Welcome Back
          </h1>

          {/* Subtitle */}
          <p className="font-poppins text-[11px] text-[#9A8878] mb-4">
            New here?&nbsp;
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="text-[#B8923E] font-medium hover:underline focus:outline-none cursor-pointer"
            >
              Join the club →
            </button>
          </p>

          {/* ── Email ── */}
          <div className="mb-2.5">
            <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              autoComplete="email"
              required
              className="gold-field w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] rounded-lg px-2.5 py-2 font-poppins text-[11.5px] text-[#1C1510]"
            />
          </div>

          {/* ── Password ── */}
          <div className="mb-2.5">
            <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                autoComplete="current-password"
                required
                className="gold-field w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] rounded-lg pl-2.5 pr-9 py-2 font-poppins text-[11.5px] text-[#1C1510]"
              />
              {/* Eye-toggle icon */}
              <button
                type="button"
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer p-0.5 flex items-center justify-center"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  {showPassword ? (
                    <>
                      <path
                        d="M1 12C1 12 5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"
                        stroke="#B8A898"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="12" r="3" stroke="#B8A898" strokeWidth="1.5" />
                      <line
                        x1="3"
                        y1="3"
                        x2="21"
                        y2="21"
                        stroke="#B8A898"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </>
                  ) : (
                    <>
                      <path
                        d="M1 12C1 12 5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"
                        stroke="#B8A898"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="12" r="3" stroke="#B8A898" strokeWidth="1.5" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <button
              type="button"
              className="font-poppins text-[10px] text-[#B8923E] hover:underline focus:outline-none cursor-pointer font-medium"
            >
              Forgot password?
            </button>
          </div>

          {/* ── CTA Button — gold shimmer ── */}
          <button
            type="submit"
            className="btn-shimmer w-full rounded-lg py-2.5 border-none cursor-pointer mb-3.5 font-poppins text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510]"
          >
            Sign In to Club
          </button>

          {/* ── Divider ── */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 h-[1px] bg-[rgba(184,146,62,0.15)]"></div>
            <span className="font-poppins text-[10px] text-[#9A8878] font-medium whitespace-nowrap">
              or continue with
            </span>
            <div className="flex-1 h-[1px] bg-[rgba(184,146,62,0.15)]"></div>
          </div>

          {/* ── Google SSO ── */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-1.5 rounded-lg py-2.5 cursor-pointer bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] font-poppins text-[11.5px] font-medium text-[#1C1510] mb-3.5 transition-all active:scale-[0.99]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-[#1C1510]">Continue with Google</span>
          </button>
        </div>

        {/* ── Secure badge ── */}
        <div className="flex items-center justify-center gap-1.5 border-t border-[rgba(184,146,62,0.12)] pt-3 mt-auto">
          <svg width="10" height="11" viewBox="0 0 11 13" fill="none">
            <path
              d="M5.5 1L1 3.2V6.5C1 9.5 3 12.1 5.5 12.8 8 12.1 10 9.5 10 6.5V3.2L5.5 1z"
              stroke="#B8A898"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M3.5 6.5l1.5 1.5 2.5-2.5"
              stroke="#B8A898"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-poppins text-[9.5px] text-[#9A8878] font-medium">
            Secure &amp; encrypted connection
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;