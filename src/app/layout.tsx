import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Stark Ridge Paper | Sustainable Paper Packaging, Reimagined",
  description:
    "Leading manufacturer and innovator of eco-friendly kraft paper, corrugated fluting, luxury eco-packaging, food grade paperboards, and customized paper solutions.",
  keywords: [
    "kraft paper",
    "sustainable packaging",
    "corrugated paper",
    "food grade paper",
    "eco packaging",
    "Stark Ridge Paper",
    "FSC certified paper",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FDFBF7] text-[#1E2922] font-sans antialiased selection:bg-[#2D5A43] selection:text-white">
        {children}
      </body>
    </html>
  );
}
