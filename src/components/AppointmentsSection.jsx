import { CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AppointmentsSection = () => {
  const appointments = [
    { date: 'Mon, 10:00 AM', with: 'Counselor A' },
    { date: 'Wed, 3:00 PM', with: 'Counselor B' },
  ];

  return (
    <section id="appointments" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground">Your Appointments</h2>
          <p className="text-lg text-muted-foreground mt-2">Upcoming sessions</p>
        </div>
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-secondary" />
              Upcoming
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            {appointments.map((a, i) => (
              <div key={i} className="flex justify-between">
                <span>{a.date}</span>
                <span>{a.with}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AppointmentsSection;


