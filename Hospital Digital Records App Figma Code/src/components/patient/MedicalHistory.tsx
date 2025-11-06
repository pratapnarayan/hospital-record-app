import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ChevronLeft, FileText, Calendar, User as UserIcon, Download } from 'lucide-react';
import type { PatientScreen } from '../PatientApp';

interface MedicalHistoryProps {
  onNavigate: (screen: PatientScreen) => void;
}

export function MedicalHistory({ onNavigate }: MedicalHistoryProps) {
  const [filter, setFilter] = useState('all');

  const records = [
    {
      id: 1,
      date: 'Oct 28, 2025',
      type: 'Consultation',
      title: 'Annual Physical Checkup',
      doctor: 'Dr. Michael Chen',
      department: 'Cardiology',
      diagnosis: 'Routine checkup - All vitals normal',
      files: 2,
    },
    {
      id: 2,
      date: 'Oct 25, 2025',
      type: 'Lab Report',
      title: 'Blood Test - Complete Panel',
      doctor: 'Lab Technician',
      department: 'Laboratory',
      diagnosis: 'All results within normal range',
      files: 1,
    },
    {
      id: 3,
      date: 'Sep 15, 2025',
      type: 'Prescription',
      title: 'Seasonal Allergies Treatment',
      doctor: 'Dr. Sarah Williams',
      department: 'General Medicine',
      diagnosis: 'Allergic rhinitis - Prescribed antihistamines',
      files: 1,
    },
    {
      id: 4,
      date: 'Aug 10, 2025',
      type: 'Imaging',
      title: 'Chest X-Ray',
      doctor: 'Dr. James Anderson',
      department: 'Radiology',
      diagnosis: 'Clear - No abnormalities detected',
      files: 3,
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20"
            onClick={() => onNavigate('dashboard')}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-white">Medical History</h2>
        </div>
        <div className="flex gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Records</SelectItem>
              <SelectItem value="consultation">Consultations</SelectItem>
              <SelectItem value="lab">Lab Reports</SelectItem>
              <SelectItem value="prescription">Prescriptions</SelectItem>
              <SelectItem value="imaging">Imaging</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-4">
          {records.map((record, index) => (
            <Card key={record.id} className="p-4 shadow-md border-0 relative">
              {index !== records.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 -mb-4" />
              )}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#1976D2] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{record.title}</p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <Badge variant="secondary" className="text-xs">
                          {record.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{record.department}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <UserIcon className="w-3 h-3" />
                      {record.doctor}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Calendar className="w-3 h-3" />
                      {record.date}
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 mb-3 bg-gray-50 p-2 rounded">
                    {record.diagnosis}
                  </p>
                  <Button variant="outline" size="sm" className="text-xs h-8">
                    <Download className="w-3 h-3 mr-1" />
                    View Files ({record.files})
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
