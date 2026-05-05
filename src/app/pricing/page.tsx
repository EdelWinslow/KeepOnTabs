import FadeIn from "@/components/FadeIn";

export default function Pricing() {
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
                <span className="font-headline-md text-primary">$12</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Bust up</span>
                <span className="font-headline-md text-primary">$9</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-zinc-100">
                <span className="font-label-bold text-zinc-700">Half body</span>
                <span className="font-headline-md text-primary">$12</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-label-bold text-zinc-700">Full body</span>
                <span className="font-headline-md text-primary">$15</span>
              </li>
            </ul>
          </div>
          <div className="p-8 pt-0">
            <button className="w-full py-4 bg-white border-[3px] border-zinc-800 rounded-lg font-label-bold hard-shadow hard-shadow-hover hard-shadow-active transition-all cursor-pointer">
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
              <li className="flex justify-between items-center">
                <span className="font-label-bold text-zinc-700">Full body</span>
                <span className="font-headline-md text-primary">$26</span>
              </li>
            </ul>
          </div>
          <div className="p-8 pt-0">
            <button className="w-full py-4 bg-primary-container border-[3px] border-zinc-800 rounded-lg font-label-bold hard-shadow hard-shadow-hover hard-shadow-active transition-all cursor-pointer">
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
            <button className="w-full py-4 bg-white border-[3px] border-zinc-800 rounded-lg font-label-bold hard-shadow hard-shadow-hover hard-shadow-active transition-all cursor-pointer">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-8 border-[3px] border-zinc-800 rounded-xl hard-shadow flex gap-6 items-start">
              <div className="bg-primary-container p-4 rounded-xl border-2 border-zinc-800 shrink-0">
                <span className="material-symbols-outlined text-3xl">landscape</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-zinc-800 mb-2">
                  Backgrounds
                </h4>
                <p className="font-body-md text-secondary mb-4">
                  From simple shapes to fully detailed environments.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-1 bg-secondary-fixed-dim border-2 border-zinc-800 rounded-full font-label-bold text-xs">
                    $2 - Simple
                  </span>
                  <span className="px-4 py-1 bg-secondary-fixed-dim border-2 border-zinc-800 rounded-full font-label-bold text-xs">
                    $8 - Thematic
                  </span>
                  <span className="px-4 py-1 bg-secondary-fixed-dim border-2 border-zinc-800 rounded-full font-label-bold text-xs">
                    $15 - Full Scene
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-8 border-[3px] border-zinc-800 rounded-xl hard-shadow flex gap-6 items-start">
              <div className="bg-primary-container p-4 rounded-xl border-2 border-zinc-800 shrink-0">
                <span className="material-symbols-outlined text-3xl">group</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md text-zinc-800 mb-2">
                  Extra Characters
                </h4>
                <p className="font-body-md text-secondary mb-4">
                  Add more friends or foes to your custom illustration.
                </p>
                <div className="inline-block px-6 py-2 bg-primary-fixed border-2 border-zinc-800 rounded-lg font-headline-md">
                  +60% Base Price
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.5}>
        <section className="mt-20 p-10 bg-white border-[3px] border-zinc-800 rounded-xl hard-shadow">
          <h3 className="font-headline-md text-headline-md text-zinc-800 mb-6">
            Commission Terms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-label-bold text-primary mb-2">TAT</div>
              <p className="text-zinc-600 font-body-md">
                2-4 weeks depending on complexity.
              </p>
            </div>
            <div>
              <div className="font-label-bold text-primary mb-2">REVISIONS</div>
              <p className="text-zinc-600 font-body-md">
                2 free major revisions at sketch phase.
              </p>
            </div>
            <div>
              <div className="font-label-bold text-primary mb-2">PAYMENT</div>
              <p className="text-zinc-600 font-body-md">
                Full payment upfront via PayPal or Ko-fi.
              </p>
            </div>
            <div>
              <div className="font-label-bold text-primary mb-2">USAGE</div>
              <p className="text-zinc-600 font-body-md">
                Personal use only. Commercial x2 price.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
