import React, { useState } from 'react';

// ✅ Unified color palette from your previous pages
const colors = {
  purple: "#a682e3",
  lavender: "#efeaff",
  lightPurple: "#e8e4f9",
  accent: "#9177e6",
  card: "#fff",
  accentBlue: "#5ad7fa",
  accentPurple: "#967dff",
  iceBlue: "#e7f4ff",
  shadowBlue: "rgba(90,215,250,0.14)",
  shadowPurple: "rgba(166,130,227,0.13)",
  textDark: "#373869",
  textStrong: "#2d2b5c",
  chipBg: "#e0f2fe",
  chipBorder: "#5ad7fa",
  progress: "linear-gradient(90deg,#5ad7fa,#967dff)",
};

const moods = [
  { emoji: "😀", label: "happy" },
  { emoji: "😔", label: "sad" },
  { emoji: "😣", label: "anxious" },
  { emoji: "😡", label: "angry" },
  { emoji: "🥳", label: "excited" },
  { emoji: "😐", label: "neutral" },
];

const peerMessagesInit = [
  { sender: "Anonymous", text: "You matter! We’re rooting for you." },
  { sender: "A Friend", text: "Don’t be afraid to ask for help, we all need it sometimes." },
  { sender: "YOU!", text: "Take a breath and believe in yourself!" }
];

const practices = [
  { name: 'Body Scan', desc: 'Lie or sit, bring awareness from toes up to head, noticing sensations.', duration: '5–10 min' },
  { name: 'Five-Senses Check-In', desc: 'Name 1 thing you can see, hear, feel, taste, smell.', duration: '2 min' },
  { name: 'Mindful Breathing', desc: 'Focus only on the breath’s rhythm. Count 1–2–3 on inhale, 1–2–3 on exhale.', duration: '3–5 min' },
  { name: 'Mindful Eating', desc: 'Eat slowly, notice flavor, texture, and aroma of each bite.', duration: 'At meals' },
  { name: 'Walking Meditation', desc: 'Pay attention to each step and the contact of feet with the ground.', duration: '5–15 min' },
];

export default function MindfulnessPage() {
  const [done, setDone] = useState({});
  const [peerList, setPeerList] = useState(peerMessagesInit);
  const [peerName, setPeerName] = useState("");
  const [peerMsg, setPeerMsg] = useState("");
  const progress = (Object.values(done).filter(Boolean).length / practices.length) * 100;
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodText, setMoodText] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);

  function handleMoodSubmit(e) {
    e.preventDefault();
    setMoodHistory([{
      date: new Date().toLocaleDateString(),
      mood: selectedMood,
      note: moodText
    }, ...moodHistory.slice(0, 4)]);
    setMoodText("");
  }

  function handlePeerPost(e) {
    e.preventDefault();
    if (peerMsg.trim()) {
      setPeerList([{ sender: peerName || "Anonymous", text: peerMsg }, ...peerList]);
      setPeerMsg("");
      setPeerName("");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(120deg, ${colors.lavender} 0%, ${colors.lightPurple} 55%, ${colors.purple} 100%)`,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div className="container py-5" style={{ maxWidth: 1140 }}>
        {/* ===== Main Heading ===== */}
        <h1
          className="text-center mb-3"
          style={{
            color:"#3a3c6dff",fontWeight:800,fontSize:"4rem",marginBottom:8
          }}
        >
          Mindfulness Zone
        </h1>
        <p
          className="text-center mx-auto mb-5"
          style={{
            color: colors.textDark,
            fontSize: 20,
            maxWidth: 680,
            lineHeight: 1.6,
          }}
        >
          “Mindfulness is the art of noticing the present moment—your breath,
          body, thoughts, and surroundings—without judging them. It can help
          reduce stress, lift mood, and sharpen focus.”
        </p>

        {/* ===== Key Benefits ===== */}
        <h2
          style={{
            color: colors.accentPurple,
            fontWeight: 700,
            fontSize: 40,
            textAlign: "center",
            marginBottom: 22,
            textShadow: `0 0 6px ${colors.shadowBlue}`,
          }}
        >
          🌟 Key Benefits
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {[
            "Lowers stress hormones",
            "Improves sleep quality",
            "Builds emotional resilience",
            "Enhances concentration",
          ].map((b) => (
            <div
              key={b}
              style={{
                background: colors.card,
                color: colors.accentPurple,
                padding: "12px 22px",
                borderRadius: 18,
                fontWeight: 600,
                fontSize: 18,
                boxShadow: `0 4px 14px ${colors.shadowBlue}`,
                border: `2px solid ${colors.chipBorder}`,
                transition: "transform 0.18s",
              }}
            >
              {b}
            </div>
          ))}
        </div>

        {/* ===== Daily Practices ===== */}
        <h2
          style={{
            marginTop: 80,
            color: colors.accentPurple,
            fontWeight: 600,
            fontSize: 36,
            margin: "30px 0 16px 0",
            textShadow: `0 0 6px ${colors.shadowBlue}`,
          }}
        >
          🧘‍♀️ Simple Daily Practices
        </h2>
        <div className="row g-4 mb-4">
          {practices.map((p, idx) => (
            <div className="col-12 col-sm-6 col-lg-4 d-flex" key={p.name}>
              <div
                style={{
                  background: colors.card,
                  border: `3px solid ${done[idx] ? colors.accentPurple : colors.iceBlue}`,
                  borderRadius: 24,
                  boxShadow: `0 8px 28px ${colors.shadowBlue}`,
                  flex: 1,
                  padding: "26px 22px 18px 22px",
                  position: "relative",
                  cursor: "pointer",
                  transition: "box-shadow 0.22s, border-color 0.24s",
                }}
                onClick={() => setDone((d) => ({ ...d, [idx]: !d[idx] }))}
                tabIndex={0}
              >
                <div style={{ fontWeight: 700, fontSize: 22, color: colors.textStrong, marginBottom: 8 }}>
                  {p.name}
                </div>
                <div style={{ color: colors.accentPurple, fontSize: 16, fontWeight: 500, marginBottom: 12 }}>
                  {p.desc}
                </div>
                <div style={{ color: colors.textDark, fontSize: 14, marginBottom: 10 }}>
                  <span
                    style={{
                      background: colors.chipBg,
                      borderRadius: 12,
                      padding: "5px 16px",
                      border: `1.5px solid ${colors.chipBorder}`,
                    }}
                  >
                    ⏰ {p.duration}
                  </span>
                </div>
                <div style={{ position: "absolute", right: 20, top: 22 }}>
                  <input
                    type="checkbox"
                    checked={!!done[idx]}
                    onChange={() => setDone((d) => ({ ...d, [idx]: !d[idx] }))}
                    style={{
                      accentColor: colors.accentPurple,
                      width: 20,
                      height: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Progress Bar ===== */}
        <div
          className="mb-5 mx-auto"
          style={{
            maxWidth: 500,
            background: colors.card,
            borderRadius: 18,
            boxShadow: `0 4px 16px ${colors.shadowBlue}`,
            padding: 20,
            textAlign: "center",
            border: `2px solid ${colors.chipBorder}`,
          }}
        >
          <div
            style={{
              fontWeight: 700,
              fontSize: 18,
              color: colors.accentPurple,
              marginBottom: 8,
            }}
          >
            Progress: {Object.values(done).filter(Boolean).length} / {practices.length} completed
          </div>
          <div
            style={{
              height: 16,
              background: colors.iceBlue,
              width: "100%",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: `0 2px 18px ${colors.shadowBlue}`,
            }}
          >
            <div
              style={{
                height: "100%",
                background: colors.progress,
                width: `${progress}%`,
                transition: "width 0.28s",
              }}
            />
          </div>
        </div>

        {/* ===== Mood Tracker ===== */}
        <h2
          style={{
            marginTop: 80,
            color: colors.accentPurple,
            fontWeight: 600,
            fontSize: 36,
            margin: "30px 0 16px 0",
            textShadow: `0 0 6px ${colors.shadowBlue}`,
          }}
        >
          📝 Mood & Stress Tracker
        </h2>
        <div style={{
          background: colors.card,
          borderRadius: 18,
          boxShadow: `0 4px 14px ${colors.shadowPurple}`,
          padding: "24px 24px 20px 24px",
          marginBottom: 26,
          border: `2px solid ${colors.chipBorder}`,
        }}>
          <form onSubmit={handleMoodSubmit}>
            <div style={{ fontWeight: 600, color: colors.textStrong, marginBottom: 9, fontSize: 17 }}>
              Pick your mood:
              <div style={{ display: 'flex', gap: 13, marginTop: 9 }}>
                {moods.map(m => (
                  <button
                    key={m.label}
                    type="button"
                    onClick={() => setSelectedMood(m.label)}
                    style={{
                      background: selectedMood === m.label ? colors.progress : colors.iceBlue,
                      color: selectedMood === m.label ? "#fff" : colors.textDark,
                      border: `2px solid ${colors.chipBorder}`,
                      fontSize: 22,
                      borderRadius: 12,
                      cursor: "pointer",
                      padding: "7px 17px",
                      boxShadow: `0 2px 8px ${colors.shadowBlue}`,
                      fontWeight: 700,
                      transition: "background 0.2s",
                    }}>
                    {m.emoji}
                  </button>
                ))}
              </div>
            </div>
            <input
              type="text"
              placeholder="Describe your mood or stress, e.g. 'Calm, focused, little stress'"
              value={moodText}
              onChange={e => setMoodText(e.target.value)}
              style={{
                marginTop: 15,
                marginBottom: 15,
                width: "100%",
                padding: 10,
                borderRadius: 12,
                border: `2px solid ${colors.chipBorder}`,
                background: colors.iceBlue,
                fontSize: 16,
              }}
            />
            <button
              type="submit"
              style={{
                background: colors.progress,
                color: "#fff",
                border: "none",
                borderRadius: 12,
                padding: "10px 28px",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "17px",
                boxShadow: `0 2px 12px ${colors.shadowPurple}`,
              }}>
              Log Mood
            </button>
          </form>
          <div style={{ marginTop: 18 }}>
            <div style={{
              fontWeight: 700, color: colors.accentPurple,
              marginBottom: 6, fontSize: 17
            }}>
              Recent Mood Entries:
            </div>
            {moodHistory.length === 0 ? (
              <div style={{ color: colors.textDark }}>No entries yet.</div>
            ) : (
              <ul style={{ listStyle: "none", padding: 0 }}>
                {moodHistory.map((entry, idx) => (
                  <li key={idx} style={{
                    marginBottom: 9,
                    background: colors.iceBlue,
                    padding: "10px 13px",
                    borderRadius: 10,
                    borderLeft: `5px solid ${colors.accentPurple}`,
                    boxShadow: `0 2px 8px ${colors.shadowBlue}`,
                    color: colors.textDark,
                    fontWeight: 500,
                  }}>
                    <span style={{ fontSize: 20 }}>{moods.find(m => m.label === entry.mood)?.emoji || "🙂"}</span>
                    &nbsp;{entry.mood} — <em>{entry.note || "No description"}</em> <br />
                    <span style={{ fontSize: 13, color: colors.accentPurple }}>{entry.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* Peer Uplifting Wall */}
        <h3
          style={{
            marginTop: 80,
            color: colors.accentPurple,
            fontWeight: 600,
            fontSize: 36,
            margin: "30px 0 16px 0",
            textShadow: `0 0 6px ${colors.shadowBlue}`,
          }}
        >
          💌 Peer Uplifting Wall
        </h3>
        <form
          onSubmit={handlePeerPost}
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          <input
            type="text"
            placeholder="Your name (optional)"
            value={peerName}
            onChange={(e) => setPeerName(e.target.value)}
            style={{
              flex: "1 1 160px",
              padding: 10,
              borderRadius: 12,
              border: `2px solid ${colors.chipBorder}`,
              background: colors.card,
              fontSize: 16,
            }}
          />
          <input
            type="text"
            placeholder="Share a kind message…"
            value={peerMsg}
            onChange={(e) => setPeerMsg(e.target.value)}
            style={{
              flex: "3 1 300px",
              padding: 10,
              borderRadius: 12,
              border: `2px solid ${colors.chipBorder}`,
              background: colors.card,
              fontSize: 16,
            }}
          />
          <button
            type="submit"
            style={{
              background: colors.progress,
              color: "#fff",
              border: "none",
              borderRadius: 12,
              padding: "10px 28px",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "17px",
              boxShadow: `0 2px 12px ${colors.shadowPurple}`,
              transition: "background 0.18s",
            }}
          >
            Post
          </button>
        </form>
        <div
          style={{
            maxHeight: 240,
            overflowY: "auto",
            paddingRight: 8,
          }}
        >
          {peerList.map((m, i) => (
            <div
              key={i}
              style={{
                background: colors.iceBlue,
                padding: "12px 16px",
                marginBottom: 9,
                borderRadius: 15,
                boxShadow: `0 2px 8px ${colors.shadowBlue}`,
                borderLeft: `4.5px solid ${colors.accentPurple}`,
              }}
            >
              <strong style={{ color: colors.accentPurple }}>{m.sender}:</strong> {m.text}
            </div>
          ))}
        </div>
        {/* Recommended Resources */}
        <h3
          style={{
            marginTop: 80,
            color: colors.accentPurple,
            fontWeight: 600,
            fontSize: 36,
            margin: "30px 0 16px 0",
            textShadow: `0 0 6px ${colors.shadowBlue}`,
          }}
        >
          📚 Recommended Resources
        </h3>
        <ul style={{ color: colors.textDark, fontSize: 16, lineHeight: 1.7 }}>
          <li>
            <a href="https://www.headspace.com/" target="_blank" rel="noreferrer" style={{ color: colors.accentPurple }}>
              Headspace
            </a>{" "}
            – Guided meditations & mindfulness courses.
          </li>
          <li>
            <a href="https://www.calm.com/" target="_blank" rel="noreferrer" style={{ color: colors.accentPurple }}>
              Calm
            </a>{" "}
            – Relaxing music, breathing exercises, and sleep stories.
          </li>
          <li>
            <a
              href="https://www.mindful.org/meditation/mindfulness-getting-started/"
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.accentPurple }}
            >
              Mindful.org
            </a>{" "}
            – Articles & beginner-friendly guides.
          </li>
          <li>
            Podcast:{" "}
            <a
              href="https://www.tenpercent.com/podcast"
              target="_blank"
              rel="noreferrer"
              style={{ color: colors.accentPurple }}
            >
              Ten Percent Happier
            </a>{" "}
            – Practical advice from meditation teachers & scientists.
          </li>
        </ul>
      </div>
    </div>
  );
}
