import React, { useState } from 'react';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState('😊');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const avatars = [
  '😊', '⭐', '🐻', '🌈', '🌸', '⭐', '🌈', '🌙', '🌻', '🦋', '🍃', '🚀', '❤️', '⚡',
  '🎉', '🐱', '🍀', '🌟'
];

  // Pale gradient background to match image
  const containerStyle = {
    background: 'linear-gradient(120deg,#ebe1fc 0%,#dbf0ff 100%)',
    minHeight: '100vh',
    paddingTop: '55px',
    paddingBottom: '30px',
  };

  // Larger card size
  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '28px',
    padding: '48px 38px',
    boxShadow: '0 8px 32px 0 rgba(55,56,112,0.13)',
    maxWidth: '650px',
    width: '100%',
  };

  const toggleButtonStyle = (active) => ({
    backgroundColor: active ? '#f8f7fc' : '#f1f1f1',
    color: active ? '#58595e' : '#b9b7be',
    border: 'none',
    padding: '10px 0',
    borderRadius: active ? '13px 0 0 13px' : '0 13px 13px 0',
    fontWeight: '600',
    fontSize: '1rem',
    flex: 1,
    boxShadow: active ? "inset 0 -2px 5px #ebe0ff" : "none",
    transition: 'all 0.2s'
  });

  const roleButtonStyle = (active) => ({
    background: active ? '#ece6fb' : '#f7f6ff',           // Light violet on active, very pale when inactive
    color: active ? '#a682e3' : '#6b7280', 
    border: active ? '2px solid #a682e3' : '2px solid #eeebfa',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '1.14rem',
    width: '95%',
    padding: '8px',
    cursor: 'pointer',
    boxShadow: active ? '0 2px 12px 0 rgba(143,104,242,0.12)' : 'none',
    transition: 'all 0.18s'
  });

  const avatarStyle = (isSelected) => ({
    width: '46px',
    height: '46px',
    borderRadius: '16px',
    border: isSelected ? '2px solid #a682e3' : '2px solid #e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    cursor: 'pointer',
    backgroundColor: isSelected ? '#f7f6ff' : '#fff',
    boxShadow: isSelected ? '0 0 0 4px #ede8ff' : 'none',
    margin: '6px',
    transition: 'all 0.2s'
  });

  const inputStyle = {
    border: '1.5px solid #eeebfa',
    borderRadius: '11px',
    padding: '15px 18px',
    fontSize: '16.7px',
    fontWeight: 500,
    backgroundColor: '#f7f6ff',
    width: '100%',
    color: '#5b5c6e',
    transition: 'all 0.2s'
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg,#aa85ff 0%,#67c7fc 100%)',
    border: 'none',
    borderRadius: '11px',
    padding: '10px',
    fontSize: '1.15rem',
    fontWeight: '600',
    color: '#fff',
    boxShadow: '0 4px 16px 0 rgba(143,104,242,0.13)',
    width: '100%',
    marginTop: '4px'
  };

  const socialButtonStyle = {
    border: '1.5px solid #ececec',
    borderRadius: '11px',
    padding: '14px',
    backgroundColor: '#fff',
    color: '#302aa2',
    fontWeight: '600',
    fontSize: '15px',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, avatar: selectedAvatar, isSignUp });
  };

  return (
    <div style={containerStyle}>
      {/* Header OUTSIDE the card, at top of page */}
      <div className="text-center mb-4">
        <h1 className="fw-bold" style={{ color: '#22223b', fontSize: '2.6rem', marginBottom: '0.35em' }}>
          Join the PsyCare Community
        </h1>
        <div style={{ color: '#67687e', fontWeight: 500, fontSize: '1.14rem', marginBottom: '3em' }}>
          Create your account and start your mental wellness journey today
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div style={cardStyle}>
          {/* Toggle Buttons */}
          <div className="d-flex mb-4 p-1" style={{ backgroundColor: '#f3f4f6', borderRadius: '16px' }}>
            <button
              style={toggleButtonStyle(isSignUp)}
              onClick={() => setIsSignUp(true)}
              className="btn"
            >
              Sign Up
            </button>
            <button
              style={toggleButtonStyle(!isSignUp)}
              onClick={() => setIsSignUp(false)}
              className="btn"
            >
              Login
            </button>
          </div>
          {/* Avatar Selection - Only for Sign Up */}
          {isSignUp && (
            <div className="mb-4">
              <h6 className="mb-3 fw-semibold" style={{ color: '#374151' }}>Choose Your Avatar</h6>
              <div className="d-flex flex-wrap justify-content-center">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    style={avatarStyle(selectedAvatar === avatar)}
                    onClick={() => setSelectedAvatar(avatar)}
                  >
                    {avatar}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            {/* Full Name - Only for Sign Up */}
            {isSignUp && (
              <div className="mb-3">
                <div className="position-relative">
                  <span 
                    className="position-absolute" 
                    style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
                    👤
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    style={{ ...inputStyle, paddingLeft: '55px' }}
                  />
                </div>
              </div>
            )}
            {/* Email */}
            <div className="mb-3">
              <div className="position-relative">
                <span 
                  className="position-absolute" 
                  style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
                  ✉️
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{ ...inputStyle, paddingLeft: '55px' }}
                />
              </div>
            </div>
            {/* Password */}
            <div className="mb-4">
              <div className="position-relative">
                <span 
                  className="position-absolute" 
                  style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>
                  🔒
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  style={{ ...inputStyle, paddingLeft: '55px', paddingRight: '55px' }}
                />
                <button
                  type="button"
                  className="btn position-absolute"
                  style={{
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    border: 'none',
                    background: 'none',
                    padding: '0',
                    fontSize: '18px'
                  }}
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {isSignUp && (
              <div className="mb-4">
                <div className="fw-semibold mb-2" style={{ color: '#374151', fontSize: '1.05rem' }}>
                  Register As❓
                </div>
                <div className="row g-2">
                  <div className="col">
                    <button
                      type="button"
                      style={roleButtonStyle(formData.role === 'student')}
                      onClick={() => setFormData({ ...formData, role: 'student' })}
                    >
                      Student
                    </button>
                  </div>
                  <div className="col">
                    <button
                      type="button"
                      style={roleButtonStyle(formData.role === 'admin')}
                      onClick={() => setFormData({ ...formData, role: 'admin' })}
                    >
                      Admin
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* Submit Button */}
            <button
              type="submit"
              className="btn mb-4"
              style={buttonStyle}
            >
              {isSignUp ? 'Create Account' : 'Login'}
            </button>
          </form>
          {/* Divider */}
          <div className="text-center mb-4">
            <span style={{ color: '#9ca3af', fontSize: '15px', fontWeight: 500 }}>
              OR CONTINUE WITH
            </span>
          </div>
          {/* Social Login */}
          <div className="d-flex gap-3 mb-4">
            <button className="btn" style={socialButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
            <button className="btn" style={socialButtonStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
          </div>
          {/* Terms */}
          <div className="text-center">
            <small style={{ color: '#8983a7', fontWeight: 500, fontSize: '1rem' }}>
              By creating an account, you agree to our{' '}
              <a href="#" style={{ color: '#a682e3', textDecoration: 'underline', fontWeight: 600 }}>Terms of Service</a>
              {' '}and{' '}
              <a href="#" style={{ color: '#a682e3', textDecoration: 'underline', fontWeight: 600 }}>Privacy Policy</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
