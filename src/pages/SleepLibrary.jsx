import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const quickSleepFacts = [
  "Adults usually need 7–9 hours of good sleep per night.",
  "A cool, dark, and quiet room helps improve sleep quality.",
  "Short 20-30 minute naps can boost alertness without grogginess.",
  "Morning sunlight resets your internal biological clock.",
  "Sleep enhances memory, mood, and immune function.",
];

const dailyChecklist = [
  "Avoid caffeine after 3 pm.",
  "Keep a consistent sleep schedule.",
  "Dim lights 45 minutes before bedtime.",
  "No screens 1 hour before bed.",
  "Try 4-7-8 breathing exercise.",
];

const quickNapTips = [
  "Ideal nap length: 20 minutes.",
  "Find a quiet, dark place or use an eye mask.",
  "Set a gentle alarm to avoid deep sleep.",
];

const categories = ["All Categories", "Meditation", "Nature", "Music", "Stories", "Wellness"];

const audioCardsData = [
  { id: 1, title: "Guided Sleep Meditations", category: "Meditation", icon: "🎧", duration: "15-45 min", badge: "Meditation", desc: "Gentle meditations with calming voices to quiet racing thoughts and guide you into peaceful sleep. Perfect for stress relief.", hd: true, color: "linear-gradient(135deg, #eda6f6 0%, #d4e7fa 100%)" },
  { id: 2, title: "Nature Soundscapes", category: "Nature", icon: "🌲", duration: "30-60 min", badge: "Nature", desc: "Immersive natural settings: ocean waves, forest, rain, and streams for serene sleep.", hd: true, color: "linear-gradient(135deg, #b6efea 0%, #d7eafd 100%)" },
  { id: 3, title: "Soft Instrumentals", category: "Music", icon: "🎼", duration: "20-40 min", badge: "Music", desc: "Peaceful piano, gentle guitar, and ambient synths for easing tension.", hd: true, color: "linear-gradient(135deg, #efd8fd 0%, #c9f7fa 100%)" },
  { id: 4, title: "Bedtime Stories", category: "Stories", icon: "📖", duration: "25-35 min", badge: "Stories", desc: "Soothing tales and classic stories narrated in gentle voices to help you drift peacefully.", hd: true, color: "linear-gradient(135deg, #fffbd9 0%, #f6e8fc 100%)" },
  { id: 5, title: "Breathing & Body Scan", category: "Wellness", icon: "💨", duration: "10-30 min", badge: "Wellness", desc: "Guided breathing and progressive body relaxation for easy unwinding.", hd: true, color: "linear-gradient(135deg, #cbf5d6 0%, #e3f8fc 100%)" },
  { id: 6, title: "Peaceful Animal Sounds", category: "Nature", icon: "🐱", duration: "45-60 min", badge: "Nature", desc: "Purring cats, gentle bird songs, and soothing animal sounds for cozy companionship.", hd: true, color: "linear-gradient(135deg, #ffe4ce 0%, #ffefec 100%)" },
];

const colors = {
  backgroundGradientStart: "#ebe1fc",
  backgroundGradientEnd: "#dbf0ff",
  cardShadowBlue: "rgba(110,193,255,0.13)",
  cardShadowPurple: "rgba(166,130,227,0.14)",
  accentPurple: "#a682e3",
  accentBlue: "#67c7fc",
  headingPurple: "#674ba2",
  textDarkGray: "#54575b",
};

export default function SleepAudioLibrary() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All Categories");
  const [fav, setFav] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  function filteredAudios() {
    return audioCardsData.filter(
      a =>
        (cat === "All Categories" || a.category === cat) &&
        (!search || a.title.toLowerCase().includes(search.toLowerCase()))
    );
  }

  function toggleFavorite(id) {
    setFav(f => (f.includes(id) ? f.filter(x => x !== id) : [...f, id]));
  }

  function togglePlayAudio(id) {
    setCurrentlyPlaying(currentlyPlaying === id ? null : id);
  }

  const cardStyle = {
    borderRadius: "20px",
    boxShadow: colors.cardShadowBlue,
    padding: 17,
    marginBottom: 16,
    minHeight: 180,
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const infoCardStyle = {
    borderRadius: 18,
    padding: "20px",
    boxShadow: `0 3px 18px ${colors.cardShadowPurple}`,
    minHeight: "100%",
    transition: "transform 0.5s, opacity 0.5s",
    opacity: 0,
    animation: "fadeInUp 0.8s forwards",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(120deg, ${colors.backgroundGradientStart}, ${colors.backgroundGradientEnd})`,
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
        paddingBottom: "50px",
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .info-card:nth-child(1) { animation-delay: 0.2s; }
        .info-card:nth-child(2) { animation-delay: 0.4s; }
        .info-card:nth-child(3) { animation-delay: 0.6s; }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "auto", padding: "30px 20px" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            animation: "fadeInUp 0.8s forwards",
          }}
        >
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "bold",
              color: colors.headingPurple,
              textShadow: "0 2px 16px #efefff80",
              opacity: 0,
              animation: "fadeInUp 0.8s forwards",
            }}
          >
            ✨ Sleep Audio Library ✨
          </h1>
          <p
            style={{
              color: colors.textDarkGray,
              fontSize: "1.11rem",
              lineHeight: "1.4",
              maxWidth: 580,
              margin: "auto",
              opacity: 0,
              animation: "fadeInUp 1s forwards",
              animationDelay: "0.2s",
            }}
          >
            Discover peaceful audio experiences designed to help you unwind, relax, and drift into the sweetest dreams
          </p>
        </div>

        {/* Search & category */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "12px 15px",
            gap: "10px",
            borderRadius: "14px",
            backgroundColor: "rgba(255,255,255,0.63)",
            boxShadow: `0 5px 22px ${colors.cardShadowBlue}`,
            marginBottom: "2rem",
          }}
        >
          <input
            type="search"
            placeholder="Search for sleep audios..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              flexGrow: 1,
              minWidth: "200px",
              padding: "8px 14px",
              borderRadius: "12px",
              border: "none",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              style={{
                border: "none",
                borderRadius: "14px",
                padding: "8px 18px",
                cursor: "pointer",
                backgroundColor: c === cat ? colors.accentPurple : "#fff",
                color: c === cat ? "#fff" : colors.accentPurple,
                fontWeight: "600",
                minWidth: "90px",
                boxShadow: c === cat ? `0 2px 10px ${colors.cardShadowPurple}` : undefined,
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Sleep Audio Cards */}
        <div className="row g-4">
          {filteredAudios().map(audio => (
            <div key={audio.id} className="col-12 col-md-6">
              <div
                style={{
                  ...cardStyle,
                  background: audio.color,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ fontSize: 26, marginRight: 10 }}>{audio.icon}</div>
                  <div>
                    <b style={{ fontSize: 17.5, color: colors.headingPurple }}>{audio.title}</b>
                    <br />
                    <span
                      style={{
                        fontSize: 11,
                        backgroundColor: "#e8e3fc",
                        borderRadius: 10,
                        padding: "2.5px 7px",
                        color: colors.accentPurple,
                        marginTop: 2,
                        fontWeight: 700,
                        display: "inline-block",
                      }}
                    >
                      {audio.badge}
                    </span>
                  </div>
                  <div
                    style={{
                      marginLeft: "auto",
                      fontSize: 20,
                      cursor: "pointer",
                      color: fav.includes(audio.id) ? "#e63c62" : "#aaa",
                    }}
                    onClick={() => toggleFavorite(audio.id)}
                  >
                    ♥
                  </div>
                </div>
                <div style={{ color: colors.textDarkGray, fontSize: 14.7, minHeight: "3rem", marginBottom: 6 }}>
                  {audio.desc}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 12.7,
                    color: "#7c73a5",
                    marginBottom: 11,
                  }}
                >
                  <div>⏲️ {audio.duration}</div>
                  {audio.hd && <div>🎧 HD Audio</div>}
                </div>
                <button
                  onClick={() => togglePlayAudio(audio.id)}
                  style={{
                    background:
                      currentlyPlaying === audio.id
                        ? `linear-gradient(90deg, #843bde, #6740ff 90%)`
                        : `linear-gradient(90deg, #a17cfb 30%, ${colors.accentBlue} 100%)`,
                    border: "none",
                    borderRadius: "17px",
                    width: "100%",
                    color: "white",
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "8px 0",
                    cursor: "pointer",
                    marginTop: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 13,
                    letterSpacing: 0.02,
                  }}
                >
                  <span style={{ fontFamily: "monospace", fontSize: 15 }}>
                    {currentlyPlaying === audio.id ? "⏸️" : "▶️"}
                  </span>
                  <span>{currentlyPlaying === audio.id ? "Playing" : "Play Audio"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sweet Dreams Await Card */}
        <div
          style={{
            background: `linear-gradient(120deg, ${colors.accentPurple}, ${colors.accentBlue})`,
            borderRadius: 18,
            padding: "1.1rem 1.7rem",
            margin: "2.1rem auto 1.5rem auto",
            color: "white",
            fontWeight: 600,
            fontSize: "1.1rem",
            textAlign: "center",
            maxWidth: 430,
            boxShadow: `0 3px 18px ${colors.cardShadowPurple}`
          }}
        >
          <span style={{ fontSize: 18, letterSpacing: 0.04 }}>
            ✨ Sweet Dreams Await ✨
          </span>
          <div
            style={{
              fontWeight: 400,
              marginTop: 7,
              fontSize: "1.01rem",
              letterSpacing: 0.01,
              opacity: 0.94
            }}
          >
            Choose your perfect companion and drift into peaceful slumber.<br />
            Track your progress and build healthy sleep habits one night at a time.
          </div>
        </div>



        {/* === Static Info Cards with Bullets and Animations === */}
        <h1 style={{
              fontSize: "2.8rem",
              textAlign: "center",
              fontWeight: "bolder",
              marginTop: "8rem",
              color: colors.headingPurple,
              textShadow: "0 2px 16px #efefff80",
              opacity: 0,
              animation: "fadeInUp 0.8s forwards",
            }}>
              Your Path to Better Sleep 😴 
            </h1>
        <div
          className="d-flex flex-wrap justify-content-center mt-5"
          style={{ gap: "30px" }} // <-- horizontal + vertical space between cards
        >
          <div
            className="info-card"
            style={{
              ...infoCardStyle,
              background: "#f5f1ff",
              padding: "25px",
              minWidth: "300px", // ensures proper width for spacing
              flex: "1 1 300px",
            }}
          >
            <h4 style={{ color: colors.headingPurple, marginBottom: 15 }}>🌙 Sleep Facts</h4>
            <ul style={{ paddingLeft: 0, marginBottom: 0, listStyle: "none" }}>
              {quickSleepFacts.map((fact, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: 12,
                    color: colors.textDarkGray,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: colors.accentPurple, fontSize: 18 }}>➤</span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="info-card"
            style={{
              ...infoCardStyle,
              background: "#e8f8f1",
              padding: "25px",
              minWidth: "300px",
              flex: "1 1 300px",
            }}
          >
            <h4 style={{ color: colors.headingPurple, marginBottom: 15 }}>☑️ Daily Checklist</h4>
            <ul style={{ paddingLeft: 0, marginBottom: 0, listStyle: "none" }}>
              {dailyChecklist.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: 12,
                    color: colors.textDarkGray,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: colors.accentPurple, fontSize: 18 }}>➤</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="info-card"
            style={{
              ...infoCardStyle,
              background: "#fff4e7",
              padding: "25px",
              minWidth: "300px",
              flex: "1 1 300px",
            }}
          >
            <h4 style={{ color: colors.headingPurple, marginBottom: 15 }}>😴 Quick Nap Tips</h4>
            <ul style={{ paddingLeft: 0, marginBottom: 0, listStyle: "none" }}>
              {quickNapTips.map((tip, idx) => (
                <li
                  key={idx}
                  style={{
                    marginBottom: 12,
                    color: colors.textDarkGray,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: colors.accentPurple, fontSize: 18 }}>➤</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === End Static Cards === */}
      </div>
    </div>
  );
}
