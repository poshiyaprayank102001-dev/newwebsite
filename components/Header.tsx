"use client";

import TrueFocus from "@/components/react-bits/TrueFocus";
import { useHeaderState } from "@/context/HeaderStateContext";

const Header = () => {
  const { activeIndex, setActiveIndex } = useHeaderState();

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-center py-5 bg-black/50 backdrop-blur-md">
      <TrueFocus
        sentence=" Small beginnings | Big dreams "
        separator="|"
        manualMode={true}
        blurAmount={5}
        borderColor="#5227FF"
        glowColor="rgba(255, 0, 0, 0.6)"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
        focusIndex={activeIndex}
      />
    </header>
  );
};

export default Header;
