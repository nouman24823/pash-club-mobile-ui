import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Authorizing premium charge...');
    navigate('/payment-success');
  };

  return (
    <div className="flex-1 flex flex-col justify-between bg-[#FFFFFF] p-4 h-full overflow-y-auto select-none">
      <div>
        {/* Title */}
        <div className="mb-4">
          <span className="text-[9px] font-bold text-[#B8923E] uppercase tracking-widest">
            STEP 02 OF 02
          </span>
          <h1 className="font-poppins text-[14px] font-medium text-[#1C1510] leading-none mb-1">
            Secure Check-out
          </h1>
          <p className="font-poppins text-[10.5px] text-[#9A8878] leading-tight mt-1.5">
            Your transaction is 256-bit encrypted with standard PCI protection protocols.
          </p>
        </div>

        {/* Dynamic Card Preview */}
        <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[#1C1510] to-[#2A1F18] border border-[#B8923E]/30 p-4 flex flex-col justify-between shadow-lg mb-5 text-[#F0EDE8]">
          <div className="flex justify-between items-start">
            <span className="font-poppins text-[10px] tracking-[0.18em] font-semibold text-[#B8923E]">
              PASH·CLUB GOLD
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#B8923E]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="space-y-1">
            <span className="block font-mono text-[13px] tracking-widest">
              {cardNumber || '•••• •••• •••• ••••'}
            </span>
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-[6.5px] uppercase tracking-wider text-[#9A8878]">
                  Cardholder
                </span>
                <span className="block font-poppins text-[9.5px] tracking-wide truncate max-w-[130px]">
                  {name.toUpperCase() || 'YOUR NAME'}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[6.5px] uppercase tracking-wider text-[#9A8878]">
                  Expiry
                </span>
                <span className="block font-mono text-[9.5px]">
                  {expiry || 'MM/YY'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Holder Name */}
          <div>
            <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First & Last Name"
              className="gold-field w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] rounded-lg px-2.5 py-2 font-poppins text-[11.5px] text-[#1C1510]"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-1">
              Card Number
            </label>
            <input
              type="text"
              required
              maxLength="19"
              value={cardNumber}
              onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
              placeholder="4111 2222 3333 4444"
              className="gold-field w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] rounded-lg px-2.5 py-2 font-poppins text-[11.5px] text-[#1C1510]"
            />
          </div>

          {/* Expiry & CVV */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                required
                maxLength="5"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                placeholder="MM/YY"
                className="gold-field w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] rounded-lg px-2.5 py-2 font-poppins text-[11.5px] text-[#1C1510]"
              />
            </div>
            <div>
              <label className="block font-poppins text-[8.5px] font-semibold tracking-[0.12em] uppercase text-[#9A8878] mb-1">
                CVV Code
              </label>
              <input
                type="password"
                required
                maxLength="4"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))}
                placeholder="•••"
                className="gold-field w-full bg-[#FAF7F2] border border-[rgba(184,146,62,0.3)] rounded-lg px-2.5 py-2 font-poppins text-[11.5px] text-[#1C1510]"
              />
            </div>
          </div>

          {/* Secure lock description */}
          <div className="flex items-center gap-1.5 justify-center py-1 mt-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-[#9A8878]">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-[9px] text-[#9A8878] tracking-wide">
              Secure SSL authorization connection
            </span>
          </div>

          <button
            type="submit"
            className="btn-shimmer w-full rounded-lg py-2.5 text-[11px] tracking-[0.12em] uppercase font-semibold text-[#1C1510] cursor-pointer mt-2"
          >
            Authorize Premium Charge
          </button>
        </form>
      </div>

      {/* Charge summary footer */}
      <div className="border-t border-[rgba(184,146,62,0.08)] pt-3.5 mt-4 flex justify-between items-center text-[11px]">
        <span className="text-[#9A8878]">Total membership fees:</span>
        <span className="text-[#1C1510] font-bold text-[13px]">$499.00 USD</span>
      </div>
    </div>
  );
};

export default Payment;
