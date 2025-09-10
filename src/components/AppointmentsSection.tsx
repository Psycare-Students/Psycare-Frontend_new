import { Calendar, Clock, Video, Phone, MessageSquare, Edit, Trash2, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AppointmentsSection = () => {
  const appointments = [
    {
      id: 1,
      counselor: 'Dr. Sarah Johnson',
      date: '2025-01-15',
      time: '2:00 PM',
      duration: '50 min',
      type: 'video',
      status: 'confirmed',
      specialty: 'Anxiety & Stress Management',
      avatar: '👩‍⚕️'
    },
    {
      id: 2,
      counselor: 'Dr. Michael Chen',
      date: '2025-01-20',
      time: '11:00 AM',
      duration: '50 min',
      type: 'phone',
      status: 'pending',
      specialty: 'Depression & Mood Disorders',
      avatar: '👨‍⚕️'
    },
    {
      id: 3,
      counselor: 'Dr. Emily Rodriguez',
      date: '2025-01-08',
      time: '3:00 PM',
      duration: '45 min',
      type: 'chat',
      status: 'completed',
      specialty: 'Academic Pressure & ADHD',
      avatar: '👩‍🔬'
    }
  ];

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'video': return Video;
      case 'phone': return Phone;
      case 'chat': return MessageSquare;
      default: return Video;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-accent text-accent-foreground';
      case 'pending': return 'bg-tertiary text-tertiary-foreground';
      case 'completed': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return CheckCircle;
      case 'pending': return Clock;
      case 'completed': return CheckCircle;
      default: return AlertCircle;
    }
  };

  return (
    <section id="appointments" className="py-20 bg-gradient-to-b from-accent-soft/10 to-primary-soft/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-foreground mb-4">
            Your Appointments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage your counseling sessions and track your mental health journey
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Appointments List */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold font-poppins text-foreground">Upcoming & Recent Sessions</h3>
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Calendar className="w-4 h-4 mr-2" />
                Book New Session
              </Button>
            </div>

            {appointments.map((appointment, index) => {
              const SessionIcon = getSessionIcon(appointment.type);
              const StatusIcon = getStatusIcon(appointment.status);
              
              return (
                <Card 
                  key={appointment.id} 
                  className="shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{appointment.avatar}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-foreground text-lg">{appointment.counselor}</h4>
                            <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                          </div>
                          <Badge className={getStatusColor(appointment.status)}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{new Date(appointment.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-secondary" />
                            <span>{appointment.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <SessionIcon className="w-4 h-4 text-accent" />
                            <span className="capitalize">{appointment.type} call</span>
                          </div>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <span>{appointment.duration}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          {appointment.status === 'confirmed' && (
                            <Button size="sm" className="bg-gradient-accent hover:shadow-soft">
                              Join Session
                            </Button>
                          )}
                          {appointment.status === 'pending' && (
                            <Button size="sm" variant="outline" className="border-tertiary/30 text-tertiary hover:bg-tertiary/5">
                              Waiting for Confirmation
                            </Button>
                          )}
                          {appointment.status === 'completed' && (
                            <Button size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary/5">
                              View Summary
                            </Button>
                          )}
                          
                          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-secondary">
                            <Edit className="w-4 h-4 mr-1" />
                            Reschedule
                          </Button>
                          <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-destructive">
                            <Trash2 className="w-4 h-4 mr-1" />
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            {/* Session Summary */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-poppins">Session Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary font-poppins mb-1">8</div>
                  <div className="text-sm text-muted-foreground">Total Sessions</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-lg font-semibold text-accent">5</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-lg font-semibold text-secondary">3</div>
                    <div className="text-xs text-muted-foreground">Upcoming</div>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Next session in:</p>
                  <p className="font-semibold text-primary">3 days, 4 hours</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-poppins">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-primary hover:shadow-soft">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Emergency Session
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-secondary/5">
                  <Clock className="w-4 h-4 mr-2" />
                  Reschedule Next Session
                </Button>
                <Button variant="outline" className="w-full justify-start hover:bg-accent/5">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Counselor
                </Button>
              </CardContent>
            </Card>

            {/* Progress Tracking */}
            <Card className="shadow-soft hover:shadow-medium transition-all duration-300 bg-gradient-to-br from-accent/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="font-poppins">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Session Goals</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className="bg-gradient-accent h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Wellness Score</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2">
                    <div className="bg-gradient-primary h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  You're making great progress! Keep up the good work. 🌟
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentsSection;