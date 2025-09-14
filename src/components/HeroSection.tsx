import { MessageCircle, Calendar, Sparkles, Heart, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="position-relative min-vh-100 bg-gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="position-absolute w-100 h-100 bg-gradient-hero" />
      <div 
        className="position-absolute bg-primary rounded-circle animate-bounce-soft opacity-25"
        style={{
          width: '128px',
          height: '128px',
          top: '20%',
          right: '20%'
        }}
      />
      <div 
        className="position-absolute bg-success rounded-circle animate-bounce-soft opacity-25"
        style={{
          width: '96px',
          height: '96px',
          bottom: '20%',
          left: '20%',
          animationDelay: '1s'
        }}
      />
      
      <div className="position-relative container-fluid pt-12 pb-8" style={{zIndex: 10}}>
        <div className="row align-items-center min-vh-100 g-5">
          {/* Left Content */}
          <div className="col-lg-6 animate-fade-in">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-4">
                <Sparkles className="me-2 text-primary" size={20} />
                <span className="text-sm fw-medium text-primary">Student Mental Health Support</span>
              </div>
              
              <h1 className="display-2 fw-bold text-dark mb-4">
                Your Mental
                <span className="d-block text-primary">
                  Wellness Journey
                </span>
                Starts Here
              </h1>
              
              <p className="lead text-muted-custom mb-4 fs-5 lh-base" style={{maxWidth: '600px'}}>
                Comprehensive AI-powered mental health support designed specifically for students. 
                Connect with counselors, access wellness resources, and join a supportive community.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="d-flex flex-wrap gap-3 mb-5">
              <div className="d-flex align-items-center bg-white bg-opacity-75 rounded-pill px-4 py-2 shadow-sm">
                <MessageCircle className="me-2 text-primary" size={16} />
                <span className="fw-medium small">24/7 AI Chat</span>
              </div>
              <div className="d-flex align-items-center bg-white bg-opacity-75 rounded-pill px-4 py-2 shadow-sm">
                <Shield className="me-2 text-success" size={16} />
                <span className="fw-medium small">100% Anonymous</span>
              </div>
              <div className="d-flex align-items-center bg-white bg-opacity-75 rounded-pill px-4 py-2 shadow-sm">
                <Heart className="me-2 text-tertiary" size={16} />
                <span className="fw-medium small">Peer Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 pt-3 mb-5">
              <button className="btn btn-gradient-primary btn-lg px-4 py-3 rounded-4 hover-scale d-flex align-items-center justify-content-center animate-pulse-glow">
                <MessageCircle size={20} className="me-2" />
                Start AI Chat
              </button>
              <button className="btn btn-outline-primary btn-lg px-4 py-3 rounded-4 hover-scale d-flex align-items-center justify-content-center border-2">
                <Calendar size={20} className="me-2" />
                Book a Counselor
              </button>
            </div>

            {/* Stats */}
            <div className="row text-center pt-4 border-top border-primary-soft">
              <div className="col-4">
                <div className="border-end border-primary-soft pe-3">
                  <h4 className="fw-bold text-primary mb-0 display-6">24/7</h4>
                  <small className="text-muted-custom">AI Support</small>
                </div>
              </div>
              <div className="col-4">
                <div className="border-end border-primary-soft pe-3">
                  <h4 className="fw-bold text-secondary mb-0 display-6">500+</h4>
                  <small className="text-muted-custom">Students Helped</small>
                </div>
              </div>
              <div className="col-4">
                <h4 className="fw-bold text-success mb-0 display-6">98%</h4>
                <small className="text-muted-custom">Satisfaction</small>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="col-lg-6 text-center animate-slide-in" style={{animationDelay: '0.3s'}}>
            <div className="position-relative d-inline-block">
              <img 
                src={heroImage} 
                alt="Mental wellness illustration showing a peaceful person in meditation with positive thoughts"
                className="img-fluid rounded-4 shadow-glow hover-glow"
                style={{maxWidth: '100%', height: 'auto'}}
              />
              <div className="position-absolute w-100 h-100 top-0 start-0 bg-gradient-primary opacity-10 rounded-4" />
            </div>
            
            {/* Floating elements */}
            <div 
              className="position-absolute bg-gradient-accent rounded-circle shadow-soft animate-bounce-soft"
              style={{
                width: '32px',
                height: '32px',
                top: '-16px',
                left: '-16px'
              }}
            />
            <div 
              className="position-absolute bg-gradient-warm rounded-circle shadow-soft animate-bounce-soft"
              style={{
                width: '48px',
                height: '48px',
                bottom: '-16px',
                right: '-16px',
                animationDelay: '0.5s'
              }}
            />
            <div 
              className="position-absolute bg-gradient-secondary rounded-circle shadow-soft animate-bounce-soft"
              style={{
                width: '24px',
                height: '24px',
                top: '50%',
                right: '-32px',
                animationDelay: '1.5s'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;