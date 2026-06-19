import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ComicPanel({
  chapter,
  title,
  narration,
  bubble,
  children,
  reverse = false,
}: {
  chapter: string;
  title: string;
  narration?: string;
  bubble?: string;
  children?: ReactNode;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
      <motion.div
        initial={{ opacity: 0, x: reverse ? 60 : -60, rotate: reverse ? 2 : -2 }}
        animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={reverse ? "md:order-2" : ""}
      >
        <div className="comic-panel aspect-[4/3] p-6 flex items-center justify-center">
          {children}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="space-y-4"
      >
        <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
          {chapter}
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold text-foreground">{title}</h3>
        {narration && <div className="narration-box">{narration}</div>}
        {bubble && <div className="speech-bubble inline-block max-w-md">"{bubble}"</div>}
      </motion.div>
    </div>
  );
}
