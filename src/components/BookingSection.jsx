import React, { useState } from "react";
import { useAppointments } from "../hooks/useAppointments"; // adjust path

export default function CounselorBooking() {
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCounselor, setSelectedCounselor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSessionType, setSelectedSessionType] = useState(""); // 👈 new
  const { addAppointment } = useAppointments();

  

  const counselors = [
    { name: "Dr. Sarah Johnson", tag: "Top Rated", expertise: "Anxiety & Stress Management", rating: "4.9", sessions: "340+ sessions" },
    { name: "Dr. Michael Chen", tag: "Verified", expertise: "Depression & Mood Disorders", rating: "4.8", sessions: "280+ sessions" },
    { name: "Dr. Emily Rodriguez", tag: "Student Specialist", expertise: "Academic Pressure & ADHD", rating: "4.9", sessions: "420+ sessions" },
  ];

  // 👇 new session type data
  const sessionTypes = [
    { type: "Video Call", duration: "50 min" },
    { type: "Phone Call", duration: "50 min" },
    { type: "Live Chat", duration: "45 min" },
  ];

  function handleBook() {
    if (!selectedCounselor || !selectedDate || !selectedTime || !selectedSessionType) {
      alert("Please select counselor, date, time and session type");
      return;
    }
    const appointment = {
      name: selectedCounselor.name,
      emoji: "👩‍⚕️",
      expertise: selectedCounselor.expertise,
      date: selectedDate,
      time: selectedTime,
      mode: selectedSessionType, // 👈 selected session type
      duration:
        sessionTypes.find((s) => s.type === selectedSessionType)?.duration ||
        "50 min",
      status: "Pending",
      action: "Waiting for Confirmation",
      color: "orange",
      message,
    };
    addAppointment(appointment);
    alert("Appointment booked! Check Appointments page.");
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10" id="book">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Book a Professional Counselor</h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mt-2">
            Connect with licensed mental health professionals who understand student life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Counselor List */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Choose Your Counselor</h5>
            {counselors.map((doc, idx) => (
              <div
                key={idx}
                className={`flex justify-between items-center p-4 mb-4 border rounded-xl bg-white shadow-sm ${
                  selectedCounselor === doc ? "border-indigo-500" : "border-gray-200"
                }`}
              >
                <div>
                  <h6 className="font-semibold text-gray-900 mb-1 flex items-center">
                    {doc.name}
                    <span className="ml-2 text-xs bg-blue-300 text-white px-2 py-0.5 rounded">
                      {doc.tag}
                    </span>
                  </h6>
                  <p className="text-sm text-gray-600 mb-1">{doc.expertise}</p>
                  <p className="text-xs text-gray-500">
                    ⭐ {doc.rating} · 👩‍⚕️ {doc.sessions}
                  </p>
                </div>
                <button
                  className="border border-indigo-500 text-indigo-500 hover:bg-indigo-50 px-3 py-1.5 rounded text-sm"
                  onClick={() => setSelectedCounselor(doc)}
                >
                  {selectedCounselor === doc ? "Selected" : "Select"}
                </button>
              </div>
            ))}
          </div>

          {/* Schedule Section */}
          <div>
            <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
              <h5 className="text-lg font-semibold mb-4">Schedule Your Session</h5>

              {/* Date */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              {/* Time Slots */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Available Time Slots</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
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

              {/* Session Type */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Session Type</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  value={selectedSessionType}
                  onChange={(e) => setSelectedSessionType(e.target.value)}
                >
                  <option value="">Select session type</option>
                  {sessionTypes.map((s, idx) => (
                    <option key={idx} value={s.type}>
                      {s.type} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Box */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message to counselor (optional)</label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                  placeholder="Share what's on your mind..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Book Button */}
              <div className="mt-6">
                <button
                  onClick={handleBook}
                  className="w-full bg-gradient-primary text-white rounded-lg py-3 font-semibold hover:opacity-90 transition"
                >
                  📅 Book Free Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
