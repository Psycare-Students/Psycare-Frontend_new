import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import DashboardSection from '@/components/DashboardSection';
import AIChatSection from '@/components/AIChatSection';
import BookingSection from '@/components/BookingSection';
import ResourcesSection from '@/components/ResourcesSection';
import CommunitySection from '@/components/CommunitySection';
import AppointmentsSection from '@/components/AppointmentsSection';
import AuthSection from '@/components/AuthSection';
import heroBackground from '@/assets/hero-illustration.jpg';

const Index = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.className = 'font-poppins';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      <div className="relative z-10">
        {/* <Navigation /> */}
        <HeroSection />
        <DashboardSection />
        <AIChatSection />
        <BookingSection />
        <ResourcesSection />
        <CommunitySection />
        <AppointmentsSection />
        {/* <AuthSection /> */}
        <footer className="bg-gradient-to-r from-primary-soft/30 via-secondary-soft/30 to-accent-soft/30 backdrop-blur-sm py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">P</span>
                </div>
                <div>
                  <h3 className="font-bold font-poppins text-foreground">PsyCare</h3>
                  <p className="text-xs text-muted-foreground">by NeuroNova</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive mental health support for students worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#ai-chat" className="hover:text-primary transition-colors">AI Chat Support</a></li>
                <li><a href="#book" className="hover:text-primary transition-colors">Book Counselor</a></li>
                <li><a href="#resources" className="hover:text-primary transition-colors">Wellness Resources</a></li>
                <li><a href="#community" className="hover:text-primary transition-colors">Community Forum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Crisis Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Project Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Team: NeuroNova</li>
                <li>Project: SIH25092</li>
                <li>Category: Student Wellness</li>
                <li className="flex items-center space-x-1">
                  <span>Status:</span>
                  <span className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-xs font-medium">Active</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 PsyCare by Team NeuroNova. Made with 💙 for student mental health.
            </p>
          </div>
        </div>
        </footer>
      </div>
    </main>
  );
};

export default Index;


