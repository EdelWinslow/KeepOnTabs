"use client";

import { useState, useEffect } from "react";
import { usePopSounds } from "@/hooks/usePopSounds";

type StyleType = "sketch" | "lineart" | "render";
type BodyType = "headshot" | "bust" | "half" | "full";
type BgType = "none" | "simple" | "detailed";

const PRICING = {
  sketch: {
    name: "Simple Sketch",
    types: {
      headshot: { name: "Headshot", price: 6 },
      bust: { name: "Bust Up", price: 9 },
      half: { name: "Half Body", price: 12 },
      full: { name: "Full Body", price: 15 },
    },
    addons: {
      flatColors: 2,
      simpleShading: 2,
    }
  },
  lineart: {
    name: "Clean Lineart",
    types: {
      headshot: { name: "Headshot", price: 14 },
      bust: { name: "Bust Up", price: 16 },
      half: { name: "Half Body", price: 22 },
      full: { name: "Full Body", price: 26 },
    },
    addons: {
      flatColors: 2,
      simpleShading: 3,
    }
  },
  render: {
    name: "Full Render",
    types: {
      headshot: { name: "Headshot", price: 24 },
      bust: { name: "Bust Up", price: 30 },
      half: { name: "Half Body", price: 36 },
      full: { name: "Full Body", price: 42 },
    },
    addons: {}
  }
};

const BACKGROUNDS = {
  none: { name: "Transparent", price: 0 },
  simple: { name: "Simple", price: 2 },
  detailed: { name: "Detailed", price: 15 },
};

export default function CommissionCalculator() {
  const [style, setStyle] = useState<StyleType>("lineart");
  const [type, setType] = useState<BodyType>("half");
  
  const [flatColors, setFlatColors] = useState(false);
  const [simpleShading, setSimpleShading] = useState(false);
  
  const [background, setBackground] = useState<BgType>("none");
  const [extraCharacters, setExtraCharacters] = useState(0);
  const { playRandomPop } = usePopSounds();

  const handleStyleChange = (newStyle: StyleType) => {
    setStyle(newStyle);
    if (newStyle === "render") {
      setFlatColors(false);
      setSimpleShading(false);
    }
  };

  useEffect(() => {
    const handleSetStyle = (e: CustomEvent) => {
      handleStyleChange(e.detail as StyleType);
    };
    window.addEventListener("setStyle", handleSetStyle as EventListener);
    return () => window.removeEventListener("setStyle", handleSetStyle as EventListener);
  }, []);

  const currentStyle = PRICING[style];
  const basePrice = currentStyle.types[type].price;
  
  let colorPrice = 0;
  if (style !== "render") {
    if (flatColors && "flatColors" in currentStyle.addons) colorPrice += currentStyle.addons.flatColors as number;
    if (simpleShading && "simpleShading" in currentStyle.addons) colorPrice += currentStyle.addons.simpleShading as number;
  }
  
  const extraCharPrice = (basePrice * 0.6) * extraCharacters;
  const totalColorPrice = colorPrice * (1 + extraCharacters);
  const bgPrice = BACKGROUNDS[background].price;
  
  const totalPrice = basePrice + extraCharPrice + totalColorPrice + bgPrice;

  return (
    <div className="bg-white border-[3px] border-zinc-800 rounded-xl hard-shadow flex flex-col lg:flex-row overflow-hidden mt-20">
      <div className="p-8 lg:w-2/3 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-zinc-800 bg-[#FDFDFD]">
        <h3 className="font-headline-lg text-zinc-800 mb-8 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-4xl">calculate</span>
          Interactive Calculator
        </h3>

        <div className="space-y-8">
          {/* Style */}
          <div>
            <label className="block font-label-bold text-zinc-700 mb-3 uppercase tracking-wider">1. Art Style</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(Object.keys(PRICING) as StyleType[]).map((key) => (
                <button
                  key={key}
                  onClick={() => { playRandomPop(); handleStyleChange(key); }}
                  className={`py-3 px-4 rounded-lg border-[3px] border-zinc-800 font-label-bold transition-all text-center ${
                    style === key 
                      ? "bg-primary-container text-zinc-900 hard-shadow transform -translate-y-1" 
                      : "bg-white text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  {PRICING[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="block font-label-bold text-zinc-700 mb-3 uppercase tracking-wider">2. Framing</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(Object.keys(currentStyle.types) as BodyType[]).map((key) => (
                <button
                  key={key}
                  onClick={() => { playRandomPop(); setType(key); }}
                  className={`py-3 px-2 rounded-lg border-[3px] border-zinc-800 font-label-bold transition-all text-center text-sm ${
                    type === key 
                      ? "bg-primary-container text-zinc-900 hard-shadow transform -translate-y-1" 
                      : "bg-white text-zinc-600 hover:bg-zinc-50"
                  }`}
                >
                  {currentStyle.types[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Colors & Addons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {style !== "render" && (
              <div>
                <label className="block font-label-bold text-zinc-700 mb-3 uppercase tracking-wider">Color & Shading</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-6 h-6 border-[3px] border-zinc-800 rounded flex items-center justify-center transition-colors ${flatColors ? 'bg-primary' : 'bg-white'}`}>
                      {flatColors && <span className="material-symbols-outlined text-white text-sm font-bold">check</span>}
                    </div>
                    <input type="checkbox" className="hidden" checked={flatColors} onChange={(e) => { playRandomPop(); setFlatColors(e.target.checked); }} />
                    <span className="font-label-bold text-zinc-700 group-hover:text-primary transition-colors">Flat Colors (+${(currentStyle.addons as any).flatColors})</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-6 h-6 border-[3px] border-zinc-800 rounded flex items-center justify-center transition-colors ${simpleShading ? 'bg-primary' : 'bg-white'}`}>
                      {simpleShading && <span className="material-symbols-outlined text-white text-sm font-bold">check</span>}
                    </div>
                    <input type="checkbox" className="hidden" checked={simpleShading} onChange={(e) => { playRandomPop(); setSimpleShading(e.target.checked); }} />
                    <span className="font-label-bold text-zinc-700 group-hover:text-primary transition-colors">Simple Shading (+${(currentStyle.addons as any).simpleShading})</span>
                  </label>
                </div>
              </div>
            )}

            <div>
               <label className="block font-label-bold text-zinc-700 mb-3 uppercase tracking-wider">Background</label>
               <div className="space-y-2">
                 {(Object.keys(BACKGROUNDS) as BgType[]).map((key) => (
                   <label key={key} className="flex items-center gap-3 cursor-pointer group">
                     <div className={`w-6 h-6 rounded-full border-[3px] border-zinc-800 flex items-center justify-center transition-colors ${background === key ? 'bg-primary' : 'bg-white'}`}>
                       {background === key && <div className="w-2 h-2 rounded-full bg-white"></div>}
                     </div>
                     <input type="radio" name="bg" className="hidden" checked={background === key} onChange={() => { playRandomPop(); setBackground(key); }} />
                     <span className="font-label-bold text-zinc-700 group-hover:text-primary transition-colors">
                       {BACKGROUNDS[key].name} {BACKGROUNDS[key].price > 0 && `(+$${BACKGROUNDS[key].price})`}
                     </span>
                   </label>
                 ))}
               </div>
            </div>
          </div>

          {/* Extra Characters */}
          <div>
            <label className="block font-label-bold text-zinc-700 mb-3 uppercase tracking-wider">Extra Characters (+60% Base Price/ea)</label>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => { playRandomPop(); setExtraCharacters(Math.max(0, extraCharacters - 1)); }}
                className="w-12 h-12 rounded-lg border-[3px] border-zinc-800 flex items-center justify-center bg-white hover:bg-zinc-50 hard-shadow-active transition-all"
              >
                <span className="material-symbols-outlined font-bold text-zinc-700">remove</span>
              </button>
              <div className="w-16 h-12 rounded-lg border-[3px] border-zinc-800 flex items-center justify-center bg-zinc-50 font-headline-md">
                {extraCharacters}
              </div>
              <button 
                onClick={() => { playRandomPop(); setExtraCharacters(Math.min(10, extraCharacters + 1)); }}
                className="w-12 h-12 rounded-lg border-[3px] border-zinc-800 flex items-center justify-center bg-white hover:bg-zinc-50 hard-shadow-active transition-all"
              >
                <span className="material-symbols-outlined font-bold text-zinc-700">add</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 lg:w-1/3 bg-[#E8F3FA] flex flex-col">
        <h4 className="font-headline-md text-zinc-800 mb-6 border-b-[3px] border-zinc-800 pb-3 flex items-center gap-2">
          <span className="material-symbols-outlined">receipt_long</span>
          Estimate
        </h4>
        
        <div className="space-y-4 flex-grow font-body-md text-zinc-700">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-label-bold text-zinc-800">{currentStyle.name}</div>
              <div className="text-sm text-zinc-600">{currentStyle.types[type].name}</div>
            </div>
            <span className="font-label-bold">${basePrice.toFixed(2)}</span>
          </div>

          {extraCharacters > 0 && (
            <div className="flex justify-between items-start">
              <div>
                <div className="font-label-bold text-zinc-800">Extra Characters (x{extraCharacters})</div>
                <div className="text-sm text-zinc-600">+60% Base Price</div>
              </div>
              <span className="font-label-bold">+${extraCharPrice.toFixed(2)}</span>
            </div>
          )}

          {totalColorPrice > 0 && (
            <div className="flex justify-between items-start">
              <div>
                <div className="font-label-bold text-zinc-800">Color & Shading</div>
                {extraCharacters > 0 && <div className="text-sm text-zinc-600">x{1 + extraCharacters} characters</div>}
              </div>
              <span className="font-label-bold">+${totalColorPrice.toFixed(2)}</span>
            </div>
          )}

          {bgPrice > 0 && (
            <div className="flex justify-between items-start">
              <div className="font-label-bold text-zinc-800">Background: {BACKGROUNDS[background].name}</div>
              <span className="font-label-bold">+${bgPrice.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <div className="mt-8 pt-6 border-t-[3px] border-zinc-800">
           <div className="flex justify-between items-end mb-4">
             <span className="font-headline-sm text-zinc-800">Total Estimate</span>
             <span className="font-headline-xl text-primary">${totalPrice.toFixed(2)}</span>
           </div>
           <p className="text-xs text-zinc-500 font-label-bold text-center">
             *Final price may vary based on complexity.
           </p>
        </div>
      </div>
    </div>
  );
}
