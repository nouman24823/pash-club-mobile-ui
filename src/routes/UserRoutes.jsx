import { Routes, Route } from 'react-router-dom';
import AppLayout from '../layout/AppLayout';
import Splash from '../pages/splash';
import Welcome from '../pages/welcome';
import AuthSelector from '../pages/auth';
import Login from '../pages/login';
import OTPVerification from '../pages/otp';
import Signup from '../pages/signup';
import ChoosePlan from '../pages/choose-plan';
import Payment from '../pages/payment';
import PaymentSuccess from '../pages/payment-success';
import ProfileSetup from '../pages/profile-setup';
import Dashboard from '../pages/dashboard';
import Discover from '../pages/discover';
import Profile from '../pages/profile';
import Settings from '../pages/settings';

const UserRoutes = () => {
  return (
    <Routes>
      {/* Full screen Splash with no layout header */}
      <Route path="/" element={<Splash />} />

      {/* Routes wrapped in dynamic Header and layout wrapper */}
      <Route element={<AppLayout />}>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/auth" element={<AuthSelector />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/choose-plan" element={<ChoosePlan />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
