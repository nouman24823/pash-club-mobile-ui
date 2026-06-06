import React from "react";

const App = () => {
  return (
    <div className="viewport">
      <div className="phone">
        {/* ── Physical Buttons ── */}
        <div className="btn-vol-up" />
        <div className="btn-vol-down" />
        <div className="btn-power" />

        {/* ── Screen ── */}
        <div className="screen">
          {/* Dynamic Island */}
          <div className="dynamic-island">
            <div className="camera-dot" />
          </div>

          {/* Status Bar */}
          <div className="status-bar">
            <span className="status-time">9:41</span>
            <div className="status-icons">
              <div className="signal">
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className="wifi">▲</span>
              <div className="battery">
                <div className="battery-fill" />
              </div>
            </div>
          </div>

          {/* ── Page Content — import your pages here ── */}
          <div className="page-content">
            Home
          </div>

          {/* Home Indicator */}
          <div className="home-indicator" />
        </div>
      </div>
    </div>
  );
};

export default App;
