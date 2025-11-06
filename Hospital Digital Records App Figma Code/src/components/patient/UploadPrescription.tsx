import { useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { ChevronLeft, Upload, Camera, FileText, CheckCircle } from 'lucide-react';
import type { PatientScreen } from '../PatientApp';

interface UploadPrescriptionProps {
  onNavigate: (screen: PatientScreen) => void;
}

export function UploadPrescription({ onNavigate }: UploadPrescriptionProps) {
  const [uploaded, setUploaded] = useState(false);
  const [extractedText, setExtractedText] = useState('');

  const handleUpload = () => {
    // Simulate OCR extraction
    setExtractedText('Dr. Sarah Williams\nDate: Nov 2, 2025\n\nRx:\n1. Amoxicillin 500mg - Take 3 times daily for 7 days\n2. Ibuprofen 400mg - As needed for pain\n\nFollow up in 1 week');
    setUploaded(true);
  };

  const handleConfirm = () => {
    // Success - navigate back to dashboard
    setTimeout(() => {
      onNavigate('dashboard');
    }, 1500);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] p-6 text-white">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20"
            onClick={() => onNavigate('dashboard')}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-white">Upload Prescription</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {!uploaded ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-900 mb-2">Upload Method</h3>
              <p className="text-sm text-gray-600 mb-4">
                Choose how you'd like to upload your prescription
              </p>
            </div>

            {/* Upload Options */}
            <div className="space-y-3">
              <Card 
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed border-gray-300 hover:border-[#1976D2]"
                onClick={handleUpload}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Camera className="w-6 h-6 text-[#1976D2]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Take Photo</p>
                    <p className="text-xs text-gray-500 mt-1">Use your camera to capture the prescription</p>
                  </div>
                </div>
              </Card>

              <Card 
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow border-2 border-dashed border-gray-300 hover:border-[#1976D2]"
                onClick={handleUpload}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Upload className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Upload from Files</p>
                    <p className="text-xs text-gray-500 mt-1">Choose an image or PDF from your device</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Info */}
            <Card className="p-4 bg-blue-50 border-blue-200">
              <div className="flex gap-3">
                <FileText className="w-5 h-5 text-[#1976D2] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-900 mb-1">AI-Powered OCR</p>
                  <p className="text-xs text-gray-600">
                    We'll automatically extract text from your prescription for easy reference and medication tracking.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Success Indicator */}
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-gray-900 mb-2">Prescription Uploaded</h3>
              <p className="text-sm text-gray-600">
                We've extracted the following information
              </p>
            </div>

            {/* Extracted Text Preview */}
            <div className="space-y-2">
              <Label>Extracted Text (OCR)</Label>
              <Textarea 
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
                rows={10}
                className="font-mono text-sm"
              />
              <p className="text-xs text-gray-500">
                Please review and edit if needed
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                onClick={handleConfirm}
                className="w-full bg-[#1976D2] hover:bg-[#1565C0]"
              >
                Confirm & Save
              </Button>
              <Button 
                onClick={() => setUploaded(false)}
                variant="outline"
                className="w-full"
              >
                Upload Different File
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
