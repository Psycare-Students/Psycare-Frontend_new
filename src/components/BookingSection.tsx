import { Calendar, Clock, User, Video, Phone, MessageSquare, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BookingSection = () => {
  const counselors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Anxiety & Stress Management',
      rating: 4.9,
      sessions: 340,
      avatar: '👩‍⚕️',
      badge: 'Top Rated'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Depression & Mood Disorders',
      rating: 4.8,
      sessions: 280,
      avatar: '👨‍⚕️',
      badge: 'Verified'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Academic Pressure & ADHD',
      rating: 4.9,
      sessions: 420,
      avatar: '👩‍🔬',
      badge: 'Student Specialist'
    }
  ];

  const sessionTypes = [
    { value: 'video', label: 'Video Call', icon: Video, duration: '50 min', price: 'Free' },
    { value: 'phone', label: 'Phone Call', icon: Phone, duration: '50 min', price: 'Free' },
    { value: 'chat', label: 'Live Chat', icon: MessageSquare, duration: '45 min', price: 'Free' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <section id="book" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Book a Professional Counselor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with licensed mental health professionals who understand student life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Counselor Selection */}
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-xl font-semibold font-poppins text-foreground mb-6">Choose Your Counselor</h3>
            
            {counselors.map((counselor, index) => (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer hover:scale-[1.02] border-2 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{counselor.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-foreground">{counselor.name}</h4>
                        <span className="px-2 py-1 bg-gradient-accent text-xs text-accent-foreground rounded-full font-medium">
                          {counselor.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{counselor.specialty}</p>
                      <div className="flex items-center space-x-4 text-xs">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-tertiary fill-current" />
                          <span className="font-medium">{counselor.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-3 h-3 text-primary" />
                          <span>{counselor.sessions}+ sessions</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="shrink-0">
                      Select
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <Card className="shadow-medium hover:shadow-glow transition-all duration-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-t-lg">
              <CardTitle className="flex items-center space-x-2 font-poppins">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Schedule Your Session</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Session Type */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Session Type</label>
                <div className="grid grid-cols-1 gap-3">
                  {sessionTypes.map((type, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 cursor-pointer transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <type.icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{type.label}</p>
                          <p className="text-xs text-muted-foreground">{type.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-accent">{type.price}</p>
                        <p className="text-xs text-muted-foreground">for students</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Preferred Date</label>
                <Input type="date" className="w-full" />
              </div>

              {/* Time Selection */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">Available Time Slots</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time, index) => (
                    <Button 
                      key={index}
                      variant="outline" 
                      size="sm"
                      className="hover:bg-primary/5 hover:border-primary/30 transition-colors"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Anything you'd like your counselor to know? (Optional)
                </label>
                <textarea 
                  className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-colors"
                  rows={3}
                  placeholder="Share what's on your mind or any specific concerns..."
                />
              </div>

              {/* Book Button */}
              <Button className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6 rounded-xl font-semibold transition-all duration-300">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Session
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                All sessions are completely free for students. You can cancel or reschedule up to 2 hours before your appointment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary font-poppins">100%</div>
            <div className="text-sm text-muted-foreground">Licensed Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary font-poppins">24/7</div>
            <div className="text-sm text-muted-foreground">Booking Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent font-poppins">Free</div>
            <div className="text-sm text-muted-foreground">For All Students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-tertiary font-poppins">48h</div>
            <div className="text-sm text-muted-foreground">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;