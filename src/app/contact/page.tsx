import FadeIn from "@/components/FadeIn";

export default function Contact() {
  return (
    <div className="max-w-container-max mx-auto px-8 py-16 w-full flex-grow">
      <FadeIn>
        <section className="mb-16 mt-8">
          <h1 className="font-headline-xl text-headline-xl mb-4">
            Let&apos;s Create <span className="text-primary">Something Wild</span>
          </h1>
          <p className="font-body-lg text-body-lg max-w-2xl">
            I&apos;m currently accepting new commissions! Whether it&apos;s a character
            portrait, a Twitch emote pack, or a full-scale illustration, I&apos;m here
            to bring your vision to life with a splash of color and a lot of
            heart.
          </p>
        </section>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        <FadeIn delay={0.1} className="lg:col-span-7 bg-white border-[3px] border-zinc-800 hard-shadow-lg p-8 rounded-none">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-4xl text-primary">
              mail
            </span>
            <h2 className="font-headline-lg text-headline-lg">
              Send a Direct Inquiry
            </h2>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold uppercase">
                  Name
                </label>
                <input
                  className="h-[56px] border-[3px] border-zinc-800 px-4 focus:bg-primary-fixed focus:outline-none focus:ring-0 transition-colors"
                  placeholder="Your creative name"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-bold text-label-bold uppercase">
                  Email
                </label>
                <input
                  className="h-[56px] border-[3px] border-zinc-800 px-4 focus:bg-primary-fixed focus:outline-none focus:ring-0 transition-colors"
                  placeholder="hello@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold uppercase">
                How can I help?
              </label>
              <textarea
                className="border-[3px] border-zinc-800 p-4 focus:bg-primary-fixed focus:outline-none focus:ring-0 transition-colors resize-none"
                placeholder="Tell me about your project, timeline, and any specific ideas you have in mind!"
                rows={6}
              ></textarea>
            </div>
            <button
              className="w-full md:w-auto px-10 py-4 bg-primary-container border-[3px] border-zinc-800 font-bold text-lg hard-shadow-md active-press transition-all flex items-center justify-center gap-2 cursor-pointer"
              type="button"
            >
              Shoot over the details
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </FadeIn>

        <div className="lg:col-span-5 flex flex-col gap-gutter">
          <FadeIn delay={0.2} className="bg-secondary-container border-[3px] border-zinc-800 hard-shadow-lg p-8 shrink-0">
            <h3 className="font-headline-md text-headline-md mb-6">
              Find Me Elsewhere
            </h3>
            <div className="space-y-4">
              <a
                className="flex items-center gap-4 p-4 bg-white border-[3px] border-zinc-800 hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                href="https://discord.gg/BsP7Buc3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                  diversity_3
                </span>
                <div className="flex flex-col">
                  <span className="font-label-bold text-xs uppercase text-zinc-500">
                    Discord
                  </span>
                  <span className="font-bold text-lg text-zinc-800">
                    Join Server
                  </span>
                </div>
              </a>
              <a
                className="flex items-center gap-4 p-4 bg-white border-[3px] border-zinc-800 hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                href="https://www.instagram.com/keep0ntabs?igsh=dGxubWFxMWZjYnN6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                  camera
                </span>
                <div className="flex flex-col">
                  <span className="font-label-bold text-xs uppercase text-zinc-500">
                    Instagram
                  </span>
                  <span className="font-bold text-lg text-zinc-800">
                    @keep0ntabs
                  </span>
                </div>
              </a>
              <a
                className="flex items-center gap-4 p-4 bg-white border-[3px] border-zinc-800 hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                href="https://www.tiktok.com/@keep0ntabs?_r=1&_t=ZS-95yPiJkVOi4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                  video_library
                </span>
                <div className="flex flex-col">
                  <span className="font-label-bold text-xs uppercase text-zinc-500">
                    TikTok
                  </span>
                  <span className="font-bold text-lg text-zinc-800">
                    @keep0ntabs
                  </span>
                </div>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-white border-[3px] border-zinc-800 hard-shadow-lg p-8 relative overflow-hidden shrink-0">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-[120px] rotate-12">
                payments
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined">wallet</span>
              Payment Info
            </h3>
            <div className="bg-primary-fixed p-6 border-[3px] border-zinc-800">
              <p className="font-label-bold text-xs uppercase mb-1">
                Method: PayPal • Currency: USD
              </p>
              <p className="font-headline-md text-zinc-900 break-all">
                thecooltabitha@gmail.com
              </p>
            </div>
            <p className="mt-4 text-sm text-on-surface-variant font-medium italic">
              * Payment required after sketch approval. Please include your username + commission type in the note.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex-grow border-[3px] border-zinc-800 hard-shadow-lg overflow-hidden min-h-[200px] h-full flex">
            <div className="w-full h-full min-h-[200px] flex-grow flex items-center justify-center bg-[#E5E7EB] text-zinc-500 font-bold uppercase tracking-widest text-sm">
              Contact Illustration
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.5}>
        <section className="mt-20 p-12 bg-zinc-800 text-white flex flex-col md:flex-row items-center justify-between gap-8 border-[3px] border-zinc-900 hard-shadow-lg">
          <div className="text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg mb-2">Got Questions?</h2>
            <p className="text-zinc-300 font-body-lg">
              Check out my Frequently Asked Questions before you send an inquiry!
            </p>
          </div>
          <button className="px-8 py-4 bg-white text-zinc-900 font-bold border-[3px] border-white hard-shadow-sm active-press hover:bg-primary-container transition-all cursor-pointer">
            Read the FAQ
          </button>
        </section>
      </FadeIn>
    </div>
  );
}
