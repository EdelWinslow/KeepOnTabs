"use client";

import FadeIn from "@/components/FadeIn";
import CommissionCalculator from "@/components/CommissionCalculator";
import { usePopSounds } from "@/hooks/usePopSounds";

export default function Pricing() {
  const { playRandomPop } = usePopSounds();

  const handleSelectStyle = (style: string) => {
    playRandomPop();
    window.dispatchEvent(new CustomEvent("setStyle", { detail: style }));
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="max-w-container-max mx-auto px-8 py-16 w-full flex-grow">
      <FadeIn>
        <header className="mb-16 text-center mt-8">
          <h1 className="font-headline-xl text-headline-xl text-zinc-800 mb-4">
            Commission Pricing
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            Ready to bring your characters to life? Choose a style that fits your
            vision. All commissions include personal use rights and high-res
            files.
          </p>
        </header>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
        <FadeIn delay={0.1} className="bg-white border-[3px] border-zinc-800 rounded-xl hard-shadow flex flex-col h-full overflow-hidden">
          <div className="aspect-video w-full border-b-[3px] border-zinc-800 overflow-hidden">
            <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center">
              <span className="font-label-bold text-zinc-500 text-center px-4">
                Simple Sketch Example
              </span>
            </div>
          </div>
          <div className="p-8 flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary">edit</span>
              <h2 className="font-headline-md text-headline-md text-zinc-800">
                Simple Sketch
              </h2>
            </div>
            <p className="font-body-md text-zinc-600 mb-8">
              Loose, expressive lines with minimal shading. Perfect for quick
              character concepts.
            </p>
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Headshot</span>
                <span className="font-headline-md text-primary">$6</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Bust up</span>
                <span className="font-headline-md text-primary">$9</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Half body</span>
                <span className="font-headline-md text-primary">$12</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Full body</span>
                <span className="font-headline-md text-primary">$15</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Flat colors</span>
                <span className="font-headline-md text-primary">+$2</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-label-bold text-zinc-700">Simple shading</span>
                <span className="font-headline-md text-primary">+$2</span>
              </li>
            </ul>
          </div>
          <div className="p-8 pt-0">
            <button 
              onClick={() => handleSelectStyle("sketch")}
              className="w-full py-4 bg-white border-[3px] border-zinc-800 rounded-lg font-label-bold hard-shadow hard-shadow-hover hard-shadow-active transition-all cursor-pointer"
            >
              Select Sketch
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="bg-secondary-container border-[3px] border-zinc-800 rounded-xl hard-shadow flex flex-col h-full overflow-hidden relative transform md:-translate-y-4">
          <div className="absolute top-4 right-4 bg-primary-container border-2 border-zinc-800 px-3 py-1 rounded-full text-xs font-label-bold z-10">
            POPULAR
          </div>
          <div className="aspect-video w-full border-b-[3px] border-zinc-800 overflow-hidden">
            <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center">
              <span className="font-label-bold text-zinc-500 text-center px-4">
                Clean Lineart Example
              </span>
            </div>
          </div>
          <div className="p-8 flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary">ink_pen</span>
              <h2 className="font-headline-md text-headline-md text-zinc-800">
                Clean Lineart
              </h2>
            </div>
            <p className="font-body-md text-zinc-600 mb-8">
              Polished, professional ink work with varied line weights and flat
              colors.
            </p>
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-zinc-800/10">
                <span className="font-label-bold text-zinc-700">Headshot</span>
                <span className="font-headline-md text-primary">$14</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-800/10">
                <span className="font-label-bold text-zinc-700">Bust up</span>
                <span className="font-headline-md text-primary">$16</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-800/10">
                <span className="font-label-bold text-zinc-700">Half body</span>
                <span className="font-headline-md text-primary">$22</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-800/10">
                <span className="font-label-bold text-zinc-700">Full body</span>
                <span className="font-headline-md text-primary">$26</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-800/10">
                <span className="font-label-bold text-zinc-700">Flat colors</span>
                <span className="font-headline-md text-primary">+$2</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-label-bold text-zinc-700">Simple shading</span>
                <span className="font-headline-md text-primary">+$3</span>
              </li>
            </ul>
          </div>
          <div className="p-8 pt-0">
            <button 
              onClick={() => handleSelectStyle("lineart")}
              className="w-full py-4 bg-primary-container border-[3px] border-zinc-800 rounded-lg font-label-bold hard-shadow hard-shadow-hover hard-shadow-active transition-all cursor-pointer"
            >
              Select Lineart
            </button>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="bg-white border-[3px] border-zinc-800 rounded-xl hard-shadow flex flex-col h-full overflow-hidden">
          <div className="aspect-video w-full border-b-[3px] border-zinc-800 overflow-hidden">
            <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center">
              <span className="font-label-bold text-zinc-500 text-center px-4">
                Full Render Example
              </span>
            </div>
          </div>
          <div className="p-8 flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary">brush</span>
              <h2 className="font-headline-md text-headline-md text-zinc-800">
                Full Render
              </h2>
            </div>
            <p className="font-body-md text-zinc-600 mb-8">
              Fully painted illustration with cinematic lighting, depth, and
              rich textures.
            </p>
            <ul className="space-y-4">
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Headshot</span>
                <span className="font-headline-md text-primary">$24</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Bust up</span>
                <span className="font-headline-md text-primary">$30</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Half body</span>
                <span className="font-headline-md text-primary">$36</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-label-bold text-zinc-700">Full body</span>
                <span className="font-headline-md text-primary">$42</span>
              </li>
            </ul>
          </div>
          <div className="p-8 pt-0">
            <button 
              onClick={() => handleSelectStyle("render")}
              className="w-full py-4 bg-white border-[3px] border-zinc-800 rounded-lg font-label-bold hard-shadow hard-shadow-hover hard-shadow-active transition-all cursor-pointer"
            >
              Select Render
            </button>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.4}>
        <section className="mt-20">
          <h3 className="font-headline-lg text-headline-lg text-zinc-800 mb-8 flex items-center gap-4">
            <span className="material-symbols-outlined text-4xl">add_circle</span>
            Add-ons &amp; Extras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-8 border-[3px] border-zinc-800 rounded-xl hard-shadow flex flex-col gap-4 items-start">
              <div className="flex items-center gap-4">
                <div className="bg-primary-container p-3 rounded-xl border-2 border-zinc-800 shrink-0">
                  <span className="material-symbols-outlined text-2xl">landscape</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-zinc-800">
                  Backgrounds
                </h4>
              </div>
              <p className="font-body-md text-secondary">
                From simple shapes to fully detailed environments.
              </p>
              <div className="inline-block px-6 py-2 bg-primary-fixed border-2 border-zinc-800 rounded-lg font-headline-md mt-auto">
                $2 - $15
              </div>
            </div>
            
            <div className="bg-surface-container-low p-8 border-[3px] border-zinc-800 rounded-xl hard-shadow flex flex-col gap-4 items-start">
              <div className="flex items-center gap-4">
                <div className="bg-primary-container p-3 rounded-xl border-2 border-zinc-800 shrink-0">
                  <span className="material-symbols-outlined text-2xl">group</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-zinc-800">
                  Extra Characters
                </h4>
              </div>
              <p className="font-body-md text-secondary">
                Add more friends or foes to your custom illustration.
              </p>
              <div className="inline-block px-6 py-2 bg-primary-fixed border-2 border-zinc-800 rounded-lg font-headline-md mt-auto">
                +60% Base Price
              </div>
            </div>

            <div className="bg-surface-container-low p-8 border-[3px] border-zinc-800 rounded-xl hard-shadow flex flex-col gap-4 items-start">
              <div className="flex items-center gap-4">
                <div className="bg-primary-container p-3 rounded-xl border-2 border-zinc-800 shrink-0">
                  <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-zinc-800">
                  Extras
                </h4>
              </div>
              <ul className="space-y-3 w-full font-label-bold text-zinc-700 mt-2">
                <li className="flex justify-between border-b border-zinc-800/10 pb-2">
                  <span>Short comic</span>
                  <span className="text-primary font-headline-md">$5-$15</span>
                </li>
                <li className="flex justify-between border-b border-zinc-800/10 pb-2">
                  <span>Simple doodle</span>
                  <span className="text-primary font-headline-md">$5-$10</span>
                </li>
                <li className="flex justify-between">
                  <span>Simple matching PFP</span>
                  <span className="text-primary font-headline-md">$5-$15</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn delay={0.5}>
        <div id="calculator" className="scroll-mt-8">
          <CommissionCalculator />
        </div>
      </FadeIn>

      <FadeIn delay={0.6}>
        <section className="mt-20 p-10 bg-white border-[3px] border-zinc-800 rounded-xl hard-shadow">
          <h3 className="font-headline-md text-headline-md text-zinc-800 mb-6">
            Commission Terms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-label-bold text-primary mb-2">TAT</div>
              <p className="text-zinc-600 font-body-md">
                2-21 days depending on complexity.
              </p>
            </div>
            <div>
              <div className="font-label-bold text-primary mb-2">PAYMENT</div>
              <p className="text-zinc-600 font-body-md">
                Payment required after sketch approval. USD via PayPal.
              </p>
            </div>
            <div>
              <div className="font-label-bold text-primary mb-2">REFUNDS</div>
              <p className="text-zinc-600 font-body-md">
                No refunds unless I am unable to finish the commission.
              </p>
            </div>
            <div>
              <div className="font-label-bold text-primary mb-2">RULES</div>
              <p className="text-zinc-600 font-body-md">
                No claiming/reselling, credit required, no AI/NFT.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
