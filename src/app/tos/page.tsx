import FadeIn from "@/components/FadeIn";

export default function TOS() {
  return (
    <div className="max-w-container-max mx-auto px-8 py-16 w-full flex-grow space-y-24">
      <FadeIn>
        <section className="text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-secondary-container text-on-secondary-container border-2 border-zinc-800 rounded-full font-label-bold mb-4">
            Working with Tabitha
          </div>
          <h1 className="font-headline-xl text-headline-xl text-zinc-800">
            Terms of Service &amp; Contact
          </h1>
          <p className="font-body-lg text-body-lg text-zinc-600 max-w-2xl mx-auto">
            Everything you need to know about starting a project together. I keep
            things simple, fun, and fair for everyone!
          </p>
        </section>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <div className="lg:col-span-7 space-y-8">
          <FadeIn delay={0.1} className="bg-white border-4 border-zinc-800 p-8 rounded-xl brutal-shadow">
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                gavel
              </span>
              <h2 className="font-headline-lg text-headline-lg">General Terms</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-surface-container-low border-2 border-zinc-800 rounded-lg flex gap-4 items-start">
                <span className="material-symbols-outlined text-error">block</span>
                <div>
                  <h3 className="font-label-bold text-zinc-800">1. No AI/NFT</h3>
                  <p className="text-sm text-zinc-600 mt-1 italic">
                    I do not work on projects involving AI generation or NFT
                    minting.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low border-2 border-zinc-800 rounded-lg flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">image</span>
                <div>
                  <h3 className="font-label-bold text-zinc-800">
                    2. Refs Required
                  </h3>
                  <p className="text-sm text-zinc-600 mt-1 italic">
                    Clear visual references or detailed descriptions are
                    required before starting.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low border-2 border-zinc-800 rounded-lg flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">payments</span>
                <div>
                  <h3 className="font-label-bold text-zinc-800">3. Payment</h3>
                  <p className="text-sm text-zinc-600 mt-1 italic">
                    Payment is required after the initial sketch approval.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low border-2 border-zinc-800 rounded-lg flex gap-4 items-start">
                <span className="material-symbols-outlined text-error">cancel</span>
                <div>
                  <h3 className="font-label-bold text-zinc-800">4. No Refunds</h3>
                  <p className="text-sm text-zinc-600 mt-1 italic">
                    No refunds will be issued unless I am unable to finish the commission.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low border-2 border-zinc-800 rounded-lg flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">schedule</span>
                <div>
                  <h3 className="font-label-bold text-zinc-800">
                    5. 2-21 Day Window
                  </h3>
                  <p className="text-sm text-zinc-600 mt-1 italic">
                    Turnaround time varies between 2 to 21 days based on
                    complexity.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low border-2 border-zinc-800 rounded-lg flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">copyright</span>
                <div>
                  <h3 className="font-label-bold text-zinc-800">
                    6. Credit Required
                  </h3>
                  <p className="text-sm text-zinc-600 mt-1 italic">
                    Please credit &apos;keep0ntabs&apos; when posting the artwork
                    online.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-surface-container-low border-2 border-zinc-800 rounded-lg flex gap-4 items-start col-span-1 md:col-span-2">
                <span className="material-symbols-outlined text-error">storefront</span>
                <div>
                  <h3 className="font-label-bold text-zinc-800">7. No Reselling</h3>
                  <p className="text-sm text-zinc-600 mt-1 italic">
                    No claiming or reselling the artwork. Artwork is for personal use only.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 space-y-8">
          <FadeIn delay={0.2} className="bg-primary-container border-4 border-zinc-800 p-8 rounded-xl brutal-shadow relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            <div className="flex items-center gap-4 mb-6">
              <span className="material-symbols-outlined text-4xl text-on-primary-container">
                wallet
              </span>
              <h2 className="font-headline-md text-headline-md text-on-primary-container">
                Payment Info
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white border-[3px] border-zinc-800 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-label-bold text-zinc-500">Method</span>
                  <span className="font-bold text-zinc-800 text-lg">PayPal</span>
                </div>
              </div>
              <div className="bg-white border-[3px] border-zinc-800 p-4 rounded-lg">
                <span className="font-label-bold text-zinc-500 block mb-1">
                  Email / USD Only
                </span>
                <span className="font-bold text-primary text-xl break-all">
                  thecooltabitha@gmail.com
                </span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-on-primary-container font-label-bold italic">
              <span className="material-symbols-outlined">info</span>
              Please include your username + commission type in the notes!
            </div>
          </FadeIn>



          <FadeIn delay={0.4} className="border-4 border-zinc-800 rounded-xl overflow-hidden brutal-shadow bg-zinc-200 aspect-square relative flex">
            <div className="w-full h-full flex-grow flex items-center justify-center bg-[#E5E7EB]">
              <span className="font-headline-md text-zinc-500 uppercase tracking-widest text-center px-4">
                TOS Illustration
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
