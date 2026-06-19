import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { LeadForm } from "@/components/LeadForm";
import { Phone, MessageCircle, Mail, MapPin, Youtube, Instagram, Facebook } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Next-Gen ERP Solutions" },
      { name: "description", content: "Talk to our career advisors. Free demo, free counselling, fast response on WhatsApp." },
      { property: "og:title", content: "Contact Next-Gen ERP Solutions" },
      { property: "og:description", content: "Reach our team for SAP training & placement enquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero py-20">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="inline-block rounded-full bg-brand-dark px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">Contact</div>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">Let's talk about <span className="text-gradient-brand">your career</span></h1>
          <p className="mt-5 mx-auto max-w-3xl text-lg text-muted-foreground">Career advisors available 9am – 9pm IST. WhatsApp replies within minutes.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <Card icon={Phone} title="Call us" value="+91 90003 33859" href="tel:+919000333859" color="bg-brand text-white" />
          <Card icon={MessageCircle} title="WhatsApp" value="+91 90003 33859" href="https://wa.me/919000333859" color="bg-[#25D366] text-white" />
          <Card icon={Mail} title="Email" value="hello@nextgenerpsolutions.com" href="mailto:hello@nextgenerpsolutions.com" color="bg-brand-dark text-white" />
          <Card icon={MapPin} title="Google Business" value="View on Google" href="https://share.google/4ozjmIOp74J2H7OSs" color="bg-brand-green text-white" />
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Follow Us</div>
            <div className="mt-3 flex gap-3">
              <a aria-label="YouTube" href="https://www.youtube.com/@Next-GenERPSolutions" target="_blank" rel="noreferrer" className="rounded-full bg-secondary p-3 hover:bg-brand hover:text-white transition"><Youtube className="h-5 w-5" /></a>
              <a aria-label="Instagram" href="https://www.instagram.com/nextgenerpsolutions/" target="_blank" rel="noreferrer" className="rounded-full bg-secondary p-3 hover:bg-brand hover:text-white transition"><Instagram className="h-5 w-5" /></a>
              <a aria-label="Facebook" href="https://www.facebook.com/NextGenERPSolutions" target="_blank" rel="noreferrer" className="rounded-full bg-secondary p-3 hover:bg-brand hover:text-white transition"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Business Hours</div>
            <div className="mt-2 text-sm space-y-1">
              <div className="flex justify-between"><span>Mon – Sat</span><b>9:00 AM – 9:00 PM</b></div>
              <div className="flex justify-between"><span>Sunday</span><b>10:00 AM – 5:00 PM</b></div>
            </div>
          </div>
        </div>
        <LeadForm
          title="Send us a message"
          subtitle="We'll get back within 1 working hour."
          fields={[
            { name: "name", label: "Full Name", required: true },
            { name: "phone", label: "Phone", type: "tel", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "message", label: "Message", placeholder: "Tell us how we can help…" },
          ]}
          cta="Send Message"
        />
      </section>
    </SiteLayout>
  );
}

function Card({ icon: Icon, title, value, href, color }: { icon: any; title: string; value: string; href: string; color: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:scale-[1.02] transition">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}><Icon className="h-6 w-6" /></div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="font-extrabold">{value}</div>
      </div>
    </a>
  );
}
