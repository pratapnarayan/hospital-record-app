import * as React from 'react';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '../ui/card';
import { ChevronLeft, Upload } from 'lucide-react';
import type { DoctorScreen } from '../DoctorPortal';

interface AddDiagnosisProps {
  onNavigate: (screen: DoctorScreen) => void;
}

export function AddDiagnosis({ onNavigate }: AddDiagnosisProps) {
  const handleSubmit = () => {
    // Handle form submission
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => onNavigate('dashboard')}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-gray-900">Add New Diagnosis</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card className="p-8 shadow-md border-0">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="patient-search">Patient Medical ID</Label>
                <Input id="patient-search" placeholder="MED-784932" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" defaultValue="2025-11-02" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="condition">Condition / Diagnosis</Label>
              <Input id="condition" placeholder="e.g., Seasonal Allergies, Hypertension" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="symptoms">Symptoms</Label>
              <Textarea 
                id="symptoms" 
                placeholder="Describe the patient's symptoms..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Clinical Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Add detailed clinical observations, examination findings, etc..."
                rows={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="medications">Medications Prescribed</Label>
              <Textarea 
                id="medications" 
                placeholder="List medications, dosages, and instructions..."
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="followup">Follow-up Instructions</Label>
              <Textarea 
                id="followup" 
                placeholder="When should the patient return? Any special instructions?"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Attachments</Label>
              <Card className="p-8 border-2 border-dashed border-gray-300 hover:border-[#1976D2] cursor-pointer transition-colors">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <Upload className="w-6 h-6 text-gray-600" />
                  </div>
                  <p className="text-sm text-gray-900">Upload Files</p>
                  <p className="text-xs text-gray-500">Lab reports, test results, images (PDF, JPG, PNG)</p>
                </div>
              </Card>
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                onClick={handleSubmit}
                className="flex-1 bg-[#1976D2] hover:bg-[#1565C0]"
              >
                Save Diagnosis
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate('dashboard')}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
