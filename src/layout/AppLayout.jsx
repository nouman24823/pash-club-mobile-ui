import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const AppLayout = () => {
  const location = useLocation();
  
  // Render BottomNav only on core logged-in tab views
  const tabPaths = ['/dashboard', '/discover', '/profile', '/settings'];
  const showBottomNav = tabPaths.includes(location.pathname);

  return (
    <div className="flex-1 flex flex-col h-full bg-white select-none">
      {/* Shared Brand Header */}
      <Header />
      
      {/* Screen Content Wrapper */}
      <main className="flex-1 pb-10 flex flex-col overflow-y-auto">
        <Outlet />
      </main>

      {showBottomNav && <BottomNav />}
    </div>
  );
};

export default AppLayout;
