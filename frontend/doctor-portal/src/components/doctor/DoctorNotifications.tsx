import * as React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, Upload, FileText, Calendar } from 'lucide-react';
import type { DoctorScreen } from '../DoctorPortal';

interface DoctorNotificationsProps {
  onNavigate: (screen: DoctorScreen) => void;
}

export function DoctorNotifications({ onNavigate }: DoctorNotificationsProps) {
  const notifications = [
    {
      id: 1,
      type: 'upload',
      icon: Upload,
      color: 'bg-green-500',
      title: 'New prescription uploaded',
      message: 'Sarah Johnson uploaded a new prescription document',
      time: '10 minutes ago',
      unread: true,
    },
    {
      id: 2,
      type: 'upload',
      icon: Upload,
      color: 'bg-green-500',
      title: 'Lab results available',
      message: 'Michael Brown\'s blood test results are ready for review',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      type: 'appointment',
      icon: Calendar,
      color: 'bg-blue-500',
      title: 'Upcoming appointment',
      message: 'Emily Davis has an appointment scheduled for tomorrow at 10:30 AM',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 4,
      type: 'document',
      icon: FileText,
      color: 'bg-purple-500',
      title: 'Document signed',
      message: 'Treatment consent form signed by Robert Wilson',
      time: 'Yesterday',
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onNavigate('dashboard')}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <h1 className="text-gray-900">Notifications</h1>
            </div>
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id}
              className={`p-4 cursor-pointer hover:shadow-md transition-shadow ${
                notification.unread ? 'bg-blue-50 border-blue-200' : 'bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 ${notification.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <notification.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm text-gray-900">{notification.title}</p>
                    {notification.unread && (
                      <Badge className="bg-[#1976D2] ml-2">New</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
