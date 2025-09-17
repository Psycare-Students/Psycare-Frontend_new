import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SleepAudioLibrary.css";

// You can use your own local background image, just set its path in the CSS file.
const categories = ["All Categories", "Meditation", "Nature", "Music", "Stories", "Wellness"];
const moods = [
  {icon: "😊", label: "Happy"}, 
  {icon: "💙", label: "Calm"}, 
  {icon: "😐", label: "Neutral"}, 
  {icon: "😴", label: "Tired"}
];
const energies = [
  {icon: "⚡", label: "High Energy"},
  {icon: "☀️", label: "Medium"},
  {icon: "🌙", label: "Low Energy"}
];

// Fake sleep audios data
const audios = [
  {
    id: 1,
    title: "Guided Sleep Meditations",
    category: "Meditation",
    icon: <i className="bi bi-headphones"></i>,
    duration: "15-45 min",
    badge: "Meditation",
    desc: "Gentle meditations with calming voices to quiet racing thoughts and guide you into peaceful sleep. Perfect for stress relief.",
    hd: true
  },
  {
    id: 2,
    title: "Nature Soundscapes",
    category: "Nature",
    icon: <i className="bi bi-tree"></i>,
    duration: "30-60 min",
    badge: "Nature",
    desc: "Immersive natural environments including ocean waves, forest sounds, gentle rain, and mountain streams.",
    hd: true
  },
  {
    id: 3,
    title: "Soft Instrumentals",
    category: "Music",
    icon: <i className="bi bi-music-note"></i>,
    duration: "20-40 min",
    badge: "Music",
    desc: "Peaceful piano melodies, gentle guitar, and ambient synths designed to slow your heart rate and ease tension.",
    hd: true
  },
  {
    id: 4,
    title: "Bedtime Stories",
    category: "Stories",
    icon: <i className="bi bi-book"></i>,
    duration: "25-35 min",
    badge: "Stories",
    desc: "Soothing tales and classic stories narrated in gentle voices to help you drift into dreamland peacefully.",
    hd: true
  },
  {
    id: 5,
    title: "Breathing & Body Scan",
    category: "Wellness",
    icon: <i className="bi bi-wind"></i>,
    duration: "10-30 min",
    badge: "Wellness",
    desc: "Guided breathing exercises and progressive body relaxation techniques to release physical and mental tension.",
    hd: true
  },
  {
    id: 6,
    title: "Peaceful Animal Sounds",
    category: "Nature",
    icon: <i className="bi bi-emoji-smile"></i>,
    duration: "45-60 min",
    badge: "Nature",
    desc: "Comforting sounds of purring cats, gentle bird songs, and other soothing animal sounds for companionship.",
    hd: true
  },
  {
    id: 7,
    title: "Ocean Waves & Beach",
    category: "Nature",
    icon: <i className="bi bi-water"></i>,
    duration: "60+ min",
    badge: "Nature",
    desc: "Rhythmic ocean sounds and gentle beach ambiance to create a peaceful coastal escape in your bedroom.",
    hd: true
  },
  {
    id: 8,
    title: "Mountain Retreat",
    category: "Nature",
    icon: <i className="bi bi-stars"></i>,
    duration: "45-90 min",
    badge: "Nature",
    desc: "High-altitude serenity with gentle wind through pines and distant mountain sounds for deep tranquility.",
    hd: true
  },
];

export default function SleepAudioLibrary() {
  // Functional state
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All Categories");
  const [fav, setFav] = useState([]);
  const [timer, setTimer] = useState(65);
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerCount, setTimerCount] = useState(0);
  const [sessions, setSessions] = useState(47);
  const [streak, setStreak] = useState(12);
  const [weeklyGoal] = useState(5);
  const [weeklySessions, setWeeklySessions] = useState(3);
  const [totalHours, setTotalHours] = useState(23.5);
  const [weekPerc] = useState(60);
  const [mood, setMood] = useState("");
  const [energy, setEnergy] = useState("");
  const [audioFilter, setAudioFilter] = useState("");
  // Timer logic
  React.useEffect(() => {
    let interval;
    if (timerStarted && timerCount > 0) {
      interval = setInterval(() => setTimerCount(t => t - 1), 1000);
    }
    if (timerStarted && timerCount === 0) setTimerStarted(false);
    return () => clearInterval(interval);
  }, [timerStarted, timerCount]);

  // Filter logic
  function filteredAudios() {
    return audios.filter(a =>
      (cat === "All Categories" || a.category === cat) &&
      (!search || a.title.toLowerCase().includes(search.toLowerCase()))
    );
  }

  // Mood log
  function handleMoodSave() {
    alert(`Mood '${mood}' and energy level '${energy}' saved!`);
  }

  return (
    <div className="sleep-page-bg"> {/* Background image style in CSS */}
      <div className="container-xl py-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="title-gradient fw-bold mb-2" style={{fontSize:"2.8rem"}}>
            <i className="bi bi-stars" style={{fontSize:36, verticalAlign:"middle"}}/> Sleep Audio Library <i className="bi bi-stars" style={{fontSize:36, verticalAlign:"middle"}}/>
          </h1>
          <div className="fs-5" style={{color:"#857bbf"}}>
            Discover peaceful audio experiences designed to help you unwind, relax, and drift into the sweetest dreams
          </div>
        </div>
        {/* Search & Filter */}
        <div className="d-flex flex-wrap align-items-center mb-4 rounded-4 shadow px-4 py-3 sleep-searchbar" style={{background:"#ffffffee"}}>
          <i className="bi bi-search fs-5 opacity-75 me-2" />
          <input
            className="form-control form-control-lg flex-grow-1 border-0 bg-transparent"
            placeholder="Search for sleep audios..."
            value={search}
            style={{boxShadow:"none"}}
            onChange={e=>setSearch(e.target.value)}
          />
          <div className="d-flex ms-3 flex-wrap gap-2">
            {categories.map(c=>(
              <button key={c}
                className={`btn btn-pill ${cat===c ? "btn-violet" : "btn-light"}`}
                style={{
                  color: cat===c ? "#fff" : "#8f78e5",
                  fontWeight: 600
                }} onClick={()=>setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>
        {/* Dashboard Cards */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <div className="glass-card p-4 h-100">
              <h5 className="mb-3" style={{color:"#9956f7", fontWeight:700}}><i className="bi bi-moon-stars me-2"/>Sleep Timer</h5>
              <div className="mb-1" style={{color:"#7b67a3"}}>Auto-stop after: <b>{timer} minutes</b></div>
              <input type="range" min={5} max={120} step={5}
                value={timer}
                onChange={e=>setTimer(Number(e.target.value))}
                className="form-range mb-3"
                style={{accentColor:"#b46ffa"}}
              />
              <div className="mb-2 d-flex justify-content-between">
                <small className="text-muted">5 min</small>
                <small className="text-muted">120 min</small>
              </div>
              <button className="btn btn-lg btn-violet rounded-4 w-100"
                disabled={timerStarted}
                onClick={()=>{
                  setTimerStarted(true);
                  setTimerCount(timer*60);
                }}>
                <i className="bi bi-clock-history me-2" />
                {timerStarted ? (
                  <span>
                    Timer: {Math.floor(timerCount/60)}:{(timerCount%60).toString().padStart(2,'0')}
                  </span>
                ) : "Start Sleep Timer"}
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="glass-card p-4 h-100">
              <h5 className="mb-3" style={{color:"#9956f7", fontWeight:700}}><i className="bi bi-award me-2"/>Sleep Progress</h5>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <div className="shadow-sm rounded-4 text-center px-4 py-2" style={{fontSize:30,background:"#ece5fa",color:"#8e62dd",fontWeight:800,marginRight:12}}>
                    {sessions}
                  </div>
                  <small className="text-muted">Total Sessions</small>
                </div>
                <div>
                  <div className="shadow-sm rounded-4 text-center px-4 py-2" style={{fontSize:30,background:"#e5fae8",color:"#54cd76",fontWeight:800,marginRight:12}}>
                    {streak}
                  </div>
                  <small className="text-muted">Day Streak</small>
                </div>
              </div>
              <div className="mb-2">
                <div className="d-flex align-items-center justify-content-between mb-1">
                  <small>Weekly Goal</small>
                  <small>{weeklySessions}/{weeklyGoal} sessions</small>
                </div>
                <div className="progress rounded-pill mb-2" style={{height:10}}>
                  <div className="progress-bar" role="progressbar" style={{width:`${weeklySessions/weeklyGoal*100}%`,background:"#a784f8"}}/>
                </div>
                <div className="d-flex justify-content-between">
                  <small><i className="bi bi-graph-up-arrow me-1"/> {totalHours}h Total Hours</small>
                  <small><i className="bi bi-calendar-week me-1"/> This Week <span style={{color:"#9d7df9",fontWeight:600}}>{weekPerc}% complete</span></small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mood */}
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <div className="glass-card p-4 h-100">
              <h5 className="mb-3" style={{color:"#9956f7", fontWeight:700}}><i className="bi bi-heart-pulse me-2"/>How are you feeling?</h5>
              <div className="mb-2">
                {/* Mood Buttons */}
                <div className="row mb-2 gx-2">
                  {moods.map((m,i) => (
                    <div className="col-6 mb-2" key={i}>
                      <button className={`w-100 mood-btn px-0 py-2 ${mood===m.label && "mood-btn-active"}`}
                        onClick={()=>setMood(m.label)}>
                        <span style={{fontSize:26}}>{m.icon}</span>
                        <div>{m.label}</div>
                      </button>
                    </div>
                  ))}
                </div>
                {/* Energy Buttons */}
                <div className="row gx-2">
                  {energies.map((e,i)=>(
                    <div className="col-4 mb-2" key={i}>
                      <button className={`w-100 mood-btn px-0 py-2 ${energy===e.label && "mood-btn-active"}`}
                        onClick={()=>setEnergy(e.label)}>
                        <span style={{fontSize:24}}>{e.icon}</span>
                        <div>{e.label}</div>
                      </button>
                    </div>
                  ))}
                </div>
                <button className="btn btn-violet w-100 mt-2 rounded-4"
                  disabled={!(mood && energy)}
                  onClick={handleMoodSave}>Save Mood</button>
              </div>
            </div>
          </div>
        </div>
        {/* Sleep Audio Cards */}
        <div className="mt-2 mb-5">
          <h4 className="mb-3 title-gradient fw-bold" style={{marginLeft:8}}>
            <i className="bi bi-stars me-2"/> Sleep Audio Collection
          </h4>
          <div className="row g-4">
            {filteredAudios().map(a=>(
              <div key={a.id} className="col-12 col-md-6 col-lg-6">
                <div className="audio-card shadow h-100 px-4 py-4" style={{
                  borderRadius: 24, 
                  background: "var(--audio-bg-"+a.category.toLowerCase()+")"
                }}>
                  <div className="d-flex align-items-center mb-1">
                    <div className="me-2 fs-2">{a.icon}</div>
                    <div style={{fontWeight:700,fontSize:19}}>
                      {a.title}
                      <span className="badge ms-2" style={{background:"#ede6ff",color:"#9154d8",fontWeight:600}}>{a.badge}</span> 
                    </div>
                    <span 
                      className="ms-auto fs-3" onClick={()=>setFav(f=>f.includes(a.id)?f.filter(x=>x!==a.id):[...f,a.id])} style={{cursor:"pointer"}} 
                      title={fav.includes(a.id)?"Unfavorite":"Save to favorites"}>
                      <i className={fav.includes(a.id)?"bi bi-heart-fill text-danger":"bi bi-heart"}></i>
                    </span>
                  </div>
                  <div style={{fontWeight:500,color:"#333",marginBottom:6}}>{a.desc}</div>
                  <div className="d-flex align-items-center justify-content-between text-secondary mb-3" style={{fontSize:14}}>
                    <div>
                      <i className="bi bi-clock me-1"/>{a.duration}
                    </div>
                    {a.hd && <div><i className="bi bi-headphones me-1"/>HD Audio</div>}
                  </div>
                  <button className="btn btn-violet w-100 py-2 rounded-pill btn-lg"
                    style={{fontSize:18}}
                    onClick={()=>{
                      setSessions(s=>s+1);
                      setWeeklySessions(ws=>Math.min(ws+1,weeklyGoal));
                      setTotalHours(h=>h+1);
                      alert("Audio playing... (simulate audio)");
                    }}>
                    <i className="bi bi-play-circle me-2"/> Play Audio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div className="text-center p-4 rounded-4 mb-3 mt-4" style={{
          background:"linear-gradient(90deg,#a5b8fc, #7acefe)",color:"#fff",fontWeight:600,letterSpacing:0.2
        }}>
          <i className="bi bi-stars me-2"/><span style={{fontSize:21}}>Sweet Dreams Await</span> <i className="bi bi-stars ms-2"/>
          <div className="fs-6 mt-2" style={{fontWeight:400}}>
            Choose your perfect sleep companion and drift into peaceful slumber. Track your progress and build healthy sleep habits one night at a time.
          </div>
        </div>
      </div>
    </div>
  );
}
