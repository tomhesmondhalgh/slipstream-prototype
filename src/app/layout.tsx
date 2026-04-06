import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans, Fraunces, JetBrains_Mono, Geist_Mono, Syne, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Slipstream — Your policies become your training",
  description: "Turn your organisation's policy documents into complete, custom training courses. No LMS, no accounts, no IT involvement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jakarta.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${geistMono.variable} ${syne.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: "var(--font-dm-sans)",
          "--font-heading": "var(--font-fraunces)",
          "--font-mono": "var(--font-jetbrains)",
          "--accent": "#3CB371",
          "--accent-muted": "color-mix(in srgb, var(--accent) 15%, transparent)",
          "--ink": "#1A1A1A",
          "--cream": "#FAF8F5",
          "--warm-gray": "#B8B2A8",
          "--mid-gray": "#6B6560",
          "--surface": "#EDEBE8",
          "--success": "#16A34A",
        } as React.CSSProperties}
      >{children}</body>
    </html>
  );
}
