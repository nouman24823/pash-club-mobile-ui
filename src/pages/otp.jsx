import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = code.join('');
    console.log('Verifying OTP Code:', otpString);
    // Go to Create Account (/signup) to showcase the new-user experience
    navigate('/signup');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFFFF] p-5 h-full select-none">
      <div>
        {/* Title */}
        <div className="mb-6">
          <h1 className="font-poppins text-[14px] font-medium text-[#1C1510] leading-none mb-1">
            Verification Code
          </h1>
          <p className="font-poppins text-[11px] text-[#9A8878] leading-tight mt-1.5">
            We have sent a 6-digit security code to your registered mobile or email.
          </p>
        </div>

        {/* Inputs */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between gap-1.5">
            {code.map((num, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                maxLength="1"
                value={num}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                required
                className="w-10 h-11 text-center bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] focus:border-[#B8923E] focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#B8923E]/15 rounded-lg font-poppins text-[16px] font-bold text-[#1C1510] focus:outline-none transition-all"
              />
            ))}
          </div>

          <div className="text-center">
            {timer > 0 ? (
              <p className="font-poppins text-[10px] text-[#9A8878]">
                Resend code in <span className="text-[#B8923E] font-medium">0:{timer < 10 ? `0${timer}` : timer}</span>
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setTimer(59)}
                className="font-poppins text-[10px] text-[#B8923E] font-semibold hover:underline cursor-pointer"
              >
                Resend Code
              </button>
            )}
          </div>

          {/* CTA */}
          <button
            type="submit"
            className="btn-shimmer w-full rounded-lg py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510] cursor-pointer mt-2"
          >
            Verify Security Code
          </button>
        </form>
      </div>

      {/* Numerical Keypad Representation */}
      <div className="border-t border-[rgba(184,146,62,0.1)] pt-4 mt-auto">
        <div className="grid grid-cols-3 gap-y-3.5 gap-x-6 text-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => {
                const emptyIdx = code.findIndex((c) => c === '');
                if (emptyIdx !== -1) handleChange(emptyIdx, val.toString());
              }}
              className="py-1 text-[14px] font-poppins font-medium text-[#1C1510] active:bg-[#FAF7F2] rounded-lg cursor-pointer select-none"
            >
              {val}
            </button>
          ))}
          <button
            type="button"
            className="py-1 text-[11px] text-[#9A8878] active:bg-[#FAF7F2] rounded-lg cursor-pointer flex items-center justify-center select-none"
            onClick={() => setCode(['', '', '', '', '', ''])}
          >
            Clear
          </button>
          <button
            type="button"
            onClick={() => {
              const emptyIdx = code.findIndex((c) => c === '');
              if (emptyIdx !== -1) handleChange(emptyIdx, '0');
              else if (code[5] === '') handleChange(5, '0');
            }}
            className="py-1 text-[14px] font-poppins font-medium text-[#1C1510] active:bg-[#FAF7F2] rounded-lg cursor-pointer select-none"
          >
            0
          </button>
          <button
            type="button"
            className="py-1 text-[11px] text-[#9A8878] active:bg-[#FAF7F2] rounded-lg cursor-pointer flex items-center justify-center select-none"
            onClick={() => {
              const lastFilledIdx = [...code].reverse().findIndex((c) => c !== '');
              if (lastFilledIdx !== -1) {
                const actualIdx = 5 - lastFilledIdx;
                const newCode = [...code];
                newCode[actualIdx] = '';
                setCode(newCode);
                if (actualIdx > 0) document.getElementById(`otp-${actualIdx - 1}`).focus();
              }
            }}
          >
            ⌫
          </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
