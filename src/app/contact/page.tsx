"use client";

import FadeIn from "@/components/FadeIn";
import { useState } from "react";
import Link from "next/link";
import { usePopSounds } from "@/hooks/usePopSounds";

export default function Contact() {
  const [agreedToTos, setAgreedToTos] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { playRandomPop } = usePopSounds();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    playRandomPop();
    
    const formData = new FormData(e.currentTarget);
    const accessKey = "46322a54-ca79-49ee-9f7b-068d71505ad7";
    
    const object = Object.fromEntries(formData);
    object.access_key = accessKey;
    object.subject = `New Commission Inquiry from ${object.name}`;
    
    // Convert to JSON
    const json = JSON.stringify(object);

    try {
      setStatus("submitting");
      const endpoint = "https://" + "api.web3forms.com" + "/submit";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        console.error("Error submitting form", data);
      }
    } catch (err) {
      setStatus("error");
      console.error("Error submitting form", err);
    }
  };

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
          <div className="relative">
            {!agreedToTos && (
              <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center border-[3px] border-zinc-800 border-dashed rounded-lg">
                <span className="material-symbols-outlined text-5xl mb-4 text-zinc-400">lock</span>
                <h3 className="font-headline-md text-zinc-800 mb-2">Form Locked</h3>
                <p className="font-body-md text-zinc-600 mb-6 max-w-sm">
                  Please read the <Link href="/tos" className="text-primary underline font-bold hover:text-zinc-800">Terms of Service</Link> before sending a commission inquiry.
                </p>
                
                <label className="flex items-center gap-3 cursor-pointer group bg-white px-6 py-4 border-[3px] border-zinc-800 hard-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active-press">
                  <div className={`w-6 h-6 border-[3px] border-zinc-800 rounded flex items-center justify-center transition-colors ${agreedToTos ? 'bg-primary' : 'bg-white'}`}>
                     {agreedToTos && <span className="material-symbols-outlined text-white text-sm font-bold">check</span>}
                  </div>
                  <input type="checkbox" className="hidden" checked={agreedToTos} onChange={(e) => { playRandomPop(); setAgreedToTos(e.target.checked); }} />
                  <span className="font-label-bold text-zinc-800 select-none text-left">I agree to the Terms of Service</span>
                </label>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-300 ${!agreedToTos ? 'opacity-30 pointer-events-none grayscale' : ''}`}>
              
              {/* Spam Protection Honeypot */}
              <div className="hidden absolute w-0 h-0 overflow-hidden">
                <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-label-bold text-label-bold uppercase">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="h-[56px] border-[3px] border-zinc-800 px-4 focus:bg-primary-fixed focus:outline-none focus:ring-0 transition-colors bg-white disabled:bg-zinc-100 disabled:text-zinc-500"
                    placeholder="Your creative name"
                    type="text"
                    disabled={status === "submitting" || status === "success"}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-label-bold text-label-bold uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    className="h-[56px] border-[3px] border-zinc-800 px-4 focus:bg-primary-fixed focus:outline-none focus:ring-0 transition-colors bg-white disabled:bg-zinc-100 disabled:text-zinc-500"
                    placeholder="hello@example.com"
                    type="email"
                    disabled={status === "submitting" || status === "success"}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-label-bold text-label-bold uppercase">
                  How can I help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="border-[3px] border-zinc-800 p-4 focus:bg-primary-fixed focus:outline-none focus:ring-0 transition-colors resize-none bg-white disabled:bg-zinc-100 disabled:text-zinc-500"
                  placeholder="Tell me about your project, timeline, and any specific ideas you have in mind!"
                  rows={6}
                  disabled={status === "submitting" || status === "success"}
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-4 bg-green-100 border-[3px] border-zinc-800 text-green-800 font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  Inquiry sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-100 border-[3px] border-zinc-800 text-red-800 font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">error</span>
                  Oops! Something went wrong. Please try again later.
                </div>
              )}

              <button
                className="w-full md:w-auto px-10 py-4 bg-primary-container border-[3px] border-zinc-800 font-bold text-lg hard-shadow-md active-press transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={!agreedToTos || status === "submitting" || status === "success"}
              >
                {status === "submitting" ? (
                  <>
                    Sending...
                    <span className="material-symbols-outlined animate-spin">sync</span>
                  </>
                ) : status === "success" ? (
                  <>
                    Sent!
                    <span className="material-symbols-outlined">check</span>
                  </>
                ) : (
                  <>
                    Shoot over the details
                    <span className="material-symbols-outlined">send</span>
                  </>
                )}
              </button>
            </form>
          </div>
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
                onClick={playRandomPop}
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
                onClick={playRandomPop}
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
                onClick={playRandomPop}
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
          <Link href="/faq">
            <button className="px-8 py-4 bg-white text-zinc-900 font-bold border-[3px] border-white hard-shadow-sm active-press hover:bg-primary-container transition-all cursor-pointer" onClick={playRandomPop}>
              Read the FAQ
            </button>
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}
