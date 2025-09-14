import { Smile, Frown, Meh, Heart, MessageCircle, Wind, Calendar, TrendingUp, Target, Zap } from 'lucide-react';

const DashboardSection = () => {
  const moodData = [
    { day: 'Mon', mood: 'happy' },
    { day: 'Tue', mood: 'neutral' },
    { day: 'Wed', mood: 'sad' },
    { day: 'Thu', mood: 'happy' },
    { day: 'Fri', mood: 'happy' },
    { day: 'Sat', mood: 'neutral' },
    { day: 'Sun', mood: 'happy' },
  ];

  const recentActivities = [
    { activity: 'Completed breathing exercise', time: '2 hours ago', type: 'breathing' },
    { activity: 'AI Chat session', time: '5 hours ago', type: 'chat' },
    { activity: 'Mood check-in', time: '1 day ago', type: 'mood' },
    { activity: 'Counselor session with Dr. Smith', time: '2 days ago', type: 'session' },
  ];

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy': return <Smile className="text-success" size={24} />;
      case 'sad': return <Frown className="text-danger" size={24} />;
      default: return <Meh className="text-warning" size={24} />;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'breathing': return <Wind className="text-info" size={16} />;
      case 'chat': return <MessageCircle className="text-primary" size={16} />;
      case 'session': return <Calendar className="text-success" size={16} />;
      default: return <Heart className="text-danger" size={16} />;
    }
  };

  return (
    <section id="dashboard" className="py-12 bg-light">
      <div className="container">
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="display-4 fw-bold text-dark mb-3">Your Mental Health Dashboard</h2>
          <p className="lead text-muted-custom">Track your progress and stay connected with your wellness journey</p>
        </div>

        <div className="row g-4">
          {/* Daily Mood Tracker */}
          <div className="col-lg-6 animate-fade-in">
            <div className="card-custom h-100 p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 className="fw-bold text-dark mb-0">Daily Mood Tracker</h5>
                <Heart className="text-primary" size={24} />
              </div>
              
              <div className="mb-4">
                <p className="text-muted-custom mb-3">How are you feeling today?</p>
                <div className="d-flex justify-content-center gap-3 mb-4">
                  <button className="btn btn-outline-success rounded-circle hover-scale d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <Smile size={28} />
                  </button>
                  <button className="btn btn-outline-warning rounded-circle hover-scale d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <Meh size={28} />
                  </button>
                  <button className="btn btn-outline-danger rounded-circle hover-scale d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <Frown size={28} />
                  </button>
                </div>
              </div>

              <div>
                <p className="fw-bold text-dark mb-3">This Week's Pattern</p>
                <div className="d-flex justify-content-between align-items-end bg-light rounded-3 p-3">
                  {moodData.map((data, index) => (
                    <div key={index} className="text-center">
                      <div className="mb-2">
                        {getMoodIcon(data.mood)}
                      </div>
                      <small className="text-muted-custom fw-bold">{data.day}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Wellness Stats */}
          <div className="col-lg-6 animate-fade-in">
            <div className="card-custom h-100 p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 className="fw-bold text-dark mb-0">Wellness Stats</h5>
                <TrendingUp className="text-success" size={24} />
              </div>
              
              <div className="row g-3 mb-4">
                <div className="col-4">
                  <div className="text-center p-3 bg-primary-soft rounded-3">
                    <h3 className="fw-bold text-primary mb-1">85</h3>
                    <small className="text-primary fw-bold">Wellness Score</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-3 bg-secondary-soft rounded-3">
                    <h3 className="fw-bold text-info mb-1">12</h3>
                    <small className="text-info fw-bold">Sessions</small>
                  </div>
                </div>
                <div className="col-4">
                  <div className="text-center p-3 bg-accent-soft rounded-3">
                    <h3 className="fw-bold text-success mb-1">7</h3>
                    <small className="text-success fw-bold">Day Streak</small>
                  </div>
                </div>
              </div>

              <div className="bg-light rounded-3 p-3">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <small className="text-muted-custom fw-bold">Monthly Progress</small>
                  <small className="text-success fw-bold">+15%</small>
                </div>
                <div className="progress" style={{height: '8px'}}>
                  <div 
                    className="progress-bar bg-gradient-primary rounded-pill" 
                    style={{width: '85%'}}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="col-lg-6 animate-slide-in">
            <div className="card-custom h-100 p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 className="fw-bold text-dark mb-0">Quick Actions</h5>
                <Zap className="text-warning" size={24} />
              </div>
              
              <div className="d-grid gap-3">
                <button className="btn btn-gradient-primary text-start p-3 rounded-3 hover-scale">
                  <div className="d-flex align-items-center">
                    <MessageCircle className="me-3" size={20} />
                    <div>
                      <div className="fw-bold">Start AI Chat</div>
                      <small className="opacity-75">Get instant support</small>
                    </div>
                  </div>
                </button>
                
                <button className="btn btn-gradient-secondary text-start p-3 rounded-3 hover-scale">
                  <div className="d-flex align-items-center">
                    <Wind className="me-3" size={20} />
                    <div>
                      <div className="fw-bold text-white">Breathing Exercise</div>
                      <small className="text-white-50">5-minute relaxation</small>
                    </div>
                  </div>
                </button>
                
                <button className="btn btn-gradient-accent text-start p-3 rounded-3 hover-scale">
                  <div className="d-flex align-items-center">
                    <Calendar className="me-3" size={20} />
                    <div>
                      <div className="fw-bold text-white">Schedule Meeting</div>
                      <small className="text-white-50">Book with counselor</small>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="col-lg-6 animate-slide-in">
            <div className="card-custom h-100 p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h5 className="fw-bold text-dark mb-0">Recent Activities</h5>
                <Target className="text-tertiary" size={24} />
              </div>
              
              <div className="d-grid gap-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="d-flex align-items-center p-3 bg-light rounded-3 hover-scale">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center me-3 shadow-sm" style={{width: '40px', height: '40px'}}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-bold text-dark">{activity.activity}</div>
                      <small className="text-muted-custom">{activity.time}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;