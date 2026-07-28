/* Simple SVG comic characters with subtle animations */
import { motion } from "framer-motion";

type Mood = "neutral" | "sad" | "worried" | "happy" | "confident" | "celebrating";

const moodColors: Record<Mood, { skin: string; shirt: string; accent: string }> = {
  neutral:     { skin: "#F4C9A0", shirt: "#1686F5", accent: "#0B1C9C" },
  sad:         { skin: "#E8BFA0", shirt: "#475569", accent: "#334155" },
  worried:     { skin: "#E8BFA0", shirt: "#64748B", accent: "#0B1C9C" },
  happy:       { skin: "#F4C9A0", shirt: "#09B83E", accent: "#0B1C9C" },
  confident:   { skin: "#F4C9A0", shirt: "#0B1C9C", accent: "#1686F5" },
  celebrating: { skin: "#F4C9A0", shirt: "#1686F5", accent: "#09B83E" },
};

export function ComicCharacter({
  mood = "neutral",
  name,
  showConfetti = false,
}: { mood?: Mood; name?: string; showConfetti?: boolean }) {
  const c = moodColors[mood];
  return (
    <svg viewBox="0 0 200 220" className="h-full w-full max-h-[280px]" role="img" aria-label={name ?? "Character"}>
      {/* halftone bg */}
      <defs>
        <pattern id="dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#0B1C9C" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="200" height="220" fill="url(#dots)" />

      {/* body */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* shirt */}
        <path d="M55 200 Q55 140 100 130 Q145 140 145 200 Z" fill={c.shirt} stroke="#071126" strokeWidth="3" />
        {/* collar */}
        <path d="M85 132 L100 150 L115 132" fill="none" stroke="#071126" strokeWidth="3" />
        {/* head */}
        <circle cx="100" cy="85" r="38" fill={c.skin} stroke="#071126" strokeWidth="3" />
        {/* hair */}
        <path d="M62 78 Q70 40 100 42 Q130 40 138 78 Q130 60 100 60 Q70 60 62 78 Z" fill="#1a1a1a" />
        {/* eyes */}
        <motion.g animate={{ scaleY: [1, 1, 0.1, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.96, 0.98, 1] }} style={{ transformOrigin: "100px 85px" }}>
          <circle cx="88" cy="85" r="3" fill="#071126" />
          <circle cx="112" cy="85" r="3" fill="#071126" />
        </motion.g>
        {/* eyebrows */}
        {mood === "worried" && <>
          <path d="M82 76 L94 78" stroke="#071126" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M118 78 L106 76" stroke="#071126" strokeWidth="2.5" strokeLinecap="round" />
        </>}
        {mood === "confident" && <>
          <path d="M82 76 L94 74" stroke="#071126" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M118 74 L106 76" stroke="#071126" strokeWidth="2.5" strokeLinecap="round" />
        </>}
        {/* mouth */}
        {mood === "happy" || mood === "celebrating" ? (
          <path d="M88 102 Q100 114 112 102" fill="none" stroke="#071126" strokeWidth="3" strokeLinecap="round" />
        ) : mood === "sad" ? (
          <path d="M88 108 Q100 98 112 108" fill="none" stroke="#071126" strokeWidth="3" strokeLinecap="round" />
        ) : mood === "worried" ? (
          <path d="M90 104 Q100 100 110 104" fill="none" stroke="#071126" strokeWidth="3" strokeLinecap="round" />
        ) : (
          <line x1="90" y1="104" x2="110" y2="104" stroke="#071126" strokeWidth="3" strokeLinecap="round" />
        )}
        {/* accent on shirt */}
        <circle cx="100" cy="170" r="4" fill={c.accent} />
      </motion.g>

      {showConfetti && (
        <g>
          {Array.from({ length: 14 }).map((_, i) => (
            <motion.rect
              key={i}
              x={Math.random() * 200}
              y={-10}
              width="4"
              height="8"
              fill={["#0B1C9C", "#1686F5", "#19C7D8", "#09B83E"][i % 4]}
              initial={{ y: -10, rotate: 0, opacity: 0 }}
              animate={{ y: 220, rotate: 360, opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </g>
      )}
    </svg>
  );
}

export function SalaryGraph({ growth = 1 }: { growth?: number }) {
  // growth 0..1
  const points = [
    [10, 90],
    [40, 80],
    [70, 70],
    [100, 50],
    [130, 35],
    [160, 18],
  ];
  return (
    <svg viewBox="0 0 180 110" className="h-full w-full">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#0B1C9C" />
          <stop offset="0.5" stopColor="#1686F5" />
          <stop offset="1" stopColor="#09B83E" />
        </linearGradient>
      </defs>
      <rect width="180" height="110" rx="8" fill="#fff" stroke="#071126" strokeWidth="2" />
      {[0, 1, 2, 3].map((i) => <line key={i} x1="10" x2="170" y1={20 + i * 20} y2={20 + i * 20} stroke="#e2e8f0" />)}
      <motion.polyline
        points={points.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke="url(#g)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="500"
        initial={{ strokeDashoffset: 500 }}
        animate={{ strokeDashoffset: 500 - 500 * growth }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      {points.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x} cy={y} r="4"
          fill={i === points.length - 1 ? "#09B83E" : "#1686F5"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + i * 0.2 }}
        />
      ))}
      <text x="10" y="105" fontSize="8" fill="#64748B">Year 1</text>
      <text x="148" y="105" fontSize="8" fill="#64748B">Year 5</text>
    </svg>
  );
}
