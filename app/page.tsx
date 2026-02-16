"use client";

import { useHeaderState } from "@/context/HeaderStateContext";
import { motion, AnimatePresence } from "motion/react";

const SignBoard = () => (
  <div className="relative w-full max-w-4xl aspect-[2/1] bg-neutral-800 border-4 border-neutral-700/50 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
    <img
      src="/Picture1.png"
      alt="Bhatt Impex Pvt Ltd"
      className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
    />
  </div>
);

const FoundedSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center justify-center gap-12 text-white w-full px-4"
  >
    <div className="relative w-full max-w-4xl mx-auto my-8 md:px-0">
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -top-12 left-0 md:top-0 md:-left-40 text-2xl md:text-3xl font-bold tracking-wide text-white/80 whitespace-nowrap"
      >
        Founded
      </motion.span>

      <SignBoard />

      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -bottom-12 right-0 md:bottom-0 md:-right-40 text-4xl md:text-6xl font-bold font-mono text-white/90"
      >
        1986
      </motion.span>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center max-w-xl mx-auto space-y-2 mt-8"
    >
      <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
        by a first-generation immigrant entrepreneur
      </p>
      <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
        to supply American recycled brass to the Indian market
      </p>
    </motion.div>
  </motion.div>
);

const TodaySection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center justify-center gap-12 text-white w-full px-4"
  >
    <div className="relative w-full max-w-4xl mx-auto my-8 md:px-0">
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -top-12 left-0 md:top-0 md:-left-40 text-2xl md:text-3xl font-bold tracking-wide text-white/80 whitespace-nowrap"
      >
        Today
      </motion.span>

      <SignBoard />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -bottom-16 right-0 md:bottom-0 md:-right-48 flex flex-col items-end"
      >
        <span className="text-4xl md:text-6xl font-bold font-mono text-white/90 leading-none">
          37
        </span>
        <span className="text-sm md:text-base uppercase tracking-widest text-white/60 mt-1">
          countries
        </span>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center max-w-3xl mx-auto space-y-2 mt-8"
    >
      <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
        Bhatt International has grown into a global trader buying/selling
      </p>
      <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
        nonferrous, ferrous metals, and minor metals across
      </p>
    </motion.div>
  </motion.div>
);

const MapComponent = () => {
  // Coordinates based on a 1000x525 SVG coordinate system
  const locations = [
    { name: "USA", x: 250, y: 190 },
    { name: "Europe", x: 500, y: 150 },
    { name: "UAE", x: 610, y: 230 },
    { name: "India", x: 680, y: 250 },
    { name: "Asia", x: 800, y: 210 },
  ];

  return (
    <div className="relative w-full aspect-[1.9/1] bg-[#080808] border border-neutral-800/50 rounded-2xl overflow-hidden group shadow-2xl">
      {/* Map Background */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          filter: 'invert(1) grayscale(1) brightness(1.2) contrast(1.1)',
        }}
      />

      {/* SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 525" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
        </defs>

        {/* Curved Connection Lines */}
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* USA -> Europe */}
          <motion.path d={`M ${locations[0].x} ${locations[0].y} Q 375 70 ${locations[1].x} ${locations[1].y}`}
            fill="none" stroke="url(#line-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
          />
          {/* Europe -> UAE */}
          <motion.path d={`M ${locations[1].x} ${locations[1].y} Q 560 180 ${locations[2].x} ${locations[2].y}`}
            fill="none" stroke="url(#line-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 1.2 }}
          />
          {/* UAE -> India */}
          <motion.path d={`M ${locations[2].x} ${locations[2].y} Q 645 270 ${locations[3].x} ${locations[3].y}`}
            fill="none" stroke="url(#line-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.8 }}
          />
          {/* India -> Asia */}
          <motion.path d={`M ${locations[3].x} ${locations[3].y} Q 740 200 ${locations[4].x} ${locations[4].y}`}
            fill="none" stroke="url(#line-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 2.2 }}
          />
        </motion.g>

        {/* Location Dots & Labels */}
        {locations.map((loc, i) => (
          <g key={i}>
            {/* Pulse */}
            <motion.circle cx={loc.x} cy={loc.y} r="12" stroke="#22c55e" strokeWidth="1" fill="none"
              initial={{ scale: 0, opacity: 1 }} animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
            {/* Core Dot */}
            <motion.circle cx={loc.x} cy={loc.y} r="5" fill="#22c55e"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.3), type: "spring" }}
            />
            {/* Label */}
            <motion.text x={loc.x} y={loc.y + 25} textAnchor="middle" fill="white" fontSize="14" fontWeight="600"
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + (i * 0.3) }}
              className="uppercase tracking-wider shadow-black drop-shadow-md" style={{ textShadow: '0 2px 4px black' }}
            >
              {loc.name}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
};

import { Factory, Anchor, Globe, Leaf } from "lucide-react";

// ... (MapComponent remains same but let's tweaks filter in next step if needed, or assume it's okay)

const GlobalReachSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center justify-center gap-12 text-white w-full px-4"
  >
    <div className="relative w-full max-w-4xl mx-auto my-8 md:px-0">
      <motion.span
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -top-12 left-0 md:top-0 md:-left-40 text-2xl md:text-3xl font-bold tracking-wide text-white/80 whitespace-nowrap"
      >
        Global
      </motion.span>

      <MapComponent />

      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute -bottom-12 right-0 md:bottom-0 md:-right-40 text-2xl md:text-3xl font-bold tracking-wide text-white/90"
      >
        Reach
      </motion.span>
    </div>

    <div className="text-center max-w-xl mx-auto space-y-2 mt-16">
      <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
        Connecting markets across continents
      </p>
    </div>
  </motion.div>
);

const ExpansionSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex flex-col items-center justify-center gap-16 text-white w-full px-4"
  >
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white border-b-2 border-green-500 pb-2 text-center"
    >
      EXPANSION
    </motion.h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[90%]">
      {[
        { title: 'Ferrous Metals', icon: Factory, desc: 'Industrial steel trading' },
        { title: 'Non-Ferrous', icon: Anchor, desc: 'Copper & brass expertise' },
        { title: 'Global Logistics', icon: Globe, desc: 'Worldwide shipping capability' },
        { title: 'Sustainability', icon: Leaf, desc: 'Eco-friendly recycling' }
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + (i * 0.1) }}
          whileHover={{ scale: 1.02, borderColor: 'rgba(34, 197, 94, 0.5)' }}
          className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl cursor-pointer transition-all duration-300 group flex flex-col items-center text-center gap-4"
        >
          <item.icon className="w-10 h-10 text-neutral-500 group-hover:text-green-500 transition-colors" />
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">{item.title}</h3>
            <p className="text-neutral-500 text-sm mt-2">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function Home() {
  const { activeIndex } = useHeaderState();

  return (
    <main 
      className="min-h-screen flex flex-col items-center bg-black pb-96 gap-32"
      style={{ paddingTop: '35vh' }}
    >
      <AnimatePresence mode="wait">
        {activeIndex === 0 && (
          <motion.div
            key="small-beginnings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-16 w-full pb-24"
          >
            <FoundedSection />
            <TodaySection />
            <div className="h-40" />
          </motion.div>
        )}

        {activeIndex === 1 && (
          <motion.div
            key="big-dreams"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-40 w-full pb-24"
          >
            <GlobalReachSection />
            <ExpansionSection />
            <div className="h-40" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
