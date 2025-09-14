import { Calendar, Clock, User, Video, Phone, MessageSquare, Star, Award } from 'lucide-react';

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
    <section id="book" className="py-10 bg-white">
      <div className="container">
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="display-4 fw-bold text-dark mb-4">
            Book a Professional Counselor
          </h2>
          <p className="lead text-muted-custom">
            Connect with licensed mental health professionals who understand student life
          </p>
        </div>

        <div className="row g-4">
          {/* Counselor Selection */}
          <div className="col-lg-6 animate-slide-in">
            <h4 className="fw-bold text-dark mb-4">Choose Your Counselor</h4>
            
            {counselors.map((counselor, index) => (
              <div 
                key={index} 
                className="card-custom shadow-soft hover-glow mb-4 cursor-pointer hover-scale border-2"
              >
                <div className="card-body p-4">
                  <div className="d-flex align-items-start">
                    <div className="fs-2 me-3">{counselor.avatar}</div>
                    <div className="flex-grow-1">
                      <div className="d-flex align-items-center mb-1">
                        <h6 className="fw-bold text-dark mb-0 me-2">{counselor.name}</h6>
                        <span className="badge bg-gradient-accent text-white small">
                          {counselor.badge}
                        </span>
                      </div>
                      <p className="text-muted-custom mb-2 small">{counselor.specialty}</p>
                      <div className="d-flex align-items-center gap-3 small">
                        <div className="d-flex align-items-center">
                          <Star className="text-warning me-1" size={14} />
                          <span className="fw-bold">{counselor.rating}</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <Award className="text-primary me-1" size={14} />
                          <span>{counselor.sessions}+ sessions</span>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="col-lg-6 animate-slide-in" style={{animationDelay: '0.2s'}}>
            <div className="card-custom shadow-medium hover-glow">
              <div className="card-header bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="d-flex align-items-center">
                  <Calendar className="text-primary me-2" size={20} />
                  <h5 className="mb-0 fw-bold">Schedule Your Session</h5>
                </div>
              </div>
              <div className="card-body p-4">
                {/* Session Type */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-dark">Session Type</label>
                  <div className="d-grid gap-2">
                    {sessionTypes.map((type, index) => (
                      <div 
                        key={index}
                        className="d-flex align-items-center justify-content-between p-3 border rounded-3 hover-scale cursor-pointer"
                        style={{transition: 'background-color 0.3s'}}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bs-light)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <div className="d-flex align-items-center">
                          <type.icon className="text-primary me-3" size={20} />
                          <div>
                            <p className="fw-bold mb-0 small">{type.label}</p>
                            <p className="text-muted-custom mb-0 text-xs">{type.duration}</p>
                          </div>
                        </div>
                        <div className="text-end">
                          <p className="fw-bold text-success mb-0 small">{type.price}</p>
                          <p className="text-muted-custom mb-0 text-xs">for students</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date Selection */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-dark">Preferred Date</label>
                  <input type="date" className="form-control rounded-3" />
                </div>

                {/* Time Selection */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-dark">Available Time Slots</label>
                  <div className="row g-2">
                    {timeSlots.map((time, index) => (
                      <div key={index} className="col-4">
                        <button className="btn btn-outline-primary btn-sm w-100 hover-scale rounded-3">
                          {time}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-dark">
                    Anything you'd like your counselor to know? (Optional)
                  </label>
                  <textarea 
                    className="form-control rounded-3" 
                    rows={3}
                    placeholder="Share what's on your mind or any specific concerns..."
                  />
                </div>

                {/* Book Button */}
                <button className="btn btn-gradient-primary w-100 btn-lg py-3 rounded-4 fw-bold hover-glow">
                  <Calendar size={20} className="me-2" />
                  Book Free Session
                </button>

                <p className="text-xs text-muted-custom text-center mt-3 mb-0">
                  All sessions are completely free for students. You can cancel or reschedule up to 2 hours before your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="row text-center mt-5 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="col-3">
            <div className="display-6 fw-bold text-primary">100%</div>
            <div className="small text-muted-custom">Licensed Professionals</div>
          </div>
          <div className="col-3">
            <div className="display-6 fw-bold text-info">24/7</div>
            <div className="small text-muted-custom">Booking Available</div>
          </div>
          <div className="col-3">
            <div className="display-6 fw-bold text-success">Free</div>
            <div className="small text-muted-custom">For All Students</div>
          </div>
          <div className="col-3">
            <div className="display-6 fw-bold text-warning">48h</div>
            <div className="small text-muted-custom">Average Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;