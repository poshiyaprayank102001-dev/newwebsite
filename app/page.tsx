"use client";

import { useHeaderState } from "@/context/HeaderStateContext";
import { motion, AnimatePresence } from "motion/react";

const SignBoard = () => (
  // Increased size to max-w-4xl
  <div className="relative w-full max-w-4xl aspect-[2/1] bg-neutral-800 border-4 border-neutral-700/50 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
    <img 
      src="/Picture1.png" 
      alt="Bhatt Impex Pvt Ltd" 
      className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" 
    />
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
            className="flex flex-col items-center justify-center gap-12 text-white w-full px-4"
          >
            {/* Main Content Wrapper with diagonal text */}
            <div className="relative w-full max-w-4xl mx-auto my-8 md:px-0">
              <span className="absolute -top-12 left-0 md:top-0 md:-left-40 text-2xl md:text-3xl font-bold tracking-wide text-white/80 whitespace-nowrap">
                Founded
              </span>
              
              <SignBoard />

              <span className="absolute -bottom-12 right-0 md:bottom-0 md:-right-40 text-4xl md:text-6xl font-bold font-mono text-white/90">
                1986
              </span>
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
