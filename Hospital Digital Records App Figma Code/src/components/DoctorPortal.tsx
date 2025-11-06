import { useState } from 'react';
import { DoctorLogin } from './doctor/DoctorLogin';
import { DoctorDashboard } from './doctor/DoctorDashboard';
import { PatientRecordViewer } from './doctor/PatientRecordViewer';
import { AddDiagnosis } from './doctor/AddDiagnosis';
import { DoctorNotifications } from './doctor/DoctorNotifications';

export type DoctorScreen = 'login' | 'dashboard' | 'patient-record' | 'add-diagnosis' | 'notifications';

export function DoctorPortal() {
  const [currentScreen, setCurrentScreen] = useState<DoctorScreen>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
  };

  const handleViewPatient = (patientId: string) => {
    setSelectedPatientId(patientId);
    setCurrentScreen('patient-record');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? (
        <DoctorLogin onLogin={handleLogin} />
      ) : (
        <>
          {currentScreen === 'dashboard' && (
            <DoctorDashboard 
              onNavigate={setCurrentScreen} 
              onViewPatient={handleViewPatient}
              onLogout={handleLogout}
            />
          )}
          {currentScreen === 'patient-record' && (
            <PatientRecordViewer 
              patientId={selectedPatientId}
              onNavigate={setCurrentScreen}
            />
          )}
          {currentScreen === 'add-diagnosis' && (
            <AddDiagnosis onNavigate={setCurrentScreen} />
          )}
          {currentScreen === 'notifications' && (
            <DoctorNotifications onNavigate={setCurrentScreen} />
          )}
        </>
      )}
    </div>
  );
}
