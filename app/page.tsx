"use client";

import { useEffect } from "react";
import { useHeaderState } from "@/context/HeaderStateContext";
import { motion, AnimatePresence } from "motion/react";

const SignBoard = () => (
  <div className="relative w-full aspect-[2/1] bg-neutral-800 border-4 border-neutral-700/50 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
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
    style={{ scrollMarginTop: 'clamp(80px, 20vh, 35vh)' }}
    className="min-h-screen snap-start flex flex-col items-center justify-center gap-8 text-white w-full px-4"
  >
    {/* Desktop Horizontal Layout */}
    <div className="hidden lg:flex relative items-center justify-center w-full max-w-7xl mx-auto h-[60vh]">
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-0 left-0 text-[7vw] leading-none font-serif italic font-normal tracking-tighter text-white/90 whitespace-nowrap z-10"
      >
        Founded
      </motion.span>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-[40%] top-1/2 -translate-y-1/2 w-[30vw] max-w-3xl z-20"
      >
        <SignBoard />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute bottom-0 right-0 text-[7vw] leading-none font-serif italic font-normal text-white/90 whitespace-nowrap z-10"
      >
        1986
      </motion.span>
    </div>

    {/* Mobile/Tablet Stacked Layout */}
    <div className="lg:hidden flex flex-col items-center w-full gap-6">
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl font-serif italic font-normal tracking-wide text-white/80 self-start"
      >
        Founded
      </motion.span>

      <div className="w-full max-w-lg mx-auto">
        <SignBoard />
      </div>

      <motion.span
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-5xl sm:text-6xl font-serif italic font-normal text-white/90 self-end"
      >
        1986
      </motion.span>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center max-w-2xl mx-auto space-y-2"
    >
      <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed">
        by a first-generation immigrant entrepreneur
      </p>
      <p className="text-base md:text-xl text-white font-medium leading-relaxed">
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
    className="min-h-screen snap-start flex flex-col items-center justify-center gap-8 text-white w-full px-4"
  >
    {/* Desktop Horizontal Layout */}
    <div className="hidden lg:flex relative items-center justify-center w-full max-w-7xl mx-auto h-[60vh]">
      <motion.span
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-0 left-0 text-[7vw] leading-none font-serif italic font-normal tracking-tighter text-white/90 whitespace-nowrap z-10"
      >
        Today
      </motion.span>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-[35%] top-1/2 -translate-y-1/2 w-[30vw] max-w-3xl z-20"
      >
        <SignBoard />
      </motion.div>

      <motion.span
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute bottom-0 right-0 text-[7vw] leading-none font-serif italic font-normal text-white/90 whitespace-nowrap z-10"
      >
        <span className="font-normal font-mono text-white/90 leading-none">
          37
        </span>
        <span className="text-sm md:text-base uppercase tracking-widest text-white/60 mt-1 ml-2">
          countries
        </span>
      </motion.span>
    </div>

    {/* Mobile/Tablet Stacked Layout */}
    <div className="lg:hidden flex flex-col items-center w-full gap-6">
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl sm:text-6xl font-serif italic font-normal tracking-wide text-white/80 self-start"
      >
        Today
      </motion.span>

      <div className="w-full max-w-lg mx-auto">
        <SignBoard />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="flex flex-col items-end self-end"
      >
        <span className="text-5xl sm:text-6xl font-normal font-mono text-white/90 leading-none">
          37
        </span>
        <span className="text-xs uppercase tracking-widest text-white/60 mt-1">
          countries
        </span>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-center max-w-2xl mx-auto space-y-2"
    >
      <p className="text-base md:text-xl text-white font-medium leading-relaxed">
        Bhatt International has grown into a global trader
      </p>
      <p className="text-base md:text-xl text-neutral-400 font-light leading-relaxed">
        buying/selling nonferrous, ferrous metals, and minor metals across 37 countries
      </p>
    </motion.div>
  </motion.div>
);

import { Factory, Anchor, Globe, Leaf } from "lucide-react";
import ProductHeader from "@/components/ProductHeader";
import ProductList from "@/components/ProductList";
import { products } from "@/lib/data";
import ProductGallery from "@/components/ProductGallery";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";

const MapComponent = () => {
  const locations = [
    { name: "USA", x: 250, y: 190 },
    { name: "Europe", x: 500, y: 150 },
    { name: "UAE", x: 610, y: 230 },
    { name: "India", x: 680, y: 250 },
    { name: "Asia", x: 800, y: 210 },
  ];

  return (
    <div className="relative w-full aspect-[1.9/1] bg-[#080808] border border-neutral-800/50 rounded-2xl overflow-hidden group shadow-2xl">
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          filter: 'invert(1) grayscale(1) brightness(1.2) contrast(1.1)',
        }}
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 525" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="50%" stopColor="rgba(34, 197, 94, 0.8)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
        </defs>

        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path d={`M ${locations[0].x} ${locations[0].y} Q 375 70 ${locations[1].x} ${locations[1].y}`}
            fill="none" stroke="url(#line-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.path d={`M ${locations[1].x} ${locations[1].y} Q 560 180 ${locations[2].x} ${locations[2].y}`}
            fill="none" stroke="url(#line-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 1.2 }}
          />
          <motion.path d={`M ${locations[2].x} ${locations[2].y} Q 645 270 ${locations[3].x} ${locations[3].y}`}
            fill="none" stroke="url(#line-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.8 }}
          />
          <motion.path d={`M ${locations[3].x} ${locations[3].y} Q 740 200 ${locations[4].x} ${locations[4].y}`}
            fill="none" stroke="url(#line-gradient)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 2.2 }}
          />
        </motion.g>

        {locations.map((loc, i) => (
          <g key={i}>
            <motion.circle cx={loc.x} cy={loc.y} r="12" stroke="#22c55e" strokeWidth="1" fill="none"
              initial={{ scale: 0, opacity: 1 }} animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            />
            <motion.circle cx={loc.x} cy={loc.y} r="5" fill="#22c55e"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.3), type: "spring" }}
            />
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

const GlobalReachSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="min-h-screen snap-start flex flex-col items-center justify-center gap-8 text-white w-full px-4"
  >
    {/* Label row */}
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
      <motion.span
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-normal tracking-wide text-white/80"
      >
        Global
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide text-white/90"
      >
        Reach
      </motion.span>
    </div>

    {/* Map */}
    <div className="w-full max-w-4xl mx-auto">
      <MapComponent />
    </div>

    <div className="text-center max-w-xl mx-auto space-y-2">
      <p className="text-base md:text-2xl text-neutral-400 font-light leading-relaxed">
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
    className="min-h-screen snap-start flex flex-col items-center justify-center gap-10 md:gap-16 text-white w-full px-4"
  >
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase tracking-widest text-white border-b-2 border-green-500 pb-2 text-center"
    >
      EXPANSION
    </motion.h2>

    <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-[90%]">
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
          className="bg-neutral-900 border border-neutral-800 p-5 md:p-8 rounded-xl cursor-pointer transition-all duration-300 group flex flex-col items-center text-center gap-3 md:gap-4"
        >
          <item.icon className="w-8 h-8 md:w-10 md:h-10 text-neutral-500 group-hover:text-green-500 transition-colors" />
          <div>
            <h3 className="text-base md:text-xl font-bold text-white group-hover:text-green-400 transition-colors">{item.title}</h3>
            <p className="text-neutral-500 text-xs md:text-sm mt-1 md:mt-2">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function Home() {
  const { setActiveIndex } = useHeaderState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const sectionSmall = document.getElementById("small-beginnings");
      const sectionBig = document.getElementById("big-dreams");

      if (sectionSmall && sectionBig) {
        if (scrollPosition >= sectionBig.offsetTop) {
          setActiveIndex(1);
        } else {
          setActiveIndex(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveIndex]);

  const allGalleryImages = products.reduce<string[]>((acc, product) => {
    if (product.gallery) {
      return [...acc, ...product.gallery];
    }
    return acc;
  }, []);

  return (
    <main
      className="min-h-screen flex flex-col items-center bg-black pb-2 gap-2"
      style={{ paddingTop: 'clamp(80px, 20vh, 35vh)' }}
    >
      <div id="small-beginnings" className="flex flex-col gap-16 md:gap-24 w-full pb-2">
        <FoundedSection />
        <TodaySection />
      </div>

      <div id="big-dreams" className="flex flex-col gap-20 md:gap-40 w-full pb-2 mt-8 md:mt-16">
        <GlobalReachSection />
        <ExpansionSection />
      </div>

      <div className="w-full h-screen overflow-y-auto snap-start flex justify-center bg-black">
        <div className="w-full max-w-[1400px] px-4 sm:px-6 md:px-12 lg:px-16 py-16">
          <ProductHeader />
          <ProductList products={products} />
          {allGalleryImages.length > 0 && <ProductGallery images={allGalleryImages} />}
        </div>
      </div>

      <div className="h-screen overflow-y-auto snap-start bg-black flex flex-col items-center justify-center pt-2 pb-2 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-[1400px]">

          {/* Header Section */}
          <div className="mb-12 md:mb-20 text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-base md:text-xl text-neutral-400 font-light max-w-2xl mx-auto">
              Join us on next chapter
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
            {/* Left Column: Form */}
            <div className="w-full order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* Right Column: Details */}
            <div className="w-full order-1 lg:order-2 lg:sticky lg:top-40">
              <ContactDetails />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
