import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
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
      <body className="antialiased bg-black text-white">
        <HeaderStateProvider>
          <Header />
          <main className="pt-40 min-h-screen">
            {children}
          </main>
        </HeaderStateProvider>
      </body>
    </html>
  );
}
