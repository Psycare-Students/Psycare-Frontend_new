import { useState } from 'react';
import { Menu, X, Heart, MessageCircle, Calendar, Book, Users, User } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Heart },
    { href: '#ai-chat', label: 'AI Chat', icon: MessageCircle },
    { href: '#book', label: 'Book', icon: Calendar },
    { href: '#resources', label: 'Resources', icon: Book },
    { href: '#community', label: 'Community', icon: Users },
    { href: '#appointments', label: 'Appointments', icon: Calendar },
  ];

  return (
    <header className="position-sticky-top bg-white bg-opacity-90 backdrop-blur-sm shadow-sm border-bottom border-soft">
      <nav className="container-fluid py-3">
        <div className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <div className="rounded-3 bg-gradient-primary d-flex align-items-center justify-content-center me-3" style={{width: '40px', height: '40px'}}>
              <Heart className="text-white" size={20} />
            </div>
            <div>
              <h5 className="mb-0 fw-bold text-primary">PsyCare</h5>
              <small className="text-muted-custom">by NeuroNova</small>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="d-none d-lg-flex align-items-center">
            <div className="d-flex me-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-decoration-none text-dark hover-scale d-flex align-items-center px-3 py-2 rounded-3 me-2 transition"
                  style={{transition: 'all 0.3s ease'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-soft)';
                    e.currentTarget.style.color = 'var(--bs-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--bs-dark)';
                  }}
                >
                  <item.icon size={16} className="me-2" />
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary px-4 py-2 rounded-3 hover-scale">
                Login
              </button>
              <button className="btn btn-gradient-primary px-4 py-2 rounded-3 hover-scale">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="btn btn-outline-primary d-lg-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`d-lg-none mt-3 ${isMenuOpen ? 'd-block' : 'd-none'}`}>
          <div className="bg-white rounded-3 shadow-soft p-4 border border-soft">
            <div className="d-flex flex-column gap-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-decoration-none text-dark d-flex align-items-center px-3 py-2 rounded-3 hover-scale"
                  onClick={() => setIsMenuOpen(false)}
                  style={{transition: 'all 0.3s ease'}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-soft)';
                    e.currentTarget.style.color = 'var(--bs-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--bs-dark)';
                  }}
                >
                  <item.icon size={16} className="me-2" />
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary flex-fill rounded-3">
                Login
              </button>
              <button className="btn btn-gradient-primary flex-fill rounded-3">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;