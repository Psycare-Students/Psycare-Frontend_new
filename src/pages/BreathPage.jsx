import React, { useState, useEffect, useRef } from 'react';

const techniques = [
  {
    id: 'belly',
    title: 'Diaphragmatic (Belly) Breathing',
    tagline: 'Calm your mind and slow your heartbeat.',
    color: '#4CAF50',
    benefits: [
      "Lowers stress hormones",
      "Improves oxygen flow",
      "Relaxes tight chest or shoulders"
    ],
    steps: [
      "Sit or lie down, one hand on chest, one on belly.",
      "Inhale through the nose for 4 seconds, feeling the belly rise.",
      "Exhale gently through the mouth for 6 seconds, belly falls.",
      "Continue 1–2 minutes."
    ],
    duration: "2–3 sessions daily, 1–2 minutes each.",
    tip: "Keep shoulders relaxed and jaw unclenched.",
    audioSrc: '/audio/belly-breathing.mp3',
    sequence: [
      ['inhale', 1, 1.45, 4000],
      ['exhale', 1.45, 1, 6000]
    ]
  },
  {
    id: 'box',
    title: 'Box Breathing (4-4-4-4)',
    tagline: 'Reset focus and ease anxiety in one minute.',
    color: '#2196F3',
    benefits: [
      "Reduces anxiety spikes",
      "Improves concentration"
    ],
    steps: [
      "Inhale through the nose for 4 counts.",
      "Hold breath for 4 counts.",
      "Exhale through the mouth for 4 counts.",
      "Hold again for 4 counts.",
      "Repeat 4–6 cycles."
    ],
    duration: "1–2 minutes whenever you feel tense.",
    tip: "Imagine tracing the sides of a square as you breathe.",
    audioSrc: '/audio/box-breathing.mp3',
    sequence: [
      ['inhale', 1, 1.45, 4000],
      ['hold', 1.45, 1.45, 4000],
      ['exhale', 1.45, 1, 4000],
      ['hold', 1, 1, 4000]
    ]
  },
  {
    id: '478',
    title: '4-7-8 Breathing',
    tagline: 'A natural wind-down before sleep.',
    color: '#FF9800',
    benefits: [
      "Slows heart rate",
      "Helps release racing thoughts"
    ],
    steps: [
      "Inhale quietly through the nose for 4 counts.",
      "Hold the breath for 7 counts.",
      "Exhale completely through the mouth for 8 counts.",
      "Repeat up to four rounds."
    ],
    duration: "Best at night or during a midday break.",
    tip: "Keep tongue tip behind upper front teeth to ease the exhale.",
    audioSrc: '/audio/478-breathing.mp3',
    sequence: [
      ['inhale', 1, 1.45, 4000],
      ['hold', 1.45, 1.45, 7000],
      ['exhale', 1.45, 1, 8000]
    ]
  },
  {
    id: 'nadi',
    title: 'Alternate-Nostril (Nadi Shodhana)',
    tagline: 'Balance and refresh your energy.',
    color: '#9C27B0',
    benefits: [
      "Promotes mental clarity",
      "Balances left/right brain activity"
    ],
    steps: [
      "Sit comfortably. Close the right nostril with your thumb.",
      "Inhale through the left nostril.",
      "Close the left nostril, open the right, exhale through the right.",
      "Inhale through the right, close it, exhale through the left.",
      "That’s one cycle—continue 5 minutes."
    ],
    duration: "5–10 cycles, once or twice daily.",
    tip: "Breathe gently; don’t force air.",
    audioSrc: '/audio/nadi-shodhana.mp3',
    sequence: [
      ['inhale', 1, 1.45, 5000],
      ['exhale', 1.45, 1, 5000]
    ]
  }
];

const PHASE_LABELS = { inhale: 'Inhale deeply...', hold: 'Hold...', exhale: 'Slowly exhale...' };
const PHASE_ICONS = { inhale: '🌸', hold: '🌸', exhale: '🌀' };
const PHASE_COLORS = { inhale: '#67c7fc', hold: '#a682e3', exhale: '#67c7fc' };

function BreathModal({ open, onClose, sequence }) {
  const [phase, setPhase] = useState('inhale');
  const [size, setSize] = useState(1);
  const [loop, setLoop] = useState(true);
  const step = useRef(0);

  useEffect(() => {
    if (!open) return;
    setPhase('inhale');
    setSize(1);
    setLoop(true);
    step.current = 0;

    const next = () => {
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
    };
    next();
    return () => setLoop(false);
  }, [open, loop, sequence]);

  if (!open || !sequence.length) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 16,
        width: '100vw',
        height: '100vh',
        background: 'rgba(50,38,91,0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 6px 22px #a682e344',
          padding: '40px 45px',
          textAlign: 'center',
          position: 'relative',
          maxWidth: 320,
          width: '90%'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 18,
            right: 20,
            fontSize: 26,
            color: '#a682e3',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div>
          <div
            style={{
              width: 116,
              height: 116,
              background: '#e3f0fa',
              borderRadius: '50%',
              margin: 'auto',
              marginBottom: 15,
              transform: `scale(${size})`,
              transition: 'transform 3.9s cubic-bezier(.5,1.1,.8,.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.9rem',
              color: PHASE_COLORS[phase],
            }}
          >
            {PHASE_ICONS[phase]}
          </div>
          <h3 style={{ color: '#218871', marginBottom: 7 }}>Breathing Exercise</h3>
          <div
            style={{
              fontWeight: 700,
              marginBottom: 10,
              fontSize: '1.04rem',
              color: PHASE_COLORS[phase]
            }}
          >
            {PHASE_LABELS[phase]}
          </div>
          <div style={{ color: '#54575b', fontSize: '0.98rem', marginTop: 7 }}>
            Breathe along with the circle.
            <br />
            Repeat for 3 cycles for best results!
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ModernBreathingCards() {
  const [breathOpen, setBreathOpen] = useState(false);
  const [currentSequence, setCurrentSequence] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState(null);
  const audioRef = useRef(null);

  const openModalFor = (sequence) => {
    if (audioRef.current) {
      audioRef.current.pause();
      setAudioPlaying(null);
    }
    setCurrentSequence(sequence);
    setBreathOpen(true);
  };

  const toggleAudio = (id, src) => {
    if (audioPlaying === id) {
      audioRef.current.pause();
      setAudioPlaying(null);
    } else {
      audioRef.current.src = src;
      audioRef.current.play();
      setAudioPlaying(id);
    }
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg,#ede7f6 0%,#d1c4e9 60%,#b39ddb 100%)',
        minHeight: '100vh',
        paddingBottom: 60,
        paddingTop: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        alignItems: 'center'
      }}
    >
      {/* Header */}
      <div className="container text-center" style={{ maxWidth: 950, marginBottom: 32, padding: '20px 10px' }}>
        <h1
          style={{
            fontSize: '2.75rem',
            fontWeight: 700,
            background: 'linear-gradient(90deg,#8e9efc 0%, #a88beb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            marginBottom: 12,
          }}
        >
          Find Your Calm, One Breath at a Time
        </h1>

        <div
          style={{
            color: '#4a4d52',
            fontSize: '1.2rem',
            lineHeight: 1.6,
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          Guided breathing exercises, soothing audio cues, and simple
          step-by-step practices help you release tension, steady your
          thoughts, and restore balance—anytime, anywhere.
        </div>
      </div>

      {/* Cards */}
      {techniques.map(
        ({ id, title, tagline, color, benefits, steps, duration, tip, audioSrc, sequence }) => (
          <div
            key={id}
            style={{
              background: 'white',
              borderRadius: 30,
              maxWidth: 960,           // ✅ Wider card
              width: '95%',
              padding: 40,
              boxShadow: '0 12px 40px rgba(100,86,236,0.18)',
              textAlign: 'left',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 22px 48px rgba(100,86,236,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(100,86,236,0.18)';
            }}
          >
            <header style={{ marginBottom: 22 }}>
              <h2 style={{ margin: 0, fontSize: 28, fontWeight: 700, color: '#2e916e' }}>
                {title}
              </h2>
              <p style={{ marginTop: 6, fontWeight: 600, color: color, fontSize: 17 }}>
                {tagline}
              </p>
            </header>

            <section style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#435b42' }}>Benefits:</h3>
              <ul style={{ paddingLeft: 20, color: '#4c766e', fontSize: 15, marginTop: 0 }}>
                {benefits.map((b, i) => (
                  <li key={i} style={{ marginBottom: 5 }}>{b}</li>
                ))}
              </ul>
            </section>

            <section style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: '#435b42' }}>Steps:</h3>
              <ol style={{ paddingLeft: 20, color: '#4c766e', fontSize: 15, marginTop: 0 }}>
                {steps.map((s, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>{s}</li>
                ))}
              </ol>
            </section>

            {/* ✅ Footer now stacks nicely on small screens */}
            <footer
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                alignItems: 'flex-start',
                borderTop: '1px solid #eee',
                paddingTop: 16
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 500, color: '#2e916e', width: '100%' }}>
                <b>Duration / Frequency:</b> {duration}
                <br />
                <small style={{ color: '#6a9a7a' }}>
                  <i>Tip: {tip}</i>
                </small>
              </div>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button
                  style={{
                    background: color,
                    color: 'white',
                    borderRadius: 22,
                    fontWeight: 'bold',
                    fontSize: 17,
                    padding: '10px 28px',
                    border: 'none',
                    boxShadow: `0 4px 14px ${color}99`,
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  onClick={() => toggleAudio(id, audioSrc)}
                >
                  {audioPlaying === id ? 'Pause Audio ▌▌' : 'Play Audio ▶'}
                </button>

                <button
                  style={{
                    background: '#8e9efc',
                    color: '#fff',
                    borderRadius: 22,
                    fontWeight: 'bold',
                    fontSize: 17,
                    padding: '10px 28px',
                    border: 'none',
                    boxShadow: '0 4px 14px #8e9efc99',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  onClick={() => openModalFor(sequence)}
                >
                  Start Breathing
                </button>
              </div>
            </footer>

            <p
              style={{
                marginTop: 16,
                fontSize: 12,
                color: '#8a8aa0',
                fontStyle: 'italic',
                textAlign: 'center'
              }}
            >
              These exercises are for general wellness and not a substitute for professional mental-health care.
              If you feel distressed, please seek professional help or call a helpline.
            </p>
          </div>
        )
      )}

      <audio ref={audioRef} style={{ display: 'none' }} />
      <BreathModal open={breathOpen} onClose={() => setBreathOpen(false)} sequence={currentSequence} />
    </div>
  );
}