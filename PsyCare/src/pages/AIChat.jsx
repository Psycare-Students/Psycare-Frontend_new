import React from "react";
import { Send, Mic, Image as ImageIcon } from "lucide-react";
import girlBg from "../assets/girl.jpg"; // adjust path if needed

export default function MentalHealthChatUI() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // no page scroll
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* background */}
      <img
        src={girlBg}
        alt="background"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: "blur(10px) brightness(0.9)",
          transform: "scale(1.1)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.15)",
          zIndex: 0,
        }}
      />

      {/* content wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "95%",
          maxWidth: "1100px",
          gap: 20,
        }}
      >
        {/* heading */}
        <h2
          style={{
            fontWeight: 700,
            color: "#1e1e2f",
            textAlign: "center",
            marginBottom: 10,
            background: "rgba(255,255,255,0.8)",
            padding: "8px 20px",
            borderRadius: 12,
          }}
        >
          💬 AI Chat Support
        </h2>

        {/* row with chat + sidebar */}
        <div
          style={{
            display: "flex",
            gap: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {/* Chat panel */}
          <div
            style={{
              flex: 2,
              maxWidth: 700, // reduce chat size
              borderRadius: 20,
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              height: 500, // fixed height, no scrolling
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(90deg,#a682e3,#b799ff)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 16,
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              AI Mental Health Assistant
              <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: "#4ade80",
                    borderRadius: "50%",
                  }}
                />
                <span style={{ fontSize: 12 }}>Online</span>
              </span>
            </div>

            {/* Messages area – fixed height (no scroll) */}
            <div
              style={{
                padding: 20,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                overflow: "hidden", // no internal scroll
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "10px 14px",
                  borderRadius: 12,
                  maxWidth: "70%",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  fontSize: 14,
                }}
              >
                Hi there! I'm your AI mental health companion. How are you feeling today? 😊
              </div>

              <div
                style={{
                  background: "linear-gradient(90deg,#a682e3,#b799ff)",
                  color: "#fff",
                  padding: "10px 14px",
                  borderRadius: 12,
                  maxWidth: "70%",
                  alignSelf: "flex-end",
                  fontSize: 14,
                }}
              >
                I’ve been feeling pretty anxious about my upcoming exams.
              </div>

              <div
                style={{
                  background: "#fff",
                  padding: "10px 14px",
                  borderRadius: 12,
                  maxWidth: "70%",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  fontSize: 14,
                }}
              >
                I understand exam anxiety can be overwhelming. Let’s explore some strategies that might help.
              </div>
            </div>

            {/* Input */}
            <div
              style={{
                borderTop: "1px solid #e6e6e6",
                padding: 10,
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(255,255,255,0.95)",
              }}
            >
              <input
                type="text"
                placeholder="Type your message here..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: 14,
                  background: "transparent",
                }}
              />
              <button
                style={{
                  border: "none",
                  background: "#4ade80",
                  borderRadius: "50%",
                  padding: 6,
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                <Send size={16} />
              </button>
              <Mic size={20} style={{ cursor: "pointer", color: "#555" }} />
              <ImageIcon size={20} style={{ cursor: "pointer", color: "#555" }} />
            </div>

            <p style={{ textAlign: "center", fontSize: 11, margin: "4px 0", color: "gray" }}>
              All conversations are private and secure 🔒
            </p>
          </div>

          {/* Sidebar */}
          <div
            style={{
              flex: 1,
              maxWidth: 300,
              display: "flex",
              flexDirection: "column",
              gap: 15,
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.9)",
                borderRadius: 16,
                padding: 14,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                backdropFilter: "blur(6px)",
                fontSize: 14,
              }}
            >
              <h6 style={{ fontWeight: 600, marginBottom: 8 }}>💡 Helpful Tips</h6>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                <li style={{ marginBottom: 6 }}>❤️ Take deep breaths</li>
                <li style={{ marginBottom: 6 }}>✨ Try grounding techniques</li>
                <li>🔮 You are safe and supported</li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.9)",
                borderRadius: 16,
                padding: 14,
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                backdropFilter: "blur(6px)",
                fontSize: 14,
              }}
            >
              <h6 style={{ fontWeight: 600, marginBottom: 8 }}>🌟 Features</h6>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                <li>🟢 24/7 Availability</li>
                <li>🔵 Multilingual Support</li>
                <li>🟣 Voice Messages</li>
                <li>🟠 Personalized Responses</li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: 16,
                padding: 14,
                textAlign: "center",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                border: "1px solid #eee",
                backdropFilter: "blur(6px)",
                fontSize: 14,
              }}
            >
              <h6 style={{ fontWeight: 600, color: "red" }}>🚨 Crisis Support</h6>
              <p style={{ fontSize: 13, margin: "8px 0" }}>
                If you’re in crisis, our AI will immediately connect you with human support.
              </p>
              <button
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Emergency Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
