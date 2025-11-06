import { useState } from 'react';
import { PatientLogin } from './patient/PatientLogin';
import { PatientDashboard } from './patient/PatientDashboard';
import { MedicalHistory } from './patient/MedicalHistory';
import { UploadPrescription } from './patient/UploadPrescription';
import { PatientProfile } from './patient/PatientProfile';

export type PatientScreen = 'login' | 'dashboard' | 'history' | 'upload' | 'profile';

export function PatientApp() {
  const [currentScreen, setCurrentScreen] = useState<PatientScreen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
  };

  // Mobile-first container
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden" style={{ minHeight: '667px', maxHeight: '844px' }}>
        {!isLoggedIn ? (
          <PatientLogin onLogin={handleLogin} />
        ) : (
          <>
            {currentScreen === 'dashboard' && <PatientDashboard onNavigate={setCurrentScreen} />}
            {currentScreen === 'history' && <MedicalHistory onNavigate={setCurrentScreen} />}
            {currentScreen === 'upload' && <UploadPrescription onNavigate={setCurrentScreen} />}
            {currentScreen === 'profile' && <PatientProfile onNavigate={setCurrentScreen} onLogout={handleLogout} />}
          </>
        )}
      </div>
    </div>
  );
}
