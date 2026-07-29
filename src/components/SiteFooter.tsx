import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Youtube, Instagram, Facebook, MapPin, Phone, MessageCircle } from "lucide-react";
import { GOOGLE_MAP_URL } from "@/lib/schema";
import { COURSES } from "@/lib/courses";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="mt-20 bg-brand-dark text-white/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <div className="rounded-xl bg-white p-3 inline-block">
            <Logo className="h-12 w-auto" loading="lazy" />
          </div>
          <p className="text-sm text-white/70">
            SAP training, certification guidance and placement support for freshers, experienced professionals and career-gap candidates.
          </p>
          <div className="flex gap-3">
            <a href="https://www.youtube.com/@Next-GenERPSolutions" target="_blank" rel="noreferrer" aria-label="YouTube" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Youtube className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/nextgenerpsolutions/" target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.facebook.com/NextGenERPSolutions" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><Facebook className="h-4 w-4" /></a>
            <a href={GOOGLE_MAP_URL} target="_blank" rel="noreferrer" aria-label="Google Business" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><MapPin className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link to="/placements" className="hover:text-white">Placements</Link></li>
            <li><Link to="/career-journeys" className="hover:text-white">Career Journeys</Link></li>
            <li><Link to="/success-stories" className="hover:text-white">Success Stories</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Top Courses</h2>
          <ul className="space-y-2 text-sm">
            {COURSES.slice(0, 6).map((course) => (
              <li key={course.slug}>
                <Link to="/courses/$slug" params={{ slug: course.slug }} className="hover:text-white">
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-teal" /> <a href="tel:+919000333859">+91 90003 33859</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-brand-green" /> <a href="https://wa.me/919000333859" target="_blank" rel="noreferrer">WhatsApp Chat</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-brand-teal mt-0.5" /> Hyderabad, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Next-Gen ERP Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
            <a href="/sitemap.xml" className="hover:text-white">XML Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
