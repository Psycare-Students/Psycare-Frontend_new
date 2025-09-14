import React, { useState } from "react";

export default function CounselorBooking() {
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <section
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9fafc",
        padding: "40px 0",
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 style={{ fontWeight: "700", color: "#1e1e2f" }}>
            Book a Professional Counselor
          </h2>
          <p style={{ color: "#666", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
            Connect with licensed mental health professionals who understand student life.
          </p>
        </div>

        <div className="row g-4">
          {/* Counselor List */}
          <div className="col-lg-6">
            <h5 className="fw-bold mb-3">Choose Your Counselor</h5>
            {[
              {
                name: "Dr. Sarah Johnson",
                tag: "Top Rated",
                expertise: "Anxiety & Stress Management",
                rating: "4.9",
                sessions: "340+ sessions",
              },
              {
                name: "Dr. Michael Chen",
                tag: "Verified",
                expertise: "Depression & Mood Disorders",
                rating: "4.8",
                sessions: "280+ sessions",
              },
              {
                name: "Dr. Emily Rodriguez",
                tag: "Student Specialist",
                expertise: "Academic Pressure & ADHD",
                rating: "4.9",
                sessions: "420+ sessions",
              },
            ].map((doc, idx) => (
              <div
                key={idx}
                className="d-flex justify-content-between align-items-center p-3 mb-3 counselor-card"
              >
                <div>
                  <h6 className="fw-bold mb-1">
                    {doc.name}
                    <span
                      className="badge bg-success ms-2"
                      style={{ fontSize: "12px" }}
                    >
                      {doc.tag}
                    </span>
                  </h6>
                  <p className="mb-1" style={{ fontSize: "14px", color: "#555" }}>
                    {doc.expertise}
                  </p>
                  <p className="mb-0" style={{ fontSize: "13px", color: "#888" }}>
                    ⭐ {doc.rating} · 👩‍⚕️ {doc.sessions}
                  </p>
                </div>
                <button className="btn btn-outline-primary btn-sm">Select</button>
              </div>
            ))}
          </div>

          {/* Schedule Section */}
          <div className="col-lg-6">
            <div className="schedule-card">
              <h5 className="fw-bold mb-3">Schedule Your Session</h5>

              {/* Session Types */}
              {[
                { type: "Video Call", duration: "50 min" },
                { type: "Phone Call", duration: "50 min" },
                { type: "Live Chat", duration: "45 min" },
              ].map((item, idx) => (
                <div key={idx} className="session-type">
                  <span>
                    {item.type}{" "}
                    <small className="text-muted">({item.duration})</small>
                  </span>
                  <span style={{ color: "green", fontWeight: "500" }}>Free</span>
                </div>
              ))}

              {/* Date Picker */}
              <div className="mt-3">
                <label className="form-label fw-semibold">Preferred Date</label>
                <input type="date" className="form-control" />
              </div>

              {/* Time Slots */}
              <div className="mt-3">
                <label className="form-label fw-semibold">Available Time Slots</label>
                <select
                  className="form-select"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  <option value="">Select a time</option>
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>2:00 PM</option>
                  <option>3:00 PM</option>
                  <option>4:00 PM</option>
                  <option>5:00 PM</option>
                </select>
              </div>

              {/* Message Box */}
              <div className="mt-3">
                <label className="form-label fw-semibold">
                  Anything you’d like your counselor to know? (Optional)
                </label>
                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Share what's on your mind or any specific concerns..."
                />
              </div>

              {/* Book Button */}
              <div className="mt-4">
                <button className="btn book-btn w-100">
                  📅 Book Free Session
                </button>
                <p className="text-muted text-center mt-2" style={{ fontSize: "12px" }}>
                  All sessions are completely free for students. You can cancel
                  or reschedule up to 2 hours before your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
