import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />
        <main className="pt-40 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
