import React, { useState, useRef, useEffect } from "react";

// --- Affirmations, Jokes, Mood Data, Questions, and Tips ---
const AFFIRMATIONS = [
  "You’ve handled tough days before—this one is no match for you!",
  "Rest, reset, and rise stronger—your wellbeing matters.",
  "Every deep breath builds your resistance to stress.",
  "You are not alone—everyone struggles sometimes.",
  "Reaching out for help is a sign of wisdom, not weakness.",
  "You can always start anew. Fresh starts are powerful!",
];

const JOKES = [
  "Why don’t eggs tell each other secrets? They might crack up! 😄",
  "Why did the math book look sad? Too many problems... (But yours are solvable!)",
  "How do robots relax after school? They recharge! 🤖🔋",
  "Why don’t students trust atoms? Because they make up everything!",
];

const moodResponses = {
  happy: "Glad you're feeling upbeat! Spread positivity today 😊",
  relaxed: "Relaxation is your superpower. Great job staying calm! 🧘‍♂️",
  tired: "Rest is important. Try stretching or a short nap! 💤",
  anxious: "Focus on your breathing or journaling your thoughts. You're more resilient than you think!",
  sad: "Sad days happen—be gentle with yourself. Reach out if needed. 💖",
  angry: "Anger is natural. Take deep breaths and let go. Try drawing or squeezing a stress ball 💢",
  excited: "Let this excitement fuel your goals, but balance with rest!",
  stressed: "Stress is okay. Try a tip below or confide in someone.",
  proud: "Celebrate your milestones—big or small! ✨",
  confused: "Uncertainty means you're learning—break things into steps.",
};

const moodEmojis = [
  { label: "happy", icon: "😄" },
  { label: "relaxed", icon: "😌" },
  { label: "anxious", icon: "😣" },
  { label: "angry", icon: "😡" },
  { label: "sad", icon: "😭" },
  { label: "excited", icon: "🤩" },
  { label: "stressed", icon: "😱" },
  { label: "proud", icon: "🥳" },
  { label: "confused", icon: "🫤" },
  { label: "rainbow", icon: "🌈" },
];

function getStressMessage(val) {
  if (val === "") return "";
  const v = Number(val);
  if (isNaN(v) || v < 0) return "Enter a valid stress level (0–10)";
  if (v <= 2) return "Relaxed 😌 Mindfulness keeps you steady.";
  if (v <= 5) return "Mild stress—try deep breathing or a short walk! 🌱";
  if (v <= 8) return "Tension is natural: use a grounding technique or peer support!";
  return "High stress! Use a quick tip, reach out, or contact the crisis helpline if needed.";
}

const moodQuestions = [
  {
    question: "How motivated do you feel about studies today?",
    options: ["Very motivated", "Somewhat motivated", "Neutral", "Low", "Not at all"],
  },
  {
    question: "How well did you sleep last night?",
    options: ["Excellent", "Good", "Okay", "Poor", "Very poor"],
  },
  {
    question: "Do you feel supported by friends/family?",
    options: ["Very much", "Somewhat", "Neutral", "A little", "Not at all"],
  },
  {
    question: "How worried/anxious have you felt today?",
    options: ["Not at all", "A little", "Sometimes", "Often", "Constantly"],
  },
  {
    question: "How would you rate your overall mood now?",
    options: ["Very positive", "Positive", "Neutral", "Negative", "Very negative"],
  },
];

const TIP_LIBRARY = [
  [
    "Stay focused and celebrate daily wins—you're in your best zone!",
    "Maintain good sleep routines for long-term resilience.",
    "Cherish strong relationships—they help buffer life's challenges.",
    "Your low anxiety today is great. Keep stress at bay with regular breaks.",
    "Keep nurturing positive mood—for yourself and others!",
  ],
  [
    "If motivation is a bit down, set a tiny goal and reward yourself for progress.",
    "Try to create restful sleep habits to recharge your mind.",
    "Share thoughts with someone or try journaling to feel supported.",
    "Apply a breathing exercise—works wonders for fluctuating anxiety.",
    "If mood is neutral, do one fun thing for yourself!",
  ],
  [
    "Low motivation? Remember your 'why' for pursuing studies.",
    "Sleep is average; maybe relax with calming music for better rest.",
    "Reach out to a friend or mentor for support.",
    "Try guided meditation to manage anxiety and refresh.",
    "Lift neutral moods: get outside or do something creative.",
  ],
  [
    "Feeling unmotivated? Break tasks into small steps; small wins help.",
    "Trouble sleeping can impact mood—try a screen-free wind-down.",
    "If support feels low, explore peer groups—connection helps.",
    "Write your worries on paper—it can ease your mind.",
    "Negative moods: Seek sunlight or chat with someone trustworthy.",
  ],
  [
    "Motivation gone? Visualize your goals and reimagine strategies.",
    "Poor sleep: Speak to a counsellor or doctor if it's ongoing.",
    "Feeling unsupported? Connect anonymously via peer support.",
    "Constant worry: Try professional help—your feelings are normal.",
    "If mood is very down, don't isolate—reach out for real help.",
  ],
];

const defaultTips = [
  "Take 3 slow, deep breaths.",
  "Stretch arms and legs for one minute.",
  "Drink a glass of water to refresh your mind.",
  "Write down one positive thing about your day.",
  "Look away from your screen for 5 minutes.",
  "Connect with a friend for a short chat.",
  "Take a walk or do a quick dance break.",
  "Listen to calming music or nature sounds.",
  "Practice gratitude—name one thing you're thankful for.",
];

function getTipsFromQuestionnaire(responses) {
  if (responses.filter((r) => r !== "").length < 5) return defaultTips;
  return responses.map((ans, idx) => {
    const answerIdx = ans ? Number(ans) : 2;
    return TIP_LIBRARY[idx][answerIdx] || defaultTips[idx];
  });
}

const Spinner = () => (
  <span
    style={{
      display: "inline-block",
      verticalAlign: "middle",
      width: 32,
      height: 32,
      marginBottom: "-7px",
    }}
  >
    <span
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        border: "3.5px solid #a682e3",
        borderBottom: "3.5px solid #e0e0ec",
        borderRadius: "50%",
        animation: "spin .75s linear infinite",
      }}
    />
    <style>{`@keyframes spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}`}</style>
  </span>
);

function BreathModal({ open, onClose }) {
  const [phase, setPhase] = useState("inhale");
  const [size, setSize] = useState(1);
  const [loop, setLoop] = useState(true);
  const step = useRef(0);
  useEffect(() => {
    if (!open) return;
    setPhase("inhale");
    setSize(1);
    setLoop(true);
    step.current = 0;
    const sequence = [
      ["inhale", 1, 1.45, 4000],
      ["hold", 1.45, 1.45, 1700],
      ["exhale", 1.45, 1, 4000],
      ["hold", 1, 1, 1300],
    ];
    function next() {
      if (!loop) return;
      const [ph, from, to, ms] = sequence[step.current];
      setPhase(ph);
      setSize(from);
      setTimeout(() => {
        setSize(to);
        setTimeout(() => {
          step.current = (step.current + 1) % sequence.length;
          next();
        }, ms);
      }, 20);
    }
    next();
    return () => setLoop(false);
  }, [open, loop]);
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 16,
        width: "100vw",
        height: "100vh",
        background: "rgba(50,38,91,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 6px 22px #a682e344",
          padding: "40px 45px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 18,
            right: 20,
            fontSize: 26,
            color: "#a682e3",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <div>
          <div
            style={{
              width: 116,
              height: 116,
              background: "#e3f0fa",
              borderRadius: "50%",
              margin: "auto",
              marginBottom: 15,
              transform: `scale(${size})`,
              transition: "transform 3.9s cubic-bezier(.5,1.1,.8,.9)",
            }}
          >
            <span style={{ fontSize: "2.9rem", lineHeight: "116px", color: "#67c7fc" }}>
              {phase === "inhale" || phase === "hold" ? "🌸" : "🌀"}
            </span>
          </div>
          <h3 style={{ color: "#218871", marginBottom: 7 }}>Breathing Exercise</h3>
          <div
            style={{
              fontWeight: 700,
              marginBottom: 10,
              fontSize: "1.04rem",
              color: phase === "inhale" ? "#67c7fc" : "#a682e3",
            }}
          >
            {phase === "inhale" ? "Inhale deeply..." : phase === "hold" ? "Hold..." : "Slowly exhale..."}
          </div>
          <div style={{ color: "#54575b", fontSize: "0.98rem", marginTop: 7 }}>
            Breath along with the circle. <br />
            Repeat for 3 cycles for best results!
          </div>
        </div>
      </div>
    </div>
  );
}

function useHistory() {
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("moodHistory") || "[]");
    } catch {
      return [];
    }
  });
  function save(entry) {
    const updated = [entry, ...history].slice(0, 20);
    setHistory(updated);
    localStorage.setItem("moodHistory", JSON.stringify(updated));
  }
  return [history, save];
}

function PeerWall() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [wall, setWall] = useState([
    { name: "Anonymous", msg: "You matter! We’re rooting for you." },
    { name: "A Friend", msg: "Don’t be afraid to ask for help, we all need it sometimes." },
    { name: "YOU!", msg: "Take a breath and believe in yourself!" },
  ]);
  function addMsg(e) {
    e.preventDefault();
    if (msg.trim().length < 2) return;
    setWall([{ name: name.trim() || "Anonymous", msg: msg.trim() }, ...wall].slice(0, 22));
    setName("");
    setMsg("");
  }
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 2px 15px #ece6fb",
        margin: "30px auto 40px auto",
        maxWidth: 680,
        padding: "18px 26px",
      }}
    >
      <h3 style={{ color: "#674ba2", fontWeight: 700, fontSize: "1.1rem" }}>
        Peer Uplift Wall 💬
      </h3>
      <form onSubmit={addMsg} style={{ marginBottom: 15, display: "flex", gap: 10 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          style={{
            flex: 1,
            minWidth: 90,
            padding: "7px 10px",
            borderRadius: 7,
            border: "1.5px solid #c9bdf3",
          }}
        />
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Write a positive message..."
          style={{
            flex: 3,
            minWidth: 180,
            padding: "7px 10px",
            borderRadius: 7,
            border: "1.5px solid #67c7fc",
          }}
        />
        <button
          type="submit"
          className="btn"
          style={{
            background: "#a682e3",
            color: "#fff",
            borderRadius: 7,
            padding: "7px 14px",
            fontWeight: 700,
          }}
        >
          Post
        </button>
      </form>
      <div style={{ maxHeight: 170, overflowY: "auto" }}>
        {wall.map((x, i) => (
          <div
            key={i}
            style={{
              background: "#f7f6ff",
              borderRadius: 7,
              padding: "7px 13px",
              marginBottom: 6,
              color: "#242",
              fontWeight: 600,
              fontSize: "1.01rem",
              borderLeft: "3px solid #67c7fc",
            }}
          >
            <span style={{ color: "#a682e3", fontWeight: 700 }}>{x.name}:</span> <span>{x.msg}</span>
          </div>
        ))}
      </div>
      <div style={{ fontSize: "0.96rem", color: "#90d", marginTop: "9px" }}>
        <i>Why? Peer encouragement boosts hope and belonging.</i>
      </div>
    </div>
  );
}

export default function StressManagementCardsTipsOutside() {
  // Page state and hooks
  const [moodInput, setMoodInput] = useState("");
  const [selectedMoodEmoji, setSelectedMoodEmoji] = useState(moodEmojis[0].icon);
  const [stressLevel, setStressLevel] = useState("");
  const [moodMsg, setMoodMsg] = useState("");
  const [stressMsg, setStressMsg] = useState("");
  const [questionResponses, setQuestionResponses] = useState(Array(5).fill(""));
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [summaryText, setSummaryText] = useState("");

  const [affirmIdx, setAffirmIdx] = useState(0);
  const [jokeIdx, setJokeIdx] = useState(0);
  const [spinLoading, setSpinLoading] = useState(false);
  const [jokeLoading, setJokeLoading] = useState(false);
  const [fadeAffirm, setFadeAffirm] = useState(false);
  const [fadeJoke, setFadeJoke] = useState(false);

  const [breathOpen, setBreathOpen] = useState(false);

  const [history, saveHistory] = useHistory();
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favTips") || "[]");
    } catch {
      return [];
    }
  });

  const [groundOpen, setGroundOpen] = useState(false);
  const [grounded, setGrounded] = useState(["", "", "", "", ""]);
  const [groundReflect, setGroundReflect] = useState("");

  const tips = getTipsFromQuestionnaire(questionResponses);

  // Handlers
  function handleMoodInput(val) {
    setMoodInput(val);
    const key = val.trim().toLowerCase();
    setMoodMsg(moodResponses[key] || "Every mood is valid. If you want tips, select an emoji or enter a mood above.");
  }
  function handleMoodEmoji(label, icon) {
    setSelectedMoodEmoji(icon);
    setMoodInput(label);
    setMoodMsg(moodResponses[label] || "Every mood is valid. If you want tips, select an emoji or enter a mood above.");
  }
  function handleStressInput(val) {
    setStressLevel(val);
    setStressMsg(getStressMessage(val));
  }
  function handleQuestionChange(idx, value) {
    const updated = [...questionResponses];
    updated[idx] = value;
    setQuestionResponses(updated);
    setShowAnalysis(false);
  }
  function analyzeMood() {
    const sum = questionResponses.reduce((s, v) => s + (v ? Number(v) : 2), 0);
    if (sum < 8)
      setSummaryText("🌞 Your mood trends are very positive—keep practicing good habits and support!");
    else if (sum < 12)
      setSummaryText("🙂 You're balanced overall. Pay attention to self-care for even better wellbeing!");
    else if (sum < 18)
      setSummaryText("😐 You may be having a mid or low day. These tips and actions are here for you.");
    else
      setSummaryText("😟 Your answers show tough times—try several tips, connect with others, or use support services.");
    setShowAnalysis(true);
    saveHistory({ time: new Date().toLocaleString(), mood: moodInput, emoji: selectedMoodEmoji, stress: stressLevel });
  }
  function spinAffirmation() {
    setSpinLoading(true);
    setFadeAffirm(false);
    setTimeout(() => {
      setAffirmIdx((affirmIdx + 1) % AFFIRMATIONS.length);
      setSpinLoading(false);
      setFadeAffirm(true);
      setTimeout(() => setFadeAffirm(false), 590);
    }, 750);
  }
  function spinJoke() {
    setJokeLoading(true);
    setFadeJoke(false);
    setTimeout(() => {
      setJokeIdx((jokeIdx + 1) % JOKES.length);
      setJokeLoading(false);
      setFadeJoke(true);
      setTimeout(() => setFadeJoke(false), 590);
    }, 750);
  }
  function toggleFav(tip) {
    let set = favorites.includes(tip) ? favorites.filter((x) => x !== tip) : [tip, ...favorites].slice(0, 8);
    setFavorites(set);
    localStorage.setItem("favTips", JSON.stringify(set));
  }
  function handleGroundSubmit() {
    if (grounded.some((x) => !x.trim())) {
      setGroundReflect("Please fill out all senses before reflecting.");
      return;
    }
    setGroundReflect("You're grounded! Take a slow breath and notice your senses.");
    try {
      const saved = JSON.parse(localStorage.getItem("groundHistory") || "[]");
      localStorage.setItem(
        "groundHistory",
        JSON.stringify([{ time: new Date().toLocaleString(), senses: [...grounded] }, ...saved].slice(0, 20))
      );
    } catch {}
    setTimeout(() => {
      setGroundOpen(false);
      setGroundReflect("");
      setGrounded(["", "", "", "", ""]);
    }, 2400);
  }
  // Render
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg,#ebe1fc,#dbf0ff)",
        padding: "55px 0",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <BreathModal open={breathOpen} onClose={() => setBreathOpen(false)} />
      <div className="container" style={{ maxWidth: 950, marginBottom: "22px" }}>
        <h2 style={{ color: "#303156", fontWeight: 800, fontSize: "2.25rem", marginBottom: 8 }}>
          Stress & Mood Management Zone
        </h2>
        <div style={{ color: "#54575b", fontSize: "1.15rem", marginBottom: "16px" }}>
          Interactive tools, science-backed tips, instant feedback, and real support.
        </div>
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          gap: "34px",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 2px 14px #ece6fb",
            padding: "26px 30px",
            minWidth: "340px",
            maxWidth: "425px",
          }}
        >
          <h4 style={{ color: "#674ba2", fontWeight: 700, fontSize: "1.17rem" }}>Stress Level Self-Check ✨</h4>
          <input
            type="number"
            value={stressLevel}
            placeholder="From 0–10"
            min={0}
            max={10}
            onChange={(e) => handleStressInput(e.target.value)}
            style={{
              width: "70%",
              padding: "10px 13px",
              borderRadius: 13,
              border: "2px solid #a682e3",
              fontWeight: 600,
              fontSize: "1.09rem",
              marginBottom: "12px",
              background: "#f7f6ff",
            }}
          />
          <div style={{ margin: "10px 0 7px 0", color: "#674ba2", fontWeight: 500 }}>{stressMsg}</div>
          <button
            className="btn"
            style={{
              background: "#a682e3",
              color: "#fff",
              borderRadius: 12,
              fontWeight: 600,
              padding: "8px 19px",
              marginTop: 10,
              marginBottom: 6,
              fontSize: "1.08rem",
            }}
            onClick={() => setGroundOpen(true)}
          >
            Try Grounding Now
          </button>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 2px 14px #ece6fb",
            padding: "26px 30px",
            minWidth: "340px",
            maxWidth: "425px",
          }}
        >
          <h4 style={{ color: "#674ba2", fontWeight: 700, fontSize: "1.17rem" }}>Today's Mood 🫧</h4>
          <input
            value={moodInput}
            onChange={(e) => handleMoodInput(e.target.value)}
            placeholder="Type your mood (e.g. happy, anxious...)"
            style={{
              width: "100%",
              padding: "10px 13px",
              borderRadius: 13,
              border: "2px solid #a682e3",
              fontWeight: 600,
              fontSize: "1.09rem",
              marginBottom: "12px",
              background: "#f7f6ff",
            }}
          />
          <div style={{ marginBottom: "11px", fontWeight: 600 }}>Pick an emoji:</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
            {moodEmojis.map((m) => (
              <button
                key={m.label}
                type="button"
                style={{
                  fontSize: "1.6rem",
                  background: selectedMoodEmoji === m.icon ? "#ece6fb" : "#fff",
                  color: "#a682e3",
                  border: selectedMoodEmoji === m.icon ? "2px solid #a682e3" : "2px solid #ede7fa",
                  borderRadius: "12px",
                  width: "42px",
                  height: "42px",
                  cursor: "pointer",
                }}
                aria-label={m.label}
                onClick={() => handleMoodEmoji(m.label, m.icon)}
              >
                {m.icon}
              </button>
            ))}
          </div>
          <div style={{ color: "#54575b", fontWeight: 600 }}>
            Your mood: {selectedMoodEmoji} {moodInput || "..."}
          </div>
          <div style={{ margin: "10px 0 7px 0", color: "#674ba2", fontWeight: 500 }}>{moodMsg}</div>
          <button
            className="btn"
            style={{
              marginTop: 11,
              background: "#67c7fc",
              color: "#fff",
              borderRadius: 12,
              fontWeight: 600,
              padding: "8px 19px",
              boxShadow: "0 2px 7px #67c7fc55",
              fontSize: "1.08rem",
            }}
            onClick={() => setBreathOpen(true)}
          >
            Guided Breathing
          </button>
        </div>
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            boxShadow: "0 2px 14px #ece6fb",
            padding: "21px 19px",
            minWidth: "250px",
            maxWidth: "280px",
            marginTop: "6px",
          }}
        >
          <h4 style={{ color: "#67c7fc", fontSize: "1.01rem", marginBottom: "7px" }}>
            Mood/Stress History
          </h4>
          <div style={{ maxHeight: 152, overflowY: "auto" }}>
            {history.length === 0 && <span style={{ color: "#888" }}>No check-ins yet.</span>}
            {history.slice(0, 7).map((h, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 6,
                  borderLeft: "4px solid #a682e3",
                  paddingLeft: 11,
                  color: "#222",
                  fontWeight: 600,
                  fontSize: "1.01rem",
                }}
              >
                <span style={{ fontSize: "1.13rem" }}>{h.emoji}</span> {h.mood || "-"}{" "}
                <span style={{ color: "#888", fontWeight: 500 }}>
                  {h.stress !== "" ? `| Stress: ${h.stress}` : ""}
                </span>
                <span style={{ display: "block", fontSize: "0.86rem", color: "#abacbc" }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* GROUNDING MODAL */}
      {groundOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 19,
            width: "100vw",
            height: "100vh",
            background: "rgba(50,38,91,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 6px 22px #a682e344",
              padding: "33px 36px",
              minWidth: 330,
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              onClick={() => {
                setGroundOpen(false);
                setGroundReflect("");
                setGrounded(["", "", "", "", ""]);
              }}
              style={{
                position: "absolute",
                top: 13,
                right: 22,
                fontSize: 23,
                color: "#a682e3",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <h3 style={{ color: "#67c7fc", marginBottom: 10 }}>Ground Yourself</h3>
            <div style={{ color: "#674ba2", fontWeight: 600, marginBottom: 14, fontSize: "1.07rem" }}>
              List things in your current environment:
            </div>
            {["See", "Touch", "Hear", "Smell", "Taste"].map((sense, i) => (
              <div key={i} style={{ margin: "6px 0" }}>
                <label style={{ fontWeight: 500 }}>{sense} :</label>{" "}
                <input
                  value={grounded[i] || ""}
                  onChange={(e) => {
                    const n = [...grounded];
                    n[i] = e.target.value;
                    setGrounded(n);
                  }}
                  placeholder={`Name something you can ${sense.toLowerCase()}...`}
                  style={{
                    borderRadius: 8,
                    border: "1.5px solid #67c7fc",
                    padding: "6px 12px",
                    fontSize: "1.09rem",
                    width: 325,
                    marginLeft: 5,
                  }}
                />
              </div>
            ))}
            <button
              style={{
                marginTop: 15,
                background: "#67c7fc",
                color: "#fff",
                borderRadius: 9,
                fontWeight: 600,
                fontSize: "1rem",
                padding: "8px 21px",
                boxShadow: "0 2px 7px #67c7fc55",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                if (grounded.some((x) => !x.trim())) {
                  setGroundReflect("Please fill out all senses before reflecting.");
                  return;
                }
                setGroundReflect("You're grounded! Take a slow breath and notice your senses.");
                try {
                  const saved = JSON.parse(localStorage.getItem("groundHistory") || "[]");
                  localStorage.setItem(
                    "groundHistory",
                    JSON.stringify([{ time: new Date().toLocaleString(), senses: [...grounded] }, ...saved].slice(0, 20))
                  );
                } catch {}
                setTimeout(() => {
                  setGroundOpen(false);
                  setGroundReflect("");
                  setGrounded(["", "", "", "", ""]);
                }, 2400);
              }}
            >
              Save & Reflect
            </button>
            {groundReflect && (
              <div
                style={{
                  marginTop: 13,
                  color: "#218871",
                  fontWeight: 500,
                  transition: "opacity 0.3s",
                  fontSize: "1.09rem",
                }}
              >
                {groundReflect}
              </div>
            )}
            <div style={{ marginTop: 13, color: "#218871", fontWeight: 500 }}>
              Notice how your body feels letting the senses guide you.
            </div>
          </div>
        </div>
      )}
      {/* Questionnaire */}
      <div
        className="container"
        style={{
          background: "#fff",
          borderRadius: 19,
          boxShadow: "0 2px 14px #ece6fb",
          margin: "38px auto 0 auto",
          maxWidth: "820px",
          padding: "32px 34px",
        }}
      >
        <h3 style={{ color: "#218871", fontWeight: 700, fontSize: "1.17rem", marginBottom: 10 }}>
          Quick Mood Questionnaire 📝
        </h3>
        <div style={{ color: "#888", marginBottom: "18px" }}>
          Answer these to check your well-being, and get instant feedback.
        </div>
        {moodQuestions.map((q, idx) => (
          <div key={idx} style={{ marginBottom: "18px" }}>
            <div style={{ fontWeight: 600, color: "#674ba2", marginBottom: "6px" }}>
              {idx + 1}. {q.question}
            </div>
            <div>
              {q.options.map((opt, oidx) => (
                <button
                  key={oidx}
                  className="btn"
                  style={{
                    marginRight: "10px",
                    marginBottom: "7px",
                    background: questionResponses[idx] === oidx.toString() ? "#a682e3" : "#ece6fb",
                    color: questionResponses[idx] === oidx.toString() ? "#fff" : "#674ba2",
                    borderRadius: "9px",
                    fontWeight: 600,
                    fontSize: "0.97rem",
                    padding: "6px 17px",
                    border: "none",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={() => handleQuestionChange(idx, oidx.toString())}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button
          className="btn"
          style={{
            background: "linear-gradient(90deg,#aa85ff 0%,#67c7fc 100%)",
            color: "#fff",
            borderRadius: "9px",
            fontWeight: 700,
            fontSize: "1.07rem",
            padding: "10px 29px",
            marginTop: "16px",
            cursor: "pointer",
          }}
          onClick={analyzeMood}
        >
          Check My Mood!
        </button>
        {showAnalysis && (
          <div
            style={{
              marginTop: "24px",
              fontWeight: 600,
              fontSize: "1.09rem",
              color: "#218871",
              background: "#eff9de",
              borderRadius: "10px",
              padding: "15px 24px",
              boxShadow: "0 2px 9px #deffe9",
              userSelect: "text",
            }}
          >
            {summaryText}
          </div>
        )}
      </div>
      {/* Favorites bar */}
      {favorites.length > 0 && (
        <div className="container" style={{ maxWidth: 900, marginTop: 22 }}>
          <h4 style={{ color: "#67c7fc", marginBottom: "8px", fontWeight: 700 }}>Your Favorite Tips ❤️</h4>
          <div className="row gx-3 gy-2">
            {favorites.map((tip, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div
                  style={{
                    background: "#e7f9ef",
                    borderRadius: 15,
                    padding: "13px 14px",
                    marginBottom: "8px",
                    boxShadow: "0 1px 6px #67c7fc18",
                    color: "#247857",
                    fontWeight: 600,
                    borderLeft: "4px solid #37b667",
                    position: "relative",
                    userSelect: "text",
                  }}
                >
                  {tip}
                  <button
                    style={{
                      position: "absolute",
                      right: 12,
                      top: 10,
                      background: "none",
                      border: "none",
                      fontSize: "1.31rem",
                      color: "#a682e3",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleFav(tip)}
                    title="Remove from favorites"
                  >
                    💔
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Tips as cards always visible, dynamic */}
      <div className="container" style={{ maxWidth: 900, marginTop: 36, marginBottom: 40 }}>
        <h4
          style={{
            color: "#674ba2",
            margin: "10px 0 7px 0",
            fontWeight: 700,
            fontSize: "1.08rem",
          }}
        >
          To get out of this stage, you can follow the tips below:
        </h4>
        <div className="row gx-4 gy-3">
          {tips.map((tip, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div
                style={{
                  background: "#f7f6ff",
                  borderRadius: "15px",
                  boxShadow: "0 2px 8px rgba(143,104,242,0.10)",
                  padding: "15px 16px",
                  marginBottom: "9px",
                  color: "#54575b",
                  fontSize: "1.04rem",
                  fontWeight: 500,
                  borderLeft: idx % 2 ? "5px solid #a682e3" : "5px solid #67c7fc",
                  position: "relative",
                  userSelect: "text",
                }}
              >
                <span style={{ marginRight: 7 }}>✨</span>
                {tip}
                <button
                  style={{
                    position: "absolute",
                    right: 12,
                    top: 10,
                    background: "none",
                    border: "none",
                    fontSize: "1.25rem",
                    color: favorites.includes(tip) ? "#e63c62" : "#c7cbe3",
                    cursor: "pointer",
                  }}
                  onClick={() => toggleFav(tip)}
                  title={favorites.includes(tip) ? "Remove from favorites" : "Save as favorite"}
                >
                  {favorites.includes(tip) ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "0.94rem", color: "#90d", marginTop: "14px" }}>
          <i>Why? These tips change based on your answers and can be bookmarked above!</i>
        </div>
      </div>
      <PeerWall />
      {/* Motivation Spin & Laugh Break */}
      <div
        className="container"
        style={{
          margin: "38px auto 24px auto",
          maxWidth: "870px",
          display: "flex",
          gap: "34px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: `linear-gradient(105deg,#f7f6ff 60%,#ece6fb 100%)`,
            borderRadius: 15,
            padding: "18px 27px",
            color: "#a682e3",
            fontWeight: 700,
            fontSize: "1.16rem",
            boxShadow: "0 4px 18px 0 rgba(133,104,242,0.11)",
            marginBottom: "19px",
            border: "2px dashed #aa85ff",
            minWidth: 245,
            position: "relative",
            userSelect: "none",
          }}
        >
          <span style={{ position: "absolute", right: 16, top: 11, fontSize: "2rem", opacity: 0.23 }}>✨</span>
          <div style={{ fontWeight: 700, marginBottom: "3px" }}>
            Motivation Spin
            <button
              className="btn"
              style={{
                background: "#aa85ff",
                color: "#fff",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: "1.07rem",
                padding: "7px 15px 7px 16px",
                marginLeft: 13,
                verticalAlign: "middle",
                overflow: "hidden",
                position: "relative",
                userSelect: "none",
              }}
              onClick={spinAffirmation}
            >
              Spin
            </button>
          </div>
          <div
            style={{
              margin: "19px 0 6px 0",
              minHeight: 45,
              fontSize: "1.09rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.4s",
              opacity: fadeAffirm ? 0.35 : 1,
            }}
          >
            {spinLoading ? (
              <Spinner />
            ) : (
              <span
                style={{
                  opacity: fadeAffirm ? 0.55 : 1,
                  transition: "opacity 0.39s",
                  userSelect: "text",
                }}
              >
                {AFFIRMATIONS[affirmIdx]}
              </span>
            )}
          </div>
          <div style={{ fontSize: "0.92rem", color: "#84a", marginTop: "3px", opacity: 0.75 }}>
            <i>Why? Self-talk spins build hope and persistence.</i>
          </div>
        </div>
        <div
          style={{
            background: `linear-gradient(107deg,#eff9de 50%,#e8fff4 100%)`,
            borderRadius: 15,
            padding: "18px 27px",
            color: "#218871",
            fontWeight: 700,
            fontSize: "1.16rem",
            boxShadow: "0 4px 18px 0 rgba(133,104,242,0.10)",
            marginBottom: "19px",
            border: "2px dashed #67c7fc",
            minWidth: 245,
            position: "relative",
            userSelect: "none",
          }}
        >
          <span style={{ position: "absolute", right: 16, top: 11, fontSize: "2rem", opacity: 0.22 }}>😂</span>
          <div style={{ fontWeight: 700, marginBottom: "3px" }}>
            Laugh Break
            <button
              className="btn"
              style={{
                background: "#67c7fc",
                color: "#fff",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: "1.07rem",
                padding: "7px 15px 7px 16px",
                marginLeft: 15,
                verticalAlign: "middle",
                overflow: "hidden",
                position: "relative",
                userSelect: "none",
              }}
              onClick={spinJoke}
            >
              Shuffle
            </button>
          </div>
          <div
            style={{
              margin: "19px 0 6px 0",
              minHeight: 45,
              fontSize: "1.09rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "opacity 0.4s",
              opacity: fadeJoke ? 0.37 : 1,
            }}
          >
            {jokeLoading ? (
              <Spinner />
            ) : (
              <span
                style={{
                  opacity: fadeJoke ? 0.51 : 1,
                  transition: "opacity 0.39s",
                  userSelect: "text",
                }}
              >
                {JOKES[jokeIdx]}
              </span>
            )}
          </div>
          <div style={{ fontSize: "0.92rem", color: "#7c9", marginTop: "3px", opacity: 0.78 }}>
            <i>Why? Laughter breaks the stress pattern instantly!</i>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.open("tel:18001234567")}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 90,
          background: "#e74343",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 64,
          height: 64,
          fontSize: "2.35rem",
          boxShadow: "0 3px 13px #e7434340",
          cursor: "pointer",
        }}
        title="Need Urgent Help?"
      >
        ☎️
      </button>
    </div>
  );
}
