import type { Metadata } from "next";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import { HeaderStateProvider } from "@/context/HeaderStateContext";

export const metadata: Metadata = {
  title: "Bint Website",
  description: "Bint Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-black text-white pb-40">
        <HeaderStateProvider>
          <HeaderWrapper />
          {children}
        </HeaderStateProvider>
      </body>
    </html>
  );
}
