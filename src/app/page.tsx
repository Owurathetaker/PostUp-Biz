// src/app/page.tsx
import Image from "next/image";
import type { ReactNode } from "react";
import WhatsAppLink from "@/components/WhatsAppLink";

const WHATSAPP_LINK =
  "https://wa.me/233208276651?text=Hi%20Postup%20Biz%20👋🏽%0AI%20want%20help%20getting%20my%20business%20online.%0AHere%20is%20my%20business%20page%20or%20location:";

const EMAIL = "broadbinbiz@gmail.com";

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-500 text-white shadow-sm">
        <span className="text-xs font-black tracking-tight">PU</span>
        <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-white/80 ring-2 ring-white/60" />
      </div>
      <span className="font-semibold tracking-tight">Postup Biz</span>
    </div>
  );
}

function Icon({
  name,
  className = "size-5",
}: {
  name:
    | "spark"
    | "whatsapp"
    | "map"
    | "search"
    | "shield"
    | "paint"
    | "phone"
    | "bolt"
    | "video";
  className?: string;
}) {
  const common = "fill-none stroke-current stroke-2";
  switch (name) {
    case "spark":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={common}
            d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2z"
          />
          <path
            className={common}
            d="M5 14l.7 3L9 18l-3.3 1-0.7 3-0.7-3L1 18l3.3-1 .7-3z"
          />
        </svg>
      );
    case "whatsapp":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={common}
            d="M20 11.6a7.9 7.9 0 0 1-11.8 6.9L4 19.7l1.2-4.0A7.9 7.9 0 1 1 20 11.6z"
          />
          <path
            className={common}
            d="M9.3 9.3c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.3l.7 1.7c.1.2.1.4 0 .6l-.4.5c-.1.1-.1.3 0 .5.4.8 1.2 1.6 2 2 .2.1.4.1.5 0l.6-.4c.2-.1.4-.1.6 0l1.6.7c.2.1.3.3.3.5v.5c0 .3 0 .5-.5.7-.6.3-1.6.5-3.1-.2-1.5-.7-3.3-2.5-4-4-.6-1.5-.4-2.5-.1-3.1z"
          />
        </svg>
      );
    case "map":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={common}
            d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10z"
          />
          <path
            className={common}
            d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
          />
        </svg>
      );
    case "search":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={common}
            d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
          />
          <path className={common} d="M16.5 16.5 21 21" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={common}
            d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z"
          />
          <path className={common} d="M9 12l2 2 4-4" />
        </svg>
      );
    case "paint":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={common}
            d="M12 2a10 10 0 0 0-2 19.8c.7.1 1.2-.5 1.2-1.1v-1.1c0-.6.5-1.1 1.1-1.1h1.7c2.5 0 4.6-2.1 4.6-4.6A8.8 8.8 0 0 0 12 2z"
          />
          <path className={common} d="M7.5 10.5h0" />
          <path className={common} d="M10 8.5h0" />
          <path className={common} d="M14 8.5h0" />
          <path className={common} d="M16.5 10.5h0" />
        </svg>
      );
    case "phone":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={common}
            d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          />
          <path className={common} d="M9 5h6" />
          <path className={common} d="M12 19h0" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path className={common} d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      );
    case "video":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            className={common}
            d="M4 7h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"
          />
          <path className={common} d="M17 10l5-3v10l-5-3v-4z" />
        </svg>
      );
  }
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Card({ title, desc, icon }: { title: string; desc: string; icon: ReactNode }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-50 text-slate-900 ring-1 ring-slate-200">
          {icon}
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="mt-1 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PackageCard({
  title,
  subtitle,
  icon,
  bullets,
  highlight = false,
}: {
  title: string;
  subtitle: string;
  icon: ReactNode;
  bullets: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border bg-white p-6 shadow-sm",
        highlight ? "border-slate-900/20 ring-1 ring-slate-900/10" : "border-slate-200",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-50 text-slate-900 ring-1 ring-slate-200">
          {icon}
        </div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-slate-900/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="rounded-full px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </a>
  );
}

function HeroVisual() {
  const src = "/hero-mock.png";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-slate-600">What customers see</p>
        <span className="inline-flex items-center gap-2 text-xs text-slate-600">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          Clear + fast
        </span>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="relative aspect-[16/11]">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
          <div className="absolute inset-0 p-5">
            <div className="rounded-xl border border-slate-200 bg-white/80 p-4">
              <div className="flex items-center justify-between">
                <div className="h-3 w-24 rounded bg-slate-200" />
                <div className="h-6 w-24 rounded-full bg-slate-900/90" />
              </div>
              <div className="mt-4 h-4 w-2/3 rounded bg-slate-200" />
              <div className="mt-2 h-3 w-1/2 rounded bg-slate-200" />

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="h-3 w-24 rounded bg-slate-200" />
                  <div className="mt-2 h-8 w-full rounded bg-slate-100" />
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="h-3 w-24 rounded bg-slate-200" />
                  <div className="mt-2 h-8 w-full rounded bg-slate-100" />
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <div className="h-10 flex-1 rounded-xl bg-slate-900/90" />
                <div className="h-10 w-12 rounded-xl bg-slate-100" />
              </div>
            </div>
          </div>

          <Image
            src={src}
            alt="Example business page preview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-600">
        A simple page that explains your offer clearly — so customers can decide and take action faster.
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <LogoMark />

          <nav className="flex items-center gap-1">
            <NavButton href="#top">Overview</NavButton>
            <NavButton href="#services">Services</NavButton>
            <NavButton href="/work">Work</NavButton>
            <NavButton href="#packages">Packages</NavButton>

            {/* ✅ tracked WhatsApp CTA */}
            <WhatsAppLink
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  eventLabel="header_get_started"
  className="ml-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
>
  Get started
</WhatsAppLink>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-100 via-emerald-100 to-sky-100 blur-3xl" />
          <div className="absolute -bottom-40 right-[-10rem] h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge>Remote-friendly</Badge>
                <Badge>Mobile-first</Badge>
                <Badge>Built for clarity</Badge>
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
  We help businesses in Ghana and beyond attract and convert attention into customers.
</h1>

              <p className="mt-4 text-slate-700">
  We help businesses turn their online presence into a growth engine -through clarity, search visisbility, and strategic promotion. 
</p>

              <p className="mt-3 text-sm text-slate-600">
                Start with a simple setup. When you’re ready, we can add SEO and growth tools to help people find you on Google.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/work"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:bg-slate-50"
                >
                  View our mockups
                </a>

                {/* ✅ tracked WhatsApp CTA */}
                <WhatsAppLink
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  eventLabel="header_get_started"
  className="ml-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
>
  Get started
</WhatsAppLink>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Icon name="paint" className="size-4" />
                    <p className="font-semibold">Mockup first</p>
                  </div>
                  <p className="mt-1 text-slate-600">See it before build</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Icon name="map" className="size-4" />
                    <p className="font-semibold">Clear info</p>
                  </div>
                  <p className="mt-1 text-slate-600">Location + hours</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Icon name="search" className="size-4" />
                    <p className="font-semibold">Google-ready</p>
                  </div>
                  <p className="mt-1 text-slate-600">SEO foundation</p>
                </div>
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Ghana + global anchor (SEO + trust) */}
<section className="border-t border-slate-200 bg-slate-50">
  <div className="mx-auto max-w-6xl px-4 py-10">
    <h2 className="text-xl font-semibold text-slate-900">
      Based in Ghana. Serving businesses globally.
    </h2>
    <p className="mt-3 max-w-3xl text-sm text-slate-700">
      PostUp Biz is a Ghana-based digital studio helping restaurants, boutiques, service providers, and growing brands
      build simple, high-converting online storefronts. Whether you’re in Accra, Kumasi, London, or New York — we build
      with clarity, speed, and real business results in mind.
    </p>
  </div>
</section>

      {/* Services */}
      <section id="services" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Services</h2>
              <p className="mt-2 text-slate-600">
                Practical online presence that makes your business easier to understand, trust, and buy from.
              </p>
            </div>
            <Badge>Simple, not complicated</Badge>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="Website setup (mobile-first)"
              desc="A clean one-page site or mini-site that shows your offer clearly — with strong calls to action."
              icon={<Icon name="spark" className="size-5 text-slate-900" />}
            />
            <Card
              title="Copy + branding cleanup"
              desc="We refine your wording, layout, and structure so customers understand you fast."
              icon={<Icon name="paint" className="size-5 text-slate-900" />}
            />
            <Card
              title="Contact + directions"
              desc="WhatsApp, calls, social links, and map/location — so customers can reach you easily."
              icon={<Icon name="map" className="size-5 text-slate-900" />}
            />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Card
              title="Google Business Profile setup"
              desc="We help you show up properly on Google Maps and Search with the right info."
              icon={<Icon name="shield" className="size-5 text-slate-900" />}
            />
            <Card
              title="SEO foundation (Tier 2)"
              desc="On-page SEO + indexing setup so your site can rank over time for local searches."
              icon={<Icon name="search" className="size-5 text-slate-900" />}
            />
            <Card
              title="AI video ads (Tier 3)"
              desc="Short promo videos for Reels/TikTok/YouTube Shorts — scripted and edited fast."
              icon={<Icon name="video" className="size-5 text-slate-900" />}
            />
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Most businesses don’t need expensive systems. They need clarity, trust, and an easy way for customers to take the next step.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Packages</h2>
              <p className="mt-2 text-slate-600">
                Choose the level you need now — you can always upgrade later. We customize to your business and style.
              </p>
            </div>
            <Badge>No prices on the site</Badge>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <PackageCard
              title="Tier 1 — Website Setup"
              subtitle="For businesses that want a clean, professional online presence fast."
              icon={<Icon name="bolt" className="size-5 text-slate-900" />}
              bullets={[
                "Mobile-first landing page or mini-site",
                "Your products/services, delivery info, hours, location",
                "Buttons to contact (WhatsApp/call/socials)",
                "Basic copy cleanup + layout polish",
                "Launch support + quick handover",
              ]}
            />

            <PackageCard
              title="Tier 2 — Website + SEO"
              subtitle="For businesses that want to show up on Google and get consistent discovery."
              icon={<Icon name="search" className="size-5 text-slate-900" />}
              highlight
              bullets={[
                "Everything in Tier 1",
                "Google Business Profile optimization",
                "Search Console + indexing setup",
                "On-page SEO (titles, headings, meta, structure)",
                "Local SEO targeting (city/area keywords)",
              ]}
            />

            <PackageCard
              title="Tier 3 — AI Ads + Growth"
              subtitle="For businesses ready to promote offers with short video content."
              icon={<Icon name="video" className="size-5 text-slate-900" />}
              bullets={[
                "Short promo videos for Reels/TikTok/Shorts",
                "AI-assisted scripts + hooks + captions",
                "Multiple variations for testing offers",
                "Brand-safe visuals + clean editing",
                "Optional ad setup guidance (on request)",
              ]}
            />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="font-semibold">Custom services (optional)</p>
            <p className="mt-2 text-sm text-slate-600">
              Need something specific? We can tailor a package for your business.
            </p>

            <div className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              {[
                "Menu pages for restaurants + location/delivery",
                "Product catalog pages (sizes, prices, availability)",
                "Booking/contact pages for service businesses",
                "Multiple pages (About, Services, FAQs, Reviews)",
                "Photography / content direction (what to shoot)",
                "Ongoing updates & maintenance (monthly option)",
              ].map((item) => (
                <div key={item} className="flex gap-2">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-slate-900/70" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* ✅ tracked WhatsApp CTA */}
           <WhatsAppLink
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  eventLabel="header_get_started"
  className="ml-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
>
  Get started
</WhatsAppLink>

            <a
              href="#contact"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:bg-slate-50"
            >
              Email option below
            </a>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">Work examples</h2>
              <p className="mt-2 text-slate-600">
                We keep the experience simple, but we customize the look and structure to match your brand.
              </p>
            </div>
            <a
              href="/work"
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50"
            >
              Open mockups page
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-medium text-slate-500">Restaurants</p>
              <p className="mt-2 font-semibold">Menu + quick ordering</p>
              <p className="mt-2 text-sm text-slate-600">
                One clear menu page with prices, location, and a strong CTA.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-medium text-slate-500">Shops & boutiques</p>
              <p className="mt-2 font-semibold">Catalog + fast contact</p>
              <p className="mt-2 text-sm text-slate-600">
                A catalog page that shows what’s available and how customers can reach you quickly.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-medium text-slate-500">Service businesses</p>
              <p className="mt-2 font-semibold">Simple booking/contact</p>
              <p className="mt-2 text-sm text-slate-600">
                Clear services, proof, and a clean way to inquire or book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="process" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">How it works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="1) Share your business"
              desc="Send your Instagram/TikTok, WhatsApp, or just your location and offerings."
              icon={<Icon name="spark" className="size-5 text-slate-900" />}
            />
            <Card
              title="2) We design a mockup first"
              desc="You approve the look and structure before anything goes live."
              icon={<Icon name="paint" className="size-5 text-slate-900" />}
            />
            <Card
              title="3) We build, launch, and polish"
              desc="We publish the site and refine details so it’s clean, fast, and clear."
              icon={<Icon name="shield" className="size-5 text-slate-900" />}
            />
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Start with Tier 1. Upgrade to SEO (Tier 2) or content ads (Tier 3) only when it makes sense for your business.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <LogoMark />
              <p className="mt-2">
                Building simple, focused digital storefronts that create clarity — for brands, shops, and service businesses.
              </p>
              <p className="mt-2">Remote-friendly. Fast turnaround. Built to match your brand.</p>
              <p className="mt-3 text-xs text-slate-500">Practical solutions, not complicated systems.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
              <p className="font-semibold text-slate-900">Contact</p>
              <p className="mt-2">Email: {EMAIL}</p>

              {/* ✅ tracked WhatsApp CTA */}
             <WhatsAppLink
  href={WHATSAPP_LINK}
  target="_blank"
  rel="noreferrer"
  eventLabel="header_get_started"
  className="ml-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
>
  Get started
</WhatsAppLink>

              <p className="mt-3 text-xs text-slate-500">
                Tip: Send your business page link + location + what you sell. We’ll reply with a quick direction + next steps.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Postup Biz</p>
            <p>Website setup • SEO foundation • AI video ads</p>
          </div>
        </div>
      </footer>
    </main>
  );
}