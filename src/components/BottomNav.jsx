import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Compass, User, Settings } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  const tabs = [
    { Icon: Home, label: "Home", route: "/dashboard" },
    { Icon: Compass, label: "Discover", route: "/discover" },
    { Icon: User, label: "Profile", route: "/profile" },
    { Icon: Settings, label: "Settings", route: "/settings" },
  ];

  return (
    <div>
      {/* Sleek Bottom Tab Bar Mockup */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[rgba(184,146,62,0.18)] h-11 px-6 flex justify-between items-center z-50">
        {tabs.map((tab, i) => {
          const isActive = path === tab.route;
          return (
            <button
              key={i}
              aria-label={tab.label}
              onClick={() => navigate(tab.route)}
              className={`flex flex-col items-center justify-center cursor-pointer transition-all active:scale-90 p-1.5 rounded-full ${
                isActive
                  ? "text-[#B8923E]"
                  : "text-[#9A8878] hover:text-[#1C1510]"
              }`}
            >
              <tab.Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {isActive && (
                <span className="w-1 h-1 bg-[#B8923E] rounded-full mt-0.5"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
