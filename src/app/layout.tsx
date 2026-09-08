import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#235D41",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Stark Ridge Paper | Sustainable Paper Packaging & Specimen Feed",
  description:
    "Explore our collection of eco-friendly kraft paper, corrugated fluting, luxury boards, and food grade barrier solutions.",
  authors: [{ name: "Stark Ridge Paper Co." }],
  openGraph: {
    title: "Stark Ridge Paper | Sustainable Paper Packaging",
    description: "Interactive 3D paper specimen feed & technical datasheets.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FDFBF7] text-[#1E2922] font-sans antialiased selection:bg-[#235D41] selection:text-white">
        {children}
      </body>
    </html>
  );
}
