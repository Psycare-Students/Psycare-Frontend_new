import {
  FaComments,
  FaShieldAlt,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import girlImage from "../assets/girl.jpg";


export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner container d-flex align-items-center">
        <div className="row w-100 align-items-center gy-4">
          {/* Text column */}
          <div className="col-md-6 order-2 order-md-1 text-center text-md-start">
            <small className="muted-badge">Student Mental Health Support</small>

            <h1 className="hero-title">
              Your Mental <span>Wellness Journey</span> <br />
              Starts Here
            </h1>

            <p className="hero-sub">
              Comprehensive AI-powered mental health support designed specifically
              for students. Connect with counselors, access wellness resources, and
              join a supportive community.
            </p>

            <div className="d-flex flex-wrap badges gap-2 mb-3">
              <span className="badge-pill">
                <FaComments color="#a682e3" className="me-2" /> 24/7 AI Chat
              </span>
              <span className="badge-pill">
                <FaShieldAlt color="#53cc7cff" className="me-2" /> 100% Anonymous
              </span>
              <span className="badge-pill">
                <FaUsers color="#e9b246ff" className="me-2" /> Peer Support
              </span>
            </div>

            <div className="d-flex gap-3 mb-4">
              <a
                className="btn btn-primary-custom d-inline-flex align-items-center"
                href="#"
              >
                <FaComments className="me-2" /> Start AI Chat
              </a>
              <a
                className="btn btn-light-custom d-inline-flex align-items-center"
                href="#"
              >
                <FaCalendarAlt className="me-2" /> Book a Counselor
              </a>
            </div>

            {/* Stats row like screenshot */}
            <div className="row text-center">
              <div className="col-4">
                <div className="hero-stat">
                  <div className="hero-stat-number gradient-purple">24/7</div>
                  <div className="hero-stat-text">AI Support</div>
                </div>
              </div>
              <div className="col-4">
                <div className="hero-stat">
                  <div className="hero-stat-number gradient-blue">500+</div>
                  <div className="hero-stat-text">Students Helped</div>
                </div>
              </div>
              <div className="col-4">
                <div className="hero-stat">
                  <div className="hero-stat-number gradient-green">98%</div>
                  <div className="hero-stat-text">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="col-md-6 order-1 order-md-2 d-flex justify-content-center">
            <div className="hero-image-wrap">
              <img
                src={girlImage}
                alt="Meditation"
                className="img-fluid hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
