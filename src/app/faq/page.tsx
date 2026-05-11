"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { useState } from "react";
import { usePopSounds } from "@/hooks/usePopSounds";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    question: "How do I commission you?",
    answer:
      "Head over to the Contact page and fill in the inquiry form! Include your project idea, preferred style, and any references you have. I'll get back to you within 1-3 days.",
    icon: "chat_bubble",
  },
  {
    question: "How long does a commission take?",
    answer:
      "Turnaround time depends on the complexity. Simple sketches take about 2-5 days, clean linearts about 5-10 days, and full renders can take 10-21 days. Rush orders are available for an extra fee!",
    icon: "schedule",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "I accept payment through PayPal in USD. Payment is required after you approve the initial sketch. Please include your username and commission type in the PayPal note!",
    icon: "payments",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refunds are only available if I am unable to complete the commission. Once work has begun past the sketch approval stage, refunds cannot be issued. Please review my Terms of Service for full details.",
    icon: "currency_exchange",
  },
  {
    question: "Do you draw NSFW content?",
    answer:
      "No, I do not accept NSFW commissions. I'm happy to draw suggestive content, but anything explicit is off the table. Check out the 'Nope' section on my homepage for a full list of things I won't draw.",
    icon: "block",
  },
  {
    question: "Can I use the art commercially?",
    answer:
      "All commissions come with personal use rights. If you need commercial rights (for merch, branding, etc.), please let me know upfront so we can discuss pricing. Reselling the artwork as-is is never allowed.",
    icon: "storefront",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "You get up to 2 rounds of revisions at the sketch stage for free. After the sketch is approved and I move to lineart/coloring, major changes may incur additional fees. Small tweaks (color shifts, minor adjustments) are always free!",
    icon: "edit_note",
  },
  {
    question: "Do you draw real people?",
    answer:
      "I can draw stylized portraits inspired by real people (like a gift portrait), but I won't draw anything disrespectful, inappropriate, or without the person's consent.",
    icon: "face",
  },
  {
    question: "Can I credit you / tag you?",
    answer:
      "Absolutely! I'd love that. You can tag me as @keep0ntabs on Instagram or TikTok. Credit is always appreciated and actually required when posting the artwork publicly.",
    icon: "alternate_email",
  },
  {
    question: "What if my character design is really complex?",
    answer:
      "Complex designs (heavy armor, lots of accessories, intricate patterns) may have an additional complexity fee. I'll always let you know before we start if your design falls into that category — no surprises!",
    icon: "auto_awesome",
  },
];

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const { playRandomPop } = usePopSounds();

  return (
    <FadeIn delay={0.05 * index}>
      <div className="bg-white border-[3px] border-zinc-800 hard-shadow overflow-hidden">
        <button
          onClick={() => {
            playRandomPop();
            setIsOpen(!isOpen);
          }}
          className="w-full flex items-center gap-4 p-6 text-left cursor-pointer hover:bg-zinc-50 transition-colors"
        >
          <div className="w-10 h-10 bg-primary-container border-[2px] border-zinc-800 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-zinc-800 text-lg">{item.icon}</span>
          </div>
          <span className="font-headline-md text-zinc-800 flex-grow">{item.question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="material-symbols-outlined text-zinc-500 text-2xl shrink-0"
          >
            expand_more
          </motion.span>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-0 ml-14">
                <p className="font-body-md text-zinc-600 leading-relaxed">{item.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
}

export default function FAQ() {
  const { playRandomPop } = usePopSounds();

  return (
    <div className="max-w-container-max mx-auto px-8 py-16 w-full flex-grow">
      <FadeIn>
        <section className="text-center space-y-6 mb-16 mt-8">
          <div className="inline-block px-4 py-2 bg-primary-container text-on-primary-container border-2 border-zinc-800 rounded-full font-label-bold mb-4">
            Got Questions?
          </div>
          <h1 className="font-headline-xl text-headline-xl text-zinc-800">
            Frequently Asked Questions
          </h1>
          <p className="font-body-lg text-body-lg text-zinc-600 max-w-2xl mx-auto">
            Everything you might want to know before commissioning me.
            Can&apos;t find your answer? Feel free to reach out directly!
          </p>
        </section>
      </FadeIn>

      <div className="max-w-3xl mx-auto space-y-4 mb-20">
        {FAQ_ITEMS.map((item, index) => (
          <FAQItem key={index} item={item} index={index} />
        ))}
      </div>

      <FadeIn delay={0.3}>
        <section className="max-w-3xl mx-auto p-10 bg-secondary-container border-[4px] border-zinc-800 hard-shadow flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-zinc-800 mb-2">
              Still have questions?
            </h2>
            <p className="font-body-md text-zinc-600">
              Don&apos;t be shy — drop me a message and I&apos;ll get back to you ASAP!
            </p>
          </div>
          <Link href="/contact" onClick={playRandomPop}>
            <button className="bg-white text-zinc-800 font-headline-md px-8 py-4 border-[3px] border-zinc-800 hard-shadow hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all whitespace-nowrap cursor-pointer">
              Contact Me
            </button>
          </Link>
        </section>
      </FadeIn>
    </div>
  );
}
