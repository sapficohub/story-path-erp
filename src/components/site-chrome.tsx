import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="10" fill="url(#lg)" />
        <polyline
          points="8,28 16,22 22,25 32,12"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="8" cy="28" r="2" fill="#19C7D8" />
        <circle cx="16" cy="22" r="2" fill="#1686F5" />
        <circle cx="22" cy="25" r="2" fill="#19C7D8" />
        <circle cx="32" cy="12" r="2.5" fill="#09B83E" />
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#0B1C9C" />
            <stop offset="100%" stopColor="#1686F5" />
          </linearGradient>
        </defs>
      </svg>
      <div className="leading-tight">
        <div className="font-display font-extrabold text-base text-foreground">Next-Gen</div>
        <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">ERP Solutions</div>
      </div>
    </Link>
  );
}

export function NavBar({ dark = false }: { dark?: boolean }) {
  const linkBase = dark ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground";
  return (
    <header className={`fixed top-0 inset-x-0 z-50 backdrop-blur-xl ${dark ? "bg-[#071126]/60 border-b border-white/10" : "bg-background/70 border-b border-border"}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={linkBase}>Home</Link>
          <Link to="/journey/fresher" className={linkBase}>Fresher</Link>
          <Link to="/journey/experienced" className={linkBase}>Professional</Link>
          <Link to="/journey/career-gap" className={linkBase}>Career Gap</Link>
        </nav>
        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          href="#contact"
          className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-glow-blue"
        >
          Book Free Demo
        </motion.a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#071126] text-white/80 py-16 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-10">
        <div>
          <Logo className="[&_div]:text-white [&_.text-muted-foreground]:text-white/60" />
          <p className="mt-4 text-sm text-white/60">Premium SAP training and placement support for ambitious learners.</p>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Journeys</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/journey/fresher" className="hover:text-white">For Freshers</Link></li>
            <li><Link to="/journey/experienced" className="hover:text-white">For Professionals</Link></li>
            <li><Link to="/journey/career-gap" className="hover:text-white">After Career Gap</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>hello@nextgenerp.com</li>
            <li>+91 98765 43210</li>
            <li>Hyderabad · India</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Get Started</h4>
          <a href="#" className="inline-flex rounded-full bg-growth px-5 py-3 text-sm font-semibold text-white shadow-glow-green">WhatsApp Us</a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-white/10 text-xs text-white/50 flex justify-between">
        <span>© {new Date().getFullYear()} Next-Gen ERP Solutions</span>
        <span>Built for transformation.</span>
      </div>
    </footer>
  );
}
