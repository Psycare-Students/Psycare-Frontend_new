import React, { useState } from "react";
import { useAppointments } from "../hooks/useAppointments";
import LoginPrompt from "./ui/loginPrompt";

export default function AppointmentsPage() {
  const { appointments, loading, error, cancelAppointment } = useAppointments();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const colorClasses = {
    green: "bg-green-100 text-green-700",
    orange: "bg-orange-100 text-orange-700",
    purple: "bg-purple-100 text-purple-700",
    default: "bg-gray-100 text-gray-700",
  };

  const handleCancel = async (id) => {
    const result = await cancelAppointment(id);
    if (result === "unauthorized") {
      setShowLoginPrompt(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-transparent" id="appointments">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Your Appointments</h1>
          <p className="text-gray-600 text-sm">
            Manage your counseling sessions and track your mental health journey
          </p>
        </div>

        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {!loading && error === "unauthorized" && (
          <p className="text-center text-gray-500">Please login to see your appointments.</p>
        )}

        {!loading && error === "network" && (
          <p className="text-center text-red-500">⚠️ Unable to fetch appointments. Try again later.</p>
        )}

        <div className="space-y-4">
          {appointments.map((s) => (
            <div
              key={s._id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-medium flex items-center gap-2">
                    <span>{s.emoji || "👤"}</span> {s.name}
                  </h3>
                  <p className="text-xs text-gray-500">{s.expertise}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-medium ${
                    colorClasses[s.color] || colorClasses.default
                  }`}
                >
                  {s.status}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-600">
                <span>📅 {s.date}</span>
                <span>🕑 {s.time}</span>
                <span>💻 {s.mode}</span>
                <span>⏱ {s.duration}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <button
                  onClick={() => handleCancel(s._id)}
                  className="px-3 py-1 rounded-md text-xs border border-gray-200 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🚨 Show LoginPrompt only when cancelling unauthorized */}
      {showLoginPrompt && (
        <LoginPrompt
          onLogin={() => (window.location.href = "/login")}
          onSignup={() => (window.location.href = "/signup")}
          onClose={() => setShowLoginPrompt(false)}
        />
      )}
    </div>
  );
}
