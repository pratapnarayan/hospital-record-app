import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-xl">
        <div className="text-center mb-8">
          <div className="inline-flex w-16 h-16 bg-[#1976D2] rounded-2xl items-center justify-center mb-4">
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600">System administration and management</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="admin-username">Admin Username</Label>
            <Input id="admin-username" type="text" placeholder="admin" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password">Password</Label>
            <Input id="admin-password" type="password" placeholder="••••••••" />
          </div>
          <Button onClick={onLogin} className="w-full bg-[#1976D2] hover:bg-[#1565C0]">
            Sign In
          </Button>
        </div>

        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-xs text-amber-800">
            <strong>Security Notice:</strong> Admin access is logged and monitored. Unauthorized access attempts will be reported.
          </p>
        </div>
      </Card>
    </div>
  );
}
