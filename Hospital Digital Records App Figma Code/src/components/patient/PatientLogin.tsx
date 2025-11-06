import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Heart, Fingerprint } from 'lucide-react';

interface PatientLoginProps {
  onLogin: () => void;
}

export function PatientLogin({ onLogin }: PatientLoginProps) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1976D2] to-[#1565C0] p-8 text-white text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Heart className="w-8 h-8" fill="white" />
          </div>
        </div>
        <h1 className="text-white mb-2">HealthCare+</h1>
        <p className="text-blue-100 text-sm">Your health records, always with you</p>
      </div>

      {/* Form */}
      <div className="flex-1 p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email or Medical ID</Label>
              <Input id="email" type="text" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
            <Button onClick={onLogin} className="w-full bg-[#1976D2] hover:bg-[#1565C0]">
              Sign In
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <Button variant="outline" className="w-full" onClick={onLogin}>
              <Fingerprint className="w-4 h-4 mr-2" />
              Quick Login with Medical ID
            </Button>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-email">Email</Label>
              <Input id="reg-email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-password">Password</Label>
              <Input id="reg-password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="medical-id">Medical ID (Optional)</Label>
              <Input id="medical-id" type="text" placeholder="MED-123456" />
            </div>
            <Button onClick={onLogin} className="w-full bg-[#1976D2] hover:bg-[#1565C0]">
              Create Account
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
