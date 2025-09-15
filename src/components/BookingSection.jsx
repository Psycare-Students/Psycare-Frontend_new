import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BookingSection = () => {
  return (
    <section id="book" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">Book a Counselor</h2>
          <p className="text-lg text-muted-foreground mt-2">Find a time that works for you</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i} className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-poppins">Session Option {i}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><CalendarDays className="w-4 h-4" /> Within 3 days</div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 45 minutes</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Online</div>
                <Button className="mt-2 w-full">Book</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;


