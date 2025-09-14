import { Send, Mic, Globe, Lightbulb, Heart, Shield, MessageCircle } from 'lucide-react';

const AIChatSection = () => {
  const chatMessages = [
    {
      type: 'ai',
      message: "Hi there! I'm your AI mental health companion. How are you feeling today? 😊",
      time: '2:30 PM'
    },
    {
      type: 'user',
      message: "I've been feeling pretty anxious about my upcoming exams.",
      time: '2:31 PM'
    },
    {
      type: 'ai',
      message: "I understand exam anxiety can be really overwhelming. Let's explore some strategies that might help. Have you tried any relaxation techniques before?",
      time: '2:31 PM'
    }
  ];

  const tips = [
    { icon: Heart, text: 'Take deep breaths', color: 'text-tertiary' },
    { icon: Lightbulb, text: 'Try the 5-4-3-2-1 grounding technique', color: 'text-success' },
    { icon: Shield, text: 'Remember: You are safe and supported', color: 'text-primary' },
  ];

  return (
    <section id="ai-chat" className="py-10 bg-primary-soft">
      <div className="container">
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="display-4 fw-bold text-dark mb-4">
            AI-Powered Mental Health Support
          </h2>
          <p className="lead text-muted-custom">
            Get instant, personalized support from our compassionate AI counselor, available 24/7
          </p>
        </div>

        <div className="row g-4">
          {/* Chat Interface */}
          <div className="col-lg-8 animate-slide-in">
            <div className="card-custom shadow-medium hover-glow">
              <div className="card-header bg-gradient-primary text-white rounded-top-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <MessageCircle className="me-2" size={20} />
                    <h5 className="mb-0 fw-bold">AI Mental Health Assistant</h5>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="bg-success rounded-circle me-2" style={{width: '8px', height: '8px'}}></div>
                    <span className="small">Online</span>
                  </div>
                </div>
              </div>
              
              <div className="card-body p-0">
                {/* Chat Messages */}
                <div className="bg-light p-4" style={{height: '400px', overflowY: 'auto'}}>
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`d-flex mb-3 animate-fade-in ${msg.type === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className={`p-3 rounded-4 ${
                        msg.type === 'user' 
                          ? 'bg-gradient-primary text-white' 
                          : 'bg-white shadow-sm border'
                      }`} style={{maxWidth: '75%'}}>
                        <p className="mb-1 small">{msg.message}</p>
                        <p className={`mb-0 text-xs ${
                          msg.type === 'user' ? 'text-white-50' : 'text-muted'
                        }`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-top bg-white">
                  <div className="input-group">
                    <input 
                      type="text"
                      className="form-control border-primary-soft rounded-start-3" 
                      placeholder="Type your message here... I'm here to listen 💙"
                    />
                    <button className="btn btn-gradient-accent rounded-end-3">
                      <Send size={16} />
                    </button>
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-outline-secondary btn-sm rounded-3">
                      <Mic size={16} />
                    </button>
                    <button className="btn btn-outline-secondary btn-sm rounded-3">
                      <Globe size={16} />
                    </button>
                  </div>
                  <p className="text-xs text-muted-custom mt-2 text-center mb-0">
                    All conversations are private and secure 🔒
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Sidebar */}
          <div className="col-lg-4 animate-slide-in" style={{animationDelay: '0.3s'}}>
            <div className="card-custom shadow-soft hover-glow mb-4">
              <div className="card-header bg-light">
                <h6 className="mb-0 fw-bold">💡 Helpful Tips</h6>
              </div>
              <div className="card-body">
                {tips.map((tip, index) => (
                  <div key={index} className="d-flex align-items-start mb-3 p-3 bg-light rounded-3 hover-scale">
                    <tip.icon className={`me-3 mt-1 ${tip.color}`} size={20} />
                    <p className="mb-0 small text-dark">{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-custom shadow-soft hover-glow mb-4">
              <div className="card-header bg-light">
                <h6 className="mb-0 fw-bold">🌟 Features</h6>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 small">
                  <div className="bg-success rounded-circle me-2" style={{width: '8px', height: '8px'}}></div>
                  <span>24/7 Availability</span>
                </div>
                <div className="d-flex align-items-center mb-2 small">
                  <div className="bg-info rounded-circle me-2" style={{width: '8px', height: '8px'}}></div>
                  <span>Multilingual Support</span>
                </div>
                <div className="d-flex align-items-center mb-2 small">
                  <div className="bg-primary rounded-circle me-2" style={{width: '8px', height: '8px'}}></div>
                  <span>Voice Messages</span>
                </div>
                <div className="d-flex align-items-center small">
                  <div className="bg-warning rounded-circle me-2" style={{width: '8px', height: '8px'}}></div>
                  <span>Personalized Responses</span>
                </div>
              </div>
            </div>

            <div className="card-custom shadow-soft hover-glow bg-gradient-to-br from-accent/5 to-secondary/5">
              <div className="card-body text-center p-4">
                <div className="display-4 mb-3">🚨</div>
                <h6 className="fw-bold text-dark mb-2">Crisis Support</h6>
                <p className="small text-muted-custom mb-3">
                  If you're in crisis, our AI will immediately connect you with human support.
                </p>
                <button className="btn btn-outline-danger btn-sm">
                  Emergency Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChatSection;