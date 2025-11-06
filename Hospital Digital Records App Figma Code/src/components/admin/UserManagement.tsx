import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Users, Search, Plus, LogOut, Building, FileText, Edit, Trash2 } from 'lucide-react';
import type { AdminScreen } from '../AdminPanel';

interface UserManagementProps {
  onNavigate: (screen: AdminScreen) => void;
  onLogout: () => void;
}

export function UserManagement({ onNavigate, onLogout }: UserManagementProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  const users = [
    { id: 1, name: 'Dr. Michael Chen', email: 'michael.chen@hospital.com', role: 'Doctor', hospital: 'City General Hospital', status: 'Active' },
    { id: 2, name: 'Dr. Sarah Williams', email: 'sarah.w@hospital.com', role: 'Doctor', hospital: 'St. Mary Medical Center', status: 'Active' },
    { id: 3, name: 'Sarah Johnson', email: 'sarah.j@email.com', role: 'Patient', hospital: '-', status: 'Active' },
    { id: 4, name: 'Michael Brown', email: 'michael.b@email.com', role: 'Patient', hospital: '-', status: 'Active' },
    { id: 5, name: 'Admin User', email: 'admin@system.com', role: 'Admin', hospital: 'System', status: 'Active' },
    { id: 6, name: 'Dr. James Anderson', email: 'james.a@hospital.com', role: 'Doctor', hospital: 'City General Hospital', status: 'Inactive' },
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
            variant="default"
            className="w-full justify-start bg-[#1976D2]"
            onClick={() => onNavigate('users')}
          >
            <Users className="w-4 h-4 mr-2" />
            Users
          </Button>
          <Button 
            variant="ghost"
            className="w-full justify-start"
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
          <h1 className="text-gray-900 mb-2">User Management</h1>
          <p className="text-gray-600">Manage system users, roles, and permissions</p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 shadow-md border-0">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search by name or email" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="doctor">Doctors</SelectItem>
                <SelectItem value="patient">Patients</SelectItem>
                <SelectItem value="admin">Admins</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-[#1976D2] hover:bg-[#1565C0]">
              <Plus className="w-4 h-4 mr-2" />
              Add User
            </Button>
          </div>
        </Card>

        {/* Users Table */}
        <Card className="shadow-md border-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Hospital</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-gray-200 text-gray-700">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary"
                      className={
                        user.role === 'Admin' ? 'bg-purple-100 text-purple-700' :
                        user.role === 'Doctor' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-900">{user.hospital}</span>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.status === 'Active' ? 'default' : 'secondary'}
                      className={user.status === 'Active' ? 'bg-green-500' : ''}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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
