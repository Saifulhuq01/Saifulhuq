'use client';
import { motion } from 'framer-motion';

// Animated circuit node component
const CircuitNode = ({ x, y, delay, size = 6 }: { x: number; y: number; delay: number; size?: number }) => (
  <motion.g>
    <motion.circle
      cx={x} cy={y} r={size}
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="1.5"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.4, ease: "backOut" }}
    />
    <motion.circle
      cx={x} cy={y} r={size * 0.35}
      fill="var(--color-accent)"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.5, 1], opacity: 1 }}
      transition={{ delay: delay + 0.2, duration: 0.5 }}
    />
  </motion.g>
);

// Animated connecting line
const CircuitLine = ({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number; }) => (
  <motion.line
    x1={x1} y1={y1} x2={x2} y2={y2}
    stroke="var(--color-accent)"
    strokeWidth="1"
    strokeOpacity={0.4}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ delay, duration: 0.6, ease: "easeInOut" }}
  />
);

// Animated data packet traveling along a path
const DataPulse = ({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number; }) => (
  <motion.circle
    r={2}
    fill="var(--color-accent)"
    initial={{ cx: x1, cy: y1, opacity: 0 }}
    animate={{
      cx: [x1, x2],
      cy: [y1, y2],
      opacity: [0, 1, 1, 0]
    }}
    transition={{
      delay,
      duration: 1.2,
      repeat: Infinity,
      repeatDelay: 3,
      ease: "linear"
    }}
  />
);

// Floating code fragment
const CodeFragment = ({ x, y, text, delay }: { x: number; y: number; text: string; delay: number }) => (
  <motion.text
    x={x} y={y}
    fill="var(--color-accent)"
    fontSize="9"
    fontFamily="monospace"
    opacity={0.3}
    initial={{ opacity: 0, x: x - 20 }}
    animate={{ opacity: [0, 0.4, 0.25], x }}
    transition={{ delay, duration: 1.2 }}
  >
    {text}
  </motion.text>
);

// Animated square module (like a chip or service block)
const ModuleBlock = ({ x, y, w, h, label, delay }: { x: number; y: number; w: number; h: number; label: string; delay: number }) => (
  <motion.g>
    <motion.rect
      x={x} y={y} width={w} height={h}
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="1.5"
      strokeDasharray="4 2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.7 }}
      transition={{ delay, duration: 0.5, ease: "backOut" }}
      style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
    />
    <motion.text
      x={x + w / 2} y={y + h / 2 + 3}
      textAnchor="middle"
      fill="var(--color-accent)"
      fontSize="8"
      fontFamily="monospace"
      letterSpacing="0.1em"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: delay + 0.3, duration: 0.4 }}
    >
      {label}
    </motion.text>
  </motion.g>
);

// Scanning line effect
const ScanLine = ({ delay }: { delay: number }) => (
  <motion.line
    x1={0} y1={0} x2={350} y2={0}
    stroke="var(--color-accent)"
    strokeWidth="1"
    strokeOpacity={0.15}
    initial={{ y1: 0, y2: 0 }}
    animate={{ y1: [0, 400], y2: [0, 400] }}
    transition={{ delay, duration: 3, repeat: Infinity, repeatDelay: 4, ease: "linear" }}
  />
);

// Hex grid background pattern
const HexDot = ({ cx, cy, delay }: { cx: number; cy: number; delay: number }) => (
  <motion.circle
    cx={cx} cy={cy} r={1}
    fill="var(--color-accent)"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.15, 0.08] }}
    transition={{ delay, duration: 2 }}
  />
);


export default function TechAssembly() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent opacity-50" />

      <motion.svg
        viewBox="0 0 350 400"
        className="w-full h-full max-w-[350px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background hex grid dots */}
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <HexDot
              key={`dot-${row}-${col}`}
              cx={col * 35 + (row % 2 ? 17 : 0)}
              cy={row * 35}
              delay={0.02 * (row + col)}
            />
          ))
        )}

        {/* Scan line effect */}
        <ScanLine delay={2} />

        {/* === LAYER 1: Module blocks (chips / services) === */}
        <ModuleBlock x={20} y={30} w={80} h={40} label="API_GW" delay={0.5} />
        <ModuleBlock x={240} y={30} w={90} h={40} label="AUTH_SVC" delay={0.7} />
        <ModuleBlock x={130} y={140} w={90} h={50} label="CORE_ENGINE" delay={1.0} />
        <ModuleBlock x={10} y={260} w={80} h={40} label="DB_CLUSTER" delay={1.3} />
        <ModuleBlock x={250} y={260} w={85} h={40} label="MSG_QUEUE" delay={1.5} />
        <ModuleBlock x={120} y={330} w={100} h={40} label="DISPATCHER" delay={1.7} />

        {/* === LAYER 2: Circuit nodes (junction points) === */}
        <CircuitNode x={175} y={100} delay={0.8} size={5} />
        <CircuitNode x={60} y={120} delay={0.9} />
        <CircuitNode x={290} y={120} delay={1.0} />
        <CircuitNode x={60} y={230} delay={1.2} size={4} />
        <CircuitNode x={290} y={230} delay={1.4} size={4} />
        <CircuitNode x={175} y={210} delay={1.1} size={5} />

        {/* === LAYER 3: Connecting lines === */}
        {/* API_GW down to center junction */}
        <CircuitLine x1={60} y1={70} x2={60} y2={120} delay={1.0} />
        <CircuitLine x1={60} y1={120} x2={175} y2={100} delay={1.1} />
        {/* AUTH_SVC down to center junction */}
        <CircuitLine x1={285} y1={70} x2={290} y2={120} delay={1.1} />
        <CircuitLine x1={290} y1={120} x2={175} y2={100} delay={1.2} />
        {/* Center junction down to CORE_ENGINE */}
        <CircuitLine x1={175} y1={100} x2={175} y2={140} delay={1.3} />
        {/* CORE_ENGINE down to lower junction */}
        <CircuitLine x1={175} y1={190} x2={175} y2={210} delay={1.4} />
        {/* Lower junction to DB_CLUSTER */}
        <CircuitLine x1={175} y1={210} x2={60} y2={230} delay={1.5} />
        <CircuitLine x1={60} y1={230} x2={50} y2={260} delay={1.6} />
        {/* Lower junction to MSG_QUEUE */}
        <CircuitLine x1={175} y1={210} x2={290} y2={230} delay={1.5} />
        <CircuitLine x1={290} y1={230} x2={292} y2={260} delay={1.6} />
        {/* Down to DISPATCHER */}
        <CircuitLine x1={175} y1={210} x2={170} y2={330} delay={1.8} />

        {/* === LAYER 4: Data pulses traveling the circuit === */}
        <DataPulse x1={60} y1={70} x2={175} y2={140} delay={2.5} />
        <DataPulse x1={285} y1={70} x2={175} y2={140} delay={3.0} />
        <DataPulse x1={175} y1={190} x2={50} y2={260} delay={3.5} />
        <DataPulse x1={175} y1={190} x2={292} y2={260} delay={4.0} />
        <DataPulse x1={175} y1={210} x2={170} y2={330} delay={4.5} />

        {/* === LAYER 5: Floating code fragments === */}
        <CodeFragment x={115} y={25} text="import { dispatch }" delay={2.0} />
        <CodeFragment x={20} y={190} text="@Async" delay={2.3} />
        <CodeFragment x={240} y={195} text="emit(event)" delay={2.5} />
        <CodeFragment x={90} y={390} text="status: ONLINE" delay={2.8} />

        {/* Corner brackets - the "frame" */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Top-left */}
          <line x1="0" y1="15" x2="0" y2="0" stroke="var(--color-accent)" strokeWidth="1.5" />
          <line x1="0" y1="0" x2="15" y2="0" stroke="var(--color-accent)" strokeWidth="1.5" />
          {/* Top-right */}
          <line x1="335" y1="0" x2="350" y2="0" stroke="var(--color-accent)" strokeWidth="1.5" />
          <line x1="350" y1="0" x2="350" y2="15" stroke="var(--color-accent)" strokeWidth="1.5" />
          {/* Bottom-left */}
          <line x1="0" y1="385" x2="0" y2="400" stroke="var(--color-accent)" strokeWidth="1.5" />
          <line x1="0" y1="400" x2="15" y2="400" stroke="var(--color-accent)" strokeWidth="1.5" />
          {/* Bottom-right */}
          <line x1="335" y1="400" x2="350" y2="400" stroke="var(--color-accent)" strokeWidth="1.5" />
          <line x1="350" y1="385" x2="350" y2="400" stroke="var(--color-accent)" strokeWidth="1.5" />
        </motion.g>

        {/* System status text */}
        <motion.text
          x={175} y={398}
          textAnchor="middle"
          fill="var(--color-accent)"
          fontSize="7"
          fontFamily="monospace"
          letterSpacing="0.3em"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.3] }}
          transition={{ delay: 3, duration: 2 }}
        >
          SYS_ARCHITECTURE v2.1
        </motion.text>
      </motion.svg>

      {/* Pulsing corner accents outside the SVG */}
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 border-t border-r border-accent/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.2] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-accent/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0.2] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}
