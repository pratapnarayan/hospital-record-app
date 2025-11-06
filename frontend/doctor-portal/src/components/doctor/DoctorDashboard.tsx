import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Search, Users, FileText, Upload, Bell, LogOut, Plus } from 'lucide-react';
import type { DoctorScreen } from '../DoctorPortal';

interface DoctorDashboardProps {
  onNavigate: (screen: DoctorScreen) => void;
  onViewPatient: (patientId: string) => void;
  onLogout: () => void;
}

export function DoctorDashboard({ onNavigate, onViewPatient, onLogout }: DoctorDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Patients Today', value: '24', icon: Users, color: 'bg-blue-500' },
    { label: 'Pending Prescriptions', value: '8', icon: FileText, color: 'bg-orange-500' },
    { label: 'New Uploads', value: '12', icon: Upload, color: 'bg-green-500' },
  ];

  const recentPatients = [
    { id: '1', name: 'Sarah Johnson', medicalId: 'MED-784932', lastVisit: 'Oct 28, 2025', status: 'Active' },
    { id: '2', name: 'Michael Brown', medicalId: 'MED-892341', lastVisit: 'Oct 27, 2025', status: 'Follow-up' },
    { id: '3', name: 'Emily Davis', medicalId: 'MED-453621', lastVisit: 'Oct 26, 2025', status: 'Active' },
    { id: '4', name: 'Robert Wilson', medicalId: 'MED-678234', lastVisit: 'Oct 25, 2025', status: 'Discharged' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#1976D2] rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-gray-900">Doctor Portal</h1>
                <p className="text-sm text-gray-600">Dr. Michael Chen • Cardiology</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => onNavigate('notifications')}
                className="relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </Button>
              <Avatar>
                <AvatarFallback className="bg-[#1976D2] text-white">MC</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" onClick={onLogout}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Search */}
        <Card className="p-6 mb-8 shadow-md border-0">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Enter Medical ID or Patient Name" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-[#1976D2] hover:bg-[#1565C0]">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button 
              variant="outline"
              onClick={() => onNavigate('add-diagnosis')}
            >
              <Plus className="w-4 h-4 mr-2" />
              New Diagnosis
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 shadow-md border-0">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Patients */}
        <Card className="shadow-md border-0">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-gray-900">Recent Patients</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentPatients.map((patient) => (
              <div 
                key={patient.id}
                className="p-6 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => onViewPatient(patient.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-gray-200 text-gray-700">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-gray-900">{patient.name}</p>
                      <p className="text-sm text-gray-600">{patient.medicalId}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Last Visit</p>
                      <p className="text-sm text-gray-900">{patient.lastVisit}</p>
                    </div>
                    <Badge 
                      variant={patient.status === 'Active' ? 'default' : 'secondary'}
                      className={patient.status === 'Active' ? 'bg-green-500' : ''}
                    >
                      {patient.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
