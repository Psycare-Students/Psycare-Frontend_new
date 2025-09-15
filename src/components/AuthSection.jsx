import { LogIn, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AuthSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><LogIn className="w-5 h-5" /> Login</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Continue</Button>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><UserPlus className="w-5 h-5" /> Sign Up</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">Create Account</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;


