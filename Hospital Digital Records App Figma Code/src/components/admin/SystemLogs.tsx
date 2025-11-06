import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Users, Search, LogOut, Building, FileText, Download, Filter } from 'lucide-react';
import type { AdminScreen } from '../AdminPanel';
import { ShieldCheck } from 'lucide-react';

interface SystemLogsProps {
  onNavigate: (screen: AdminScreen) => void;
  onLogout: () => void;
}

export function SystemLogs({ onNavigate, onLogout }: SystemLogsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [actionFilter, setActionFilter] = useState('all');

  const logs = [
    {
      id: 1,
      timestamp: '2025-11-02 14:32:15',
      user: 'Dr. Michael Chen',
      action: 'View Patient Record',
      details: 'Accessed record for Sarah Johnson (MED-784932)',
      type: 'access',
      ip: '192.168.1.45',
    },
    {
      id: 2,
      timestamp: '2025-11-02 14:28:03',
      user: 'Sarah Johnson',
      action: 'Upload Document',
      details: 'Uploaded prescription document',
      type: 'upload',
      ip: '192.168.1.112',
    },
    {
      id: 3,
      timestamp: '2025-11-02 14:15:22',
      user: 'Admin User',
      action: 'User Created',
      details: 'Created new doctor account for Dr. James Anderson',
      type: 'admin',
      ip: '192.168.1.10',
    },
    {
      id: 4,
      timestamp: '2025-11-02 13:45:18',
      user: 'Dr. Sarah Williams',
      action: 'Add Diagnosis',
      details: 'Added diagnosis for Michael Brown (MED-892341)',
      type: 'modify',
      ip: '192.168.1.67',
    },
    {
      id: 5,
      timestamp: '2025-11-02 13:22:56',
      user: 'Michael Brown',
      action: 'Login',
      details: 'Patient login successful',
      type: 'auth',
      ip: '192.168.1.89',
    },
    {
      id: 6,
      timestamp: '2025-11-02 12:58:41',
      user: 'Admin User',
      action: 'Hospital Approved',
      details: 'Approved Valley Health Center registration',
      type: 'admin',
      ip: '192.168.1.10',
    },
    {
      id: 7,
      timestamp: '2025-11-02 12:35:29',
      user: 'Dr. Michael Chen',
      action: 'Download Report',
      details: 'Downloaded lab report for Emily Davis',
      type: 'access',
      ip: '192.168.1.45',
    },
    {
      id: 8,
      timestamp: '2025-11-02 11:18:33',
      user: 'Unknown',
      action: 'Failed Login',
      details: 'Failed login attempt for username: admin123',
      type: 'security',
      ip: '192.168.1.200',
    },
  ];

  const getActionColor = (type: string) => {
    switch (type) {
      case 'access': return 'bg-blue-100 text-blue-700';
      case 'upload': return 'bg-green-100 text-green-700';
      case 'modify': return 'bg-orange-100 text-orange-700';
      case 'admin': return 'bg-purple-100 text-purple-700';
      case 'auth': return 'bg-gray-100 text-gray-700';
      case 'security': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

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
            variant="ghost"
            className="w-full justify-start"
            onClick={() => onNavigate('hospitals')}
          >
            <Building className="w-4 h-4 mr-2" />
            Hospitals
          </Button>
          <Button 
            variant="default"
            className="w-full justify-start bg-[#1976D2]"
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
          <h1 className="text-gray-900 mb-2">System Logs</h1>
          <p className="text-gray-600">Audit trail of all system activities</p>
        </div>

        {/* Filters */}
        <Card className="p-6 mb-6 shadow-md border-0">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Search logs by user or action" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={actionFilter} onValueChange={setActionFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="access">Access</SelectItem>
                <SelectItem value="upload">Uploads</SelectItem>
                <SelectItem value="modify">Modifications</SelectItem>
                <SelectItem value="admin">Admin Actions</SelectItem>
                <SelectItem value="auth">Authentication</SelectItem>
                <SelectItem value="security">Security Events</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </Card>

        {/* Logs List */}
        <Card className="shadow-md border-0">
          <div className="divide-y divide-gray-200">
            {logs.map((log) => (
              <div key={log.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className={getActionColor(log.type)}>
                        {log.action}
                      </Badge>
                      <span className="text-sm text-gray-900">{log.user}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{log.details}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{log.timestamp}</span>
                      <span>•</span>
                      <span>IP: {log.ip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Info Card */}
        <Card className="mt-6 p-4 bg-blue-50 border-blue-200">
          <div className="flex gap-3">
            <FileText className="w-5 h-5 text-[#1976D2] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-900 mb-1">Audit Logs Retention</p>
              <p className="text-xs text-gray-600">
                System logs are retained for 90 days for compliance purposes. All user actions are tracked and timestamped for security auditing.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
