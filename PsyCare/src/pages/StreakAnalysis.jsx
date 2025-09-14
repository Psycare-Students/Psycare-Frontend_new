import { FaHeart, FaCalendarCheck, FaFire } from "react-icons/fa";

export default function StreakAnalysis() {
  const feelings = [
    { emoji: "😊", text: "Great" },
    { emoji: "🙂", text: "Good" },
    { emoji: "😐", text: "Okay" },
    { emoji: "😔", text: "Down" },
    { emoji: "😭", text: "Sad" },
  ];

  const stats = [
    {
      bg: "linear-gradient(135deg,#a682e3,#9b5ce1)",
      icon: <FaHeart size={28} color="#fff" />,
      number: "85",
      label: "Wellness Score",
      sub: "+5 from last week",
    },
    {
      bg: "linear-gradient(135deg,#4ca1f8,#3486f4)",
      icon: <FaCalendarCheck size={28} color="#fff" />,
      number: "12",
      label: "Sessions Completed",
      sub: "This month",
    },
    {
      bg: "linear-gradient(135deg,#2cc98b,#1fb876)",
      icon: <FaFire size={28} color="#fff" />,
      number: "7",
      label: "Day Streak",
      sub: "Keep it up!",
    },
  ];

  return (
    <section className="py-5 mt-5">
      <div className="container">
        {/* Heading */}
        <h1 className="text-center fw-bold mb-2">
          Mental Wellness Streak Analysis
        </h1>
        <p className="text-center mb-5 text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Track your wellness journey with daily mood monitoring and personalized insights.
        </p>

        {/* Feeling cards */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {feelings.map((f, idx) => (
            <div
              key={idx}
              className="bg-white rounded-4 shadow-sm text-center p-3 feeling-card"
              style={{
                width: 90,
                height: 90,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ fontSize: "2rem" }}>{f.emoji}</div>
              <div className="fw-semibold mt-1" style={{ fontSize: "0.9rem" }}>
                {f.text}
              </div>
            </div>
          ))}
        </div>

        {/* Stats cards */}
        <div className="row gy-4">
          {stats.map((s, idx) => (
            <div key={idx} className="col-md-4 col-sm-6">
              <div
                className="bg-white rounded-4 shadow-sm p-4 h-100 text-center"
                style={{
                  border: "1px solid #eee",
                }}
              >
                {/* Circle icon */}
                <div
                  className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: 70,
                    height: 70,
                    background: s.bg,
                  }}
                >
                  {s.icon}
                </div>
                <h3 className="fw-bold mb-0" style={{ color: "#444" }}>
                  {s.number}
                </h3>
                <p className="fw-semibold mb-1">{s.label}</p>
                <small className="text-success">{s.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
