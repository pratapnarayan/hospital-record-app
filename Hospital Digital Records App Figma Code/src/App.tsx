import { useState } from 'react';
import { PatientApp } from './components/PatientApp';
import { DoctorPortal } from './components/DoctorPortal';
import { AdminPanel } from './components/AdminPanel';
import { Button } from './components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Smartphone, Stethoscope, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'patient' | 'doctor' | 'admin'>('patient');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* View Switcher - for demo purposes */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-gray-900">Hospital Digital Records System</h1>
            <div className="text-sm text-gray-500">Demo Mode</div>
          </div>
          <Tabs value={activeView} onValueChange={(v) => setActiveView(v as any)} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="patient" className="flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Patient App
              </TabsTrigger>
              <TabsTrigger value="doctor" className="flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                Doctor Portal
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Admin Panel
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Active View */}
      <div className="w-full">
        {activeView === 'patient' && <PatientApp />}
        {activeView === 'doctor' && <DoctorPortal />}
        {activeView === 'admin' && <AdminPanel />}
      </div>
    </div>
  );
}
