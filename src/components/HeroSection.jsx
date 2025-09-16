import { useNavigate } from "react-router-dom"; // <-- import
import { MessageCircle, Calendar, Sparkles, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  const navigate = useNavigate(); // <-- initialize navigate

  return (
    <section id="home" className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-soft/20 via-secondary-soft/20 to-accent-soft/20" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-bounce-soft" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-bounce-soft" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-primary font-medium">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-poppins">Student Mental Health Support</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-poppins text-foreground leading-tight">
                Your Mental
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Wellness Journey
                </span>
                Starts Here
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Comprehensive AI-powered mental health support designed specifically for students. 
                Connect with counselors, access wellness resources, and join a supportive community.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full shadow-soft">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="font-medium">24/7 AI Chat</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full shadow-soft">
                <Shield className="w-4 h-4 text-accent" />
                <span className="font-medium">100% Anonymous</span>
              </div>
              <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full shadow-soft">
                <Heart className="w-4 h-4 text-tertiary" />
                <span className="font-medium">Peer Support</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 rounded-xl font-semibold animate-pulse-glow"
                onClick={() => navigate("/ai-chat")} // <-- navigate to AI Chat
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start AI Chat
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300"
                onClick={() => navigate("/book")} // <-- navigate to Book a Counselor
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Counselor
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-poppins">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary font-poppins">500+</div>
                <div className="text-sm text-muted-foreground">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent font-poppins">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:ml-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Mental wellness illustration showing a peaceful person in meditation with positive thoughts"
                className="w-full h-auto rounded-3xl shadow-medium hover:shadow-glow transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl" />
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-accent rounded-full shadow-soft animate-bounce-soft" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-warm rounded-full shadow-soft animate-bounce-soft" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-secondary rounded-full shadow-soft animate-bounce-soft" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
