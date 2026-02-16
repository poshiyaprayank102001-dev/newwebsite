"use client";

import { useHeaderState } from "@/context/HeaderStateContext";
import { motion, AnimatePresence } from "motion/react";

const SignBoard = () => (
  <div className="relative w-full max-w-lg aspect-[2/1] bg-neutral-800 border-4 border-neutral-700/50 shadow-2xl flex flex-col items-center justify-center p-6 text-center transform hover:scale-105 transition-transform duration-500 overflow-hidden group">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    <div className="relative z-10 flex flex-col gap-2 grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500">
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-neutral-300 transform -rotate-2">
        BHATT IMPEX
        <br />
        PVT. LTD.
      </h2>
      <div className="text-[10px] md:text-xs text-neutral-400 font-mono mt-2 transform -rotate-1 opacity-70">
        <p>Address: B-25 G.I.D.C. Industrial Estate</p>
        <p>Tel: (0288) 2561342 Fax: (0288) 256</p>
      </div>
      <div className="absolute top-4 left-4 w-12 h-12 border-4 border-neutral-500 rounded-full opacity-30"></div>
    </div>
  </div>
);

export default function Home() {
  const { activeIndex } = useHeaderState();

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <AnimatePresence mode="wait">
        {activeIndex === 0 ? (
          <motion.div
            key="founded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-12 text-white"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <span className="text-2xl md:text-3xl font-light tracking-wide text-white/80">Founded</span>
              
              <SignBoard />

              <span className="text-4xl md:text-5xl font-mono text-white/90">1986</span>
            </div>

            <div className="text-center max-w-xl mx-auto space-y-2 mt-8">
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                by a first-generation immigrant entrepreneur
              </p>
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                to supply American recycled brass to the Indian market
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="today"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-12 text-white"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <span className="text-2xl md:text-3xl font-light tracking-wide text-white/80">Today</span>
              
              <SignBoard />

              <div className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-mono text-white/90">37</span>
                <span className="text-sm uppercase tracking-widest text-white/60">countries</span>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto space-y-2 mt-8">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                Bhatt International has grown into a global trader buying/selling
              </p>
              <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                nonferrous, ferrous metals, and minor metals across
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
