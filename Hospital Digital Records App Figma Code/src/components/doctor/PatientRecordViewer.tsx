import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { ChevronLeft, Download, Edit, FileText } from 'lucide-react';
import type { DoctorScreen } from '../DoctorPortal';

interface PatientRecordViewerProps {
  patientId: string | null;
  onNavigate: (screen: DoctorScreen) => void;
}

export function PatientRecordViewer({ patientId, onNavigate }: PatientRecordViewerProps) {
  const patient = {
    name: 'Sarah Johnson',
    medicalId: 'MED-784932',
    age: 34,
    bloodType: 'O+',
    phone: '+1 (555) 123-4567',
    email: 'sarah.johnson@email.com',
    address: '123 Main St, San Francisco, CA',
    insurance: 'Blue Cross - Plan #12345',
  };

  const diagnoses = [
    { date: 'Oct 28, 2025', condition: 'Annual Physical Checkup', notes: 'All vitals normal. Blood pressure: 120/80', doctor: 'Dr. Michael Chen' },
    { date: 'Sep 15, 2025', condition: 'Seasonal Allergies', notes: 'Prescribed antihistamines', doctor: 'Dr. Sarah Williams' },
  ];

  const prescriptions = [
    { date: 'Sep 15, 2025', medication: 'Cetirizine 10mg', dosage: 'Once daily', duration: '30 days' },
    { date: 'Aug 5, 2025', medication: 'Ibuprofen 400mg', dosage: 'As needed', duration: '14 days' },
  ];

  const files = [
    { name: 'Blood Test Results - Oct 2025.pdf', date: 'Oct 25, 2025', size: '2.4 MB', type: 'Lab Report' },
    { name: 'Chest X-Ray - Aug 2025.pdf', date: 'Aug 10, 2025', size: '5.1 MB', type: 'Imaging' },
    { name: 'Prescription - Sep 2025.pdf', date: 'Sep 15, 2025', size: '0.8 MB', type: 'Prescription' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onNavigate('dashboard')}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-[#1976D2] text-white">SJ</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-gray-900">{patient.name}</h1>
                <p className="text-sm text-gray-600">{patient.medicalId}</p>
              </div>
            </div>
            <Button className="bg-[#1976D2] hover:bg-[#1565C0]">
              <Edit className="w-4 h-4 mr-2" />
              Add Entry
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient Info Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 shadow-md border-0">
              <h3 className="text-gray-900 mb-4">Patient Information</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Age</p>
                  <p className="text-sm text-gray-900">{patient.age} years</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Blood Type</p>
                  <Badge variant="secondary">{patient.bloodType}</Badge>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm text-gray-900">{patient.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm text-gray-900">{patient.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Address</p>
                  <p className="text-sm text-gray-900">{patient.address}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Insurance</p>
                  <p className="text-sm text-gray-900">{patient.insurance}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Records */}
          <div className="lg:col-span-2">
            <Card className="shadow-md border-0">
              <Tabs defaultValue="overview" className="w-full">
                <div className="border-b border-gray-200 px-6">
                  <TabsList className="bg-transparent">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="diagnoses">Diagnoses</TabsTrigger>
                    <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                    <TabsTrigger value="files">Files</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview" className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-gray-900 mb-4">Recent Activity</h3>
                      <div className="space-y-3">
                        {diagnoses.slice(0, 2).map((diagnosis, index) => (
                          <Card key={index} className="p-4 bg-gray-50">
                            <div className="flex items-start justify-between mb-2">
                              <p className="text-sm text-gray-900">{diagnosis.condition}</p>
                              <span className="text-xs text-gray-500">{diagnosis.date}</span>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{diagnosis.notes}</p>
                            <p className="text-xs text-gray-500">{diagnosis.doctor}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-4">Current Medications</h3>
                      <div className="space-y-2">
                        {prescriptions.slice(0, 1).map((rx, index) => (
                          <Card key={index} className="p-4 bg-gray-50">
                            <p className="text-sm text-gray-900">{rx.medication}</p>
                            <p className="text-xs text-gray-600 mt-1">{rx.dosage} • {rx.duration}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="diagnoses" className="p-6">
                  <div className="space-y-4">
                    {diagnoses.map((diagnosis, index) => (
                      <Card key={index} className="p-4 border-l-4 border-l-blue-500">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <p className="text-sm text-gray-900">{diagnosis.condition}</p>
                            <p className="text-xs text-gray-500 mt-1">{diagnosis.doctor}</p>
                          </div>
                          <span className="text-xs text-gray-500">{diagnosis.date}</span>
                        </div>
                        <p className="text-xs text-gray-700 bg-gray-50 p-2 rounded mt-2">
                          {diagnosis.notes}
                        </p>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="prescriptions" className="p-6">
                  <div className="space-y-4">
                    {prescriptions.map((rx, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <p className="text-sm text-gray-900">{rx.medication}</p>
                          <span className="text-xs text-gray-500">{rx.date}</span>
                        </div>
                        <div className="flex gap-4 text-xs text-gray-600">
                          <span>Dosage: {rx.dosage}</span>
                          <span>Duration: {rx.duration}</span>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="files" className="p-6">
                  <div className="space-y-3">
                    {files.map((file, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                              <p className="text-sm text-gray-900">{file.name}</p>
                              <div className="flex gap-3 mt-1">
                                <span className="text-xs text-gray-500">{file.date}</span>
                                <span className="text-xs text-gray-500">•</span>
                                <span className="text-xs text-gray-500">{file.size}</span>
                                <Badge variant="secondary" className="text-xs">{file.type}</Badge>
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
