import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Switch } from '../ui/switch';
import { Users, Search, Plus, LogOut, Building, FileText, Edit, MapPin, Phone } from 'lucide-react';
import type { AdminScreen } from '../AdminPanel';
import { ShieldCheck } from 'lucide-react';

interface HospitalManagementProps {
  onNavigate: (screen: AdminScreen) => void;
  onLogout: () => void;
}

export function HospitalManagement({ onNavigate, onLogout }: HospitalManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const hospitals = [
    {
      id: 1,
      name: 'City General Hospital',
      location: 'San Francisco, CA',
      phone: '+1 (555) 100-2000',
      doctors: 45,
      patients: 1240,
      approved: true,
    },
    {
      id: 2,
      name: 'St. Mary Medical Center',
      location: 'Los Angeles, CA',
      phone: '+1 (555) 200-3000',
      doctors: 38,
      patients: 890,
      approved: true,
    },
    {
      id: 3,
      name: 'Memorial Hospital',
      location: 'San Diego, CA',
      phone: '+1 (555) 300-4000',
      doctors: 52,
      patients: 1580,
      approved: true,
    },
    {
      id: 4,
      name: 'Valley Health Center',
      location: 'Sacramento, CA',
      phone: '+1 (555) 400-5000',
      doctors: 28,
      patients: 650,
      approved: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#1976D2] rounded-lg flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-gray-900">Admin</h2>
            <p className="text-xs text-gray-600">System Panel</p>
          </div>
        </div>

        <nav className="space-y-2">
          <Button 
            variant="ghost"
            className="w-full justify-start"
            onClick={() => onNavigate('users')}
          >
            <Users className="w-4 h-4 mr-2" />
            Users
          </Button>
          <Button 
            variant="default"
            className="w-full justify-start bg-[#1976D2]"
            onClick={() => onNavigate('hospitals')}
          >
            <Building className="w-4 h-4 mr-2" />
            Hospitals
          </Button>
          <Button 
            variant="ghost"
            className="w-full justify-start"
            onClick={() => onNavigate('logs')}
          >
            <FileText className="w-4 h-4 mr-2" />
            System Logs
          </Button>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={onLogout}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Hospital Management</h1>
          <p className="text-gray-600">Manage registered hospitals and approval status</p>
        </div>

        {/* Search and Actions */}
        <Card className="p-6 mb-6 shadow-md border-0">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search hospitals" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-[#1976D2] hover:bg-[#1565C0]">
              <Plus className="w-4 h-4 mr-2" />
              Add Hospital
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6 shadow-md border-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{hospitals.filter(h => h.approved).length}</p>
                <p className="text-sm text-gray-600">Active Hospitals</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 shadow-md border-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{hospitals.reduce((sum, h) => sum + h.doctors, 0)}</p>
                <p className="text-sm text-gray-600">Total Doctors</p>
              </div>
            </div>
          </Card>
          <Card className="p-6 shadow-md border-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl text-gray-900">{hospitals.filter(h => !h.approved).length}</p>
                <p className="text-sm text-gray-600">Pending Approval</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Hospitals Table */}
        <Card className="shadow-md border-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hospital</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Doctors</TableHead>
                <TableHead>Patients</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hospitals.map((hospital) => (
                <TableRow key={hospital.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Building className="w-5 h-5 text-[#1976D2]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">{hospital.name}</p>
                        <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                          <MapPin className="w-3 h-3" />
                          {hospital.location}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-gray-900">
                      <Phone className="w-3 h-3" />
                      {hospital.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-900">{hospital.doctors}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-900">{hospital.patients}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Switch checked={hospital.approved} />
                      <Badge 
                        variant={hospital.approved ? 'default' : 'secondary'}
                        className={hospital.approved ? 'bg-green-500' : ''}
                      >
                        {hospital.approved ? 'Approved' : 'Pending'}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
