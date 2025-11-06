import { useState } from 'react';
import { AdminLogin } from './admin/AdminLogin';
import { AdminDashboard } from './admin/AdminDashboard';
import { UserManagement } from './admin/UserManagement';
import { HospitalManagement } from './admin/HospitalManagement';
import { SystemLogs } from './admin/SystemLogs';

export type AdminScreen = 'login' | 'dashboard' | 'users' | 'hospitals' | 'logs';

export function AdminPanel() {
  const [currentScreen, setCurrentScreen] = useState<AdminScreen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('users');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <>
          {currentScreen === 'users' && (
            <UserManagement onNavigate={setCurrentScreen} onLogout={handleLogout} />
          )}
          {currentScreen === 'hospitals' && (
            <HospitalManagement onNavigate={setCurrentScreen} onLogout={handleLogout} />
          )}
          {currentScreen === 'logs' && (
            <SystemLogs onNavigate={setCurrentScreen} onLogout={handleLogout} />
          )}
        </>
      )}
    </div>
  );
}
