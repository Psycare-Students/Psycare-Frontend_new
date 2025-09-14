import React from "react";
import { FaLeaf, FaBed, FaWind, FaBrain, FaPhoneAlt, FaGamepad } from "react-icons/fa";
import girlImage from "../assets/girl.jpg";

const categories = [
  "All",
  "Popular",
  "Trending",
  "Essential",
  "Featured",
  "Emergency",
  "Fun",
];

const resources = [
  {
    title: "Stress Management",
    tag: "Popular",
    rating: 4.8,
    description: "Learn effective techniques to manage academic and personal stress",
    details: "12 exercises",
    icon: <FaLeaf style={{ color: "#10B981", fontSize: "2rem" }} />,
  },
  {
    title: "Sleep Audio Library",
    tag: "Trending",
    rating: 4.9,
    description: "Guided meditations and calming sounds for better sleep",
    details: "25 audios",
    icon: <FaBed style={{ color: "#3B82F6", fontSize: "2rem" }} />,
  },
  {
    title: "Breathing Exercises",
    tag: "Essential",
    rating: 4.7,
    description: "Simple breathing techniques for anxiety and relaxation",
    details: "8 techniques",
    icon: <FaWind style={{ color: "#06B6D4", fontSize: "2rem" }} />,
  },
  {
    title: "Mindfulness Practice",
    tag: "Featured",
    rating: 4.8,
    description: "Daily mindfulness exercises to improve mental clarity",
    details: "15 practices",
    icon: <FaBrain style={{ color: "#8B5CF6", fontSize: "2rem" }} />,
  },
  {
    title: "Crisis Support",
    tag: "Emergency",
    rating: 5.0,
    description: "Immediate help resources and emergency contact information",
    details: "24/7 support",
    icon: <FaPhoneAlt style={{ color: "#EF4444", fontSize: "2rem" }} />,
  },
  {
    title: "Interactive Games",
    tag: "Fun",
    rating: 4.6,
    description: "Fun games designed to boost mood and reduce anxiety",
    details: "6 games",
    icon: <FaGamepad style={{ color: "#EC4899", fontSize: "2rem" }} />,
  },
];

export default function Resources() {
  const pageStyle = {
    position: "relative",
    minHeight: "100vh",
    backgroundImage: `url(${girlImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // FIXED BACKGROUND
    overflowX: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    inset: 0,
    background: "rgba(255,255,255,0.5)",
    backdropFilter: "blur(3px)",
    zIndex: 0,
  };

  const containerStyle = {
    position: "relative",
    zIndex: 1,
    maxWidth: "1200px",
    margin: "0 auto",
    paddingTop: "60px",
    paddingBottom: "60px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "40px",
    color: "#111827",
  };

  const categoryBtnStyle = {
    padding: "8px 20px",
    borderRadius: "50px",
    background: "rgba(255, 255, 255, 0.7)",
    border: "1px solid rgba(0,0,0,0.1)",
    color: "#111827",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const cardsGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "20px",
    padding: "25px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    color: "#1F2937",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHover = {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 25px rgba(0,0,0,0.15)",
  };

  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  };

  return (
    <div style={pageStyle}>
      <div style={overlayStyle}></div>
      <div style={containerStyle}>
        {/* Heading */}
        <div style={headingStyle}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px" }}>
            Wellness Resources Hub
          </h2>
          <p style={{ fontSize: "1.1rem" }}>
            Explore our comprehensive collection of mental health tools and resources
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "50px" }}>
          {categories.map((cat, idx) => (
            <button key={idx} style={categoryBtnStyle}>
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div style={cardsGrid}>
          {resources.map((res, idx) => (
            <div
              key={idx}
              style={cardStyle}
              onMouseEnter={e => Object.assign(e.currentTarget.style, cardHover)}
              onMouseLeave={e =>
                Object.assign(e.currentTarget.style, { transform: "none", boxShadow: "0 10px 20px rgba(0,0,0,0.08)" })
              }
            >
              <div style={{ marginBottom: "15px" }}>{res.icon}</div>
              <h5 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "8px" }}>
                {res.title}
              </h5>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ background: "#F3F4F6", color: "#374151", padding: "2px 8px", borderRadius: "12px", fontSize: "0.85rem" }}>
                  {res.tag}
                </span>
                <span style={{ color: "#FBBF24", fontWeight: "500" }}>⭐ {res.rating}</span>
              </div>
              <p style={{ color: "#4B5563", marginBottom: "8px" }}>{res.description}</p>
              <small style={{ color: "#6B7280" }}>{res.details}</small>
              <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                <button style={{ ...buttonStyle, background: "#2563EB", color: "#fff" }}>Start</button>
                <button style={{ ...buttonStyle, background: "#F3F4F6", color: "#374151" }}>Preview</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
