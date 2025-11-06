import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Stethoscope } from 'lucide-react';

interface DoctorLoginProps {
  onLogin: () => void;
}

export function DoctorLogin({ onLogin }: DoctorLoginProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-xl">
        <div className="text-center mb-8">
          <div className="inline-flex w-16 h-16 bg-[#1976D2] rounded-2xl items-center justify-center mb-4">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">Doctor Portal</h1>
          <p className="text-gray-600">Sign in to access patient records</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username or Hospital ID</Label>
            <Input id="username" type="text" placeholder="dr.chen" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button onClick={onLogin} className="w-full bg-[#1976D2] hover:bg-[#1565C0]">
            Sign In
          </Button>
        </div>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-[#1976D2] hover:underline">
            Forgot password?
          </a>
        </div>
      </Card>
    </div>
  );
}
