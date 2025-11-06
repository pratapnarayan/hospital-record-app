import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { FileText, Upload, Calendar, Pill, User, Home } from 'lucide-react';
import type { PatientScreen } from '../PatientApp';

interface PatientDashboardProps {
  onNavigate: (screen: PatientScreen) => void;
}

export function PatientDashboard({ onNavigate }: PatientDashboardProps) {
  const quickActions = [
    { icon: FileText, label: 'My Records', screen: 'history' as PatientScreen, color: 'bg-blue-500' },
    { icon: Upload, label: 'Upload Prescription', screen: 'upload' as PatientScreen, color: 'bg-green-500' },
    { icon: Calendar, label: 'Appointments', screen: 'dashboard' as PatientScreen, color: 'bg-purple-500' },
    { icon: Pill, label: 'Medications', screen: 'dashboard' as PatientScreen, color: 'bg-orange-500' },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-blue-100 text-sm">Welcome back,</p>
            <h2 className="text-white mt-1">Sarah Johnson</h2>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20"
            onClick={() => onNavigate('profile')}
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <p className="text-blue-100 text-sm mb-1">Medical ID</p>
          <p className="text-white">MED-784932</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <Card 
                key={index}
                className="p-4 cursor-pointer hover:shadow-lg transition-shadow border-0 shadow-md"
                onClick={() => onNavigate(action.screen)}
              >
                <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-3`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-900">{action.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <Card className="p-4 border-l-4 border-l-blue-500 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-900">Annual Checkup</p>
                  <p className="text-xs text-gray-500 mt-1">Dr. Michael Chen • Cardiology</p>
                </div>
                <span className="text-xs text-gray-500">Oct 28</span>
              </div>
            </Card>
            <Card className="p-4 border-l-4 border-l-green-500 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-900">Blood Test Results</p>
                  <p className="text-xs text-gray-500 mt-1">Lab Report uploaded</p>
                </div>
                <span className="text-xs text-gray-500">Oct 25</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div>
          <h3 className="text-gray-900 mb-4">Upcoming</h3>
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#1976D2] rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-900">Follow-up Visit</p>
                <p className="text-xs text-gray-600 mt-1">Nov 5, 2025 • 10:30 AM</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center justify-around">
          <Button variant="ghost" size="sm" className="flex-col h-auto gap-1 text-[#1976D2]">
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-col h-auto gap-1" onClick={() => onNavigate('history')}>
            <FileText className="w-5 h-5" />
            <span className="text-xs">Records</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-col h-auto gap-1" onClick={() => onNavigate('upload')}>
            <Upload className="w-5 h-5" />
            <span className="text-xs">Upload</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-col h-auto gap-1" onClick={() => onNavigate('profile')}>
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
