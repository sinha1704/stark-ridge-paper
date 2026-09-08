"use client";

import React, { useState } from "react";
import { PaperCardItem } from "@/data/products";
import { Heart, RotateCw, CheckCircle2 } from "lucide-react";

interface PaperFlipCardProps {
  item: PaperCardItem;
}

export const PaperFlipCard: React.FC<PaperFlipCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes);
  const [imgError, setImgError] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!liked) {
      setLiked(true);
      setLikeCount((c) => c + 1);
    } else {
      setLiked(false);
      setLikeCount((c) => c - 1);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const fallbackImages: Record<string, string> = {
    "1": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "2": "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80",
    "3": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    "4": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    "5": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
    "6": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
  };

  return (
    <div className="paper-card-container w-full h-[470px] perspective-1000">
      <div
        onClick={handleFlip}
        className={`relative w-full h-full duration-700 preserve-3d transition-transform cursor-pointer select-none rounded-2xl ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white border border-[#E8DFC9] shadow-sm hover:shadow-xl transition-shadow flex flex-col overflow-hidden">
          <div className="px-4 py-3 flex items-center justify-between border-b border-[#F6EFE2] bg-[#FDFBF7]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#235D41] text-white flex items-center justify-center font-serif text-xs font-bold">
                SR
              </div>
              <div className="leading-tight">
                <span className="text-xs font-bold text-[#1E2922] block">
                  starkridgepaper
                </span>
                <span className="text-[10px] text-[#7C5438]">
                  Paper Swatch #{item.id}
                </span>
              </div>
            </div>

            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#DEF0E6] text-[#1E4B36] border border-[#BEE1CE]">
              {item.tag}
            </span>
          </div>

          <div className="relative flex-1 overflow-hidden group bg-[#EBE3D3]">
            <img
              src={imgError ? fallbackImages[item.id] || item.image : item.image}
              alt={item.title}
              onError={() => {
                if (!imgError) setImgError(true);
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#90CAAC]">
                {item.specs.gsm}
              </span>
              <h3 className="font-serif text-lg font-bold mt-0.5">
                {item.title}
              </h3>
            </div>

            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow">
              <RotateCw className="w-3 h-3 text-[#5DAE85]" />
              <span>Tap to flip</span>
            </div>
          </div>

          <div className="px-4 py-3 bg-white border-t border-[#F6EFE2] flex items-center justify-between">
            <button
              onClick={toggleLike}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1E2922] hover:text-red-600 transition-colors"
            >
              <Heart
                className={`w-4 h-4 transition-transform active:scale-125 ${
                  liked ? "fill-red-500 text-red-500" : "text-[#7C5438]"
                }`}
              />
              <span>{likeCount.toLocaleString()}</span>
            </button>

            <span className="text-xs font-bold text-[#235D41] flex items-center gap-1">
              <RotateCw className="w-3 h-3" />
              <span>View Specs</span>
            </span>
          </div>
        </div>

        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[#F6EFE2] border-2 border-[#D3C5B2] shadow-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#D3C5B2]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#235D41]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#235D41]">
                  Paper Spec Sheet
                </span>
              </div>
              <div className="p-1 text-[#5E402C]">
                <RotateCw className="w-4 h-4" />
              </div>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#1E2922] mt-4">
              {item.title}
            </h3>

            <div className="mt-5 space-y-2.5 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#E8DFC9] text-xs">
              <div className="flex justify-between py-1 border-b border-[#F6EFE2]">
                <span className="text-[#7C5438] font-medium">Basis Weight:</span>
                <span className="font-bold text-[#1E2922]">{item.specs.gsm}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F6EFE2]">
                <span className="text-[#7C5438] font-medium">Texture / Finish:</span>
                <span className="font-bold text-[#1E2922]">{item.specs.finish}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#F6EFE2]">
                <span className="text-[#7C5438] font-medium">Primary Use:</span>
                <span className="font-bold text-[#1E2922]">{item.specs.use}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7C5438] font-medium">Eco Standard:</span>
                <span className="font-bold text-[#235D41] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#235D41]" />
                  {item.specs.eco}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#D3C5B2] flex items-center justify-between text-xs text-[#5E402C]">
            <span>100% Biodegradable & Recyclable</span>
            <span className="font-bold text-[#235D41] flex items-center gap-1">
              <RotateCw className="w-3 h-3" /> Flip to photo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
