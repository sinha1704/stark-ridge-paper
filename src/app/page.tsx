"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PAPER_ITEMS, CATEGORIES } from "@/data/products";
import { PaperFlipCard } from "@/components/PaperFlipCard";
import { RotateCw, Leaf, Mail } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredPapers = selectedCategory === "all"
    ? PAPER_ITEMS
    : PAPER_ITEMS.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 18,
        duration: 0.7,
        delay: 0.15,
        ease: "power2.out",
      });

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".paper-card-container");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1E2922] w-full">
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8DFC9] py-3 sm:py-4 w-full shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#235D41] flex items-center justify-center text-white font-serif font-black text-base sm:text-lg shadow-sm flex-shrink-0">
              S
            </div>
            <div className="leading-tight">
              <span className="font-serif font-bold text-sm sm:text-lg tracking-tight text-[#1E2922] block whitespace-nowrap">
                STARK RIDGE
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#7C5438] font-bold block">
                Paper Co.
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3 sm:gap-6 text-xs font-semibold text-[#5E402C]">
            <a
              href="#feed"
              className="hover:text-[#235D41] transition-colors hidden sm:inline-block py-1"
            >
              Paper Feed
            </a>
            <a
              href="mailto:contact@starkridgepaper.com"
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-[#235D41] text-white hover:bg-[#193E2D] transition-colors shadow-xs flex items-center gap-1.5 text-xs font-medium whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Mill</span>
            </a>
          </div>
        </div>
      </header>

      <section ref={heroRef} className="pt-8 sm:pt-16 pb-8 sm:pb-10 text-center px-4 max-w-4xl mx-auto w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DEF0E6] text-[#235D41] text-xs font-bold uppercase tracking-wider mb-3.5">
          <Leaf className="w-3.5 h-3.5" />
          <span>Sustainable Paper Packaging</span>
        </div>

        <h1
          ref={titleRef}
          className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E2922] leading-tight px-1"
        >
          Visual Paper Feed &amp; Specimen Grid
        </h1>

        <p
          ref={subtitleRef}
          className="text-[#5E402C] text-xs sm:text-base mt-2.5 sm:mt-3 max-w-xl mx-auto leading-relaxed font-normal px-2"
        >
          Explore our collection in an Instagram-style feed. Tap or click any card
          to flip and reveal technical calipers, GSM, and eco-certifications.
        </p>

        <div className="mt-6 sm:mt-8 flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-2 w-full px-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-[#235D41] text-white shadow-xs font-bold"
                  : "bg-[#F6EFE2] text-[#5E402C] hover:bg-[#ECDECA]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      <main id="feed" className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20 w-full">
        <div className="flex items-center justify-between mb-5 sm:mb-6 pb-2 border-b border-[#E8DFC9]">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7C5438]">
            Showing {filteredPapers.length} Papers
          </span>
          <span className="text-xs text-[#5E402C] flex items-center gap-1">
            <RotateCw className="w-3 h-3 text-[#235D41]" />
            <span>Interactive 3D Cards</span>
          </span>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredPapers.map((item) => (
            <PaperFlipCard key={item.id} item={item} />
          ))}
        </div>
      </main>

      <footer className="bg-[#193E2D] text-[#FDFBF7] py-8 sm:py-9 border-t border-[#235D41] w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center sm:flex-row sm:justify-between gap-4 text-center sm:text-left text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2">
            <span className="font-serif font-bold text-white text-sm sm:text-base tracking-tight">
              STARK RIDGE PAPER
            </span>
            <span className="hidden sm:inline text-white/40">•</span>
            <span className="text-white/70 text-[11px] sm:text-xs">
              100% Recyclable &amp; Plastic-Free Packaging
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white/70 text-[11px] sm:text-xs">
            <a
              href="mailto:contact@starkridgepaper.com"
              className="text-[#90CAAC] hover:text-white transition-colors underline font-medium"
            >
              contact@starkridgepaper.com
            </a>
            <span className="hidden sm:inline text-white/40">•</span>
            <span>© {new Date().getFullYear()} Stark Ridge Paper</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
