import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { ChevronLeft, User, Mail, Phone, MapPin, CreditCard, LogOut, ChevronRight, Shield } from 'lucide-react';
import type { PatientScreen } from '../PatientApp';

interface PatientProfileProps {
  onNavigate: (screen: PatientScreen) => void;
  onLogout: () => void;
}

export function PatientProfile({ onNavigate, onLogout }: PatientProfileProps) {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] p-6 text-white">
        <div className="flex items-center gap-3 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20"
            onClick={() => onNavigate('dashboard')}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-white">Profile</h2>
        </div>

        {/* Profile Header */}
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-white">
            <AvatarFallback className="bg-white text-[#1976D2]">SJ</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-white">Sarah Johnson</h3>
            <p className="text-blue-100 text-sm">MED-784932</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-gray-900 mb-3">Personal Information</h3>
          <Card className="divide-y divide-gray-200 shadow-sm">
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Full Name</p>
                <p className="text-sm text-gray-900">Sarah Johnson</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm text-gray-900">sarah.johnson@email.com</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm text-gray-900">+1 (555) 123-4567</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Address</p>
                <p className="text-sm text-gray-900">123 Main St, San Francisco, CA</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </Card>
        </div>

        {/* Health Information */}
        <div>
          <h3 className="text-gray-900 mb-3">Health Information</h3>
          <Card className="divide-y divide-gray-200 shadow-sm">
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Health Insurance</p>
                <p className="text-sm text-gray-900">Blue Cross - Plan #12345</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-500">Blood Type</p>
                <p className="text-sm text-gray-900">O+</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </Card>
        </div>

        {/* Actions */}
        <div className="space-y-3 pt-4">
          <Button variant="outline" className="w-full justify-start">
            <Shield className="w-5 h-5 mr-2" />
            Privacy Settings
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
            onClick={onLogout}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
