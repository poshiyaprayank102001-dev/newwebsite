"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface HeaderStateContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const HeaderStateContext = createContext<HeaderStateContextType | undefined>(undefined);

export const HeaderStateProvider = ({ children }: { children: ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <HeaderStateContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </HeaderStateContext.Provider>
  );
};

export const useHeaderState = () => {
  const context = useContext(HeaderStateContext);
  if (!context) {
    throw new Error("useHeaderState must be used within a HeaderStateProvider");
  }
  return context;
};
