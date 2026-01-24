// src/app/page.tsx
import Link from "next/link";

const WHATSAPP_DISPLAY = "020 827 6651";
const WHATSAPP_LINK =
  "https://wa.me/233208276651?text=Hi%20Postup%20Biz%20👋🏽%0AI%20want%20help%20getting%20my%20business%20online.%0AHere%20is%20my%20business%20page%20or%20location:";

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
  name: "spark" | "whatsapp" | "map" | "search" | "shield" | "paint";
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
          <path className={common} d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      );
    case "search":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path className={common} d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
          <path className={common} d="M16.5 16.5 21 21" />
        </svg>
      );
    case "shield":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path className={common} d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
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
  }
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
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

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <LogoMark />

          <nav className="flex items-center gap-4 text-sm">
            {/* Keep the current homepage flow */}
            <a href="#work" className="hover:underline">
              Overview
            </a>

            <a href="#process" className="hover:underline">
              How it works
            </a>

            <a href="#pricing" className="hover:underline">
              Pricing
            </a>

            {/* Work (mockups) should go to the portfolio page */}
            <Link href="/work" className="hover:underline">
              Work
            </Link>

            <a
              className="rounded-full bg-slate-900 px-4 py-2 text-white shadow-sm transition hover:bg-slate-800"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
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
                <Badge>WhatsApp-first</Badge>
                <Badge>Start simple</Badge>
              </div>

              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                We help businesses get online — simply.
              </h1>

              <p className="mt-4 text-slate-700">
                Clear pages that show your prices, location, and how customers can order or contact you
                easily — without confusion.
              </p>

              <p className="mt-3 text-sm text-slate-600">
                Start small. Build more only when it makes sense.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* Work (mockups) should route to /work */}
                <Link
                  href="/work"
                  className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:bg-slate-50"
                >
                  View our mockups
                </Link>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
                >
                  Chat on WhatsApp
                </a>

                {/* The current homepage section still exists — give it its own button */}
                <a
                  href="#work"
                  className="rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  Quick overview
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Icon name="whatsapp" className="size-4" />
                    <p className="font-semibold">Easy ordering</p>
                  </div>
                  <p className="mt-1 text-slate-600">WhatsApp + Call</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Icon name="map" className="size-4" />
                    <p className="font-semibold">Directions</p>
                  </div>
                  <p className="mt-1 text-slate-600">Map + location</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur">
                  <div className="flex items-center gap-2 text-slate-800">
                    <Icon name="search" className="size-4" />
                    <p className="font-semibold">Discovery</p>
                  </div>
                  <p className="mt-1 text-slate-600">Found online</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-slate-600">Example of what we build</p>
                <span className="inline-flex items-center gap-2 text-xs text-slate-600">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  Simple & clear
                </span>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Business page</p>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                    WhatsApp ordering
                  </span>
                </div>

                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <Icon name="paint" className="mt-0.5 size-5 text-slate-800" />
                    <span>Menu or product list with clear prices</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="whatsapp" className="mt-0.5 size-5 text-slate-800" />
                    <span>One tap to WhatsApp (order / ask / book)</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="map" className="mt-0.5 size-5 text-slate-800" />
                    <span>Location + directions so customers don’t struggle</span>
                  </li>
                  <li className="flex gap-3">
                    <Icon name="search" className="mt-0.5 size-5 text-slate-800" />
                    <span>Helps people find you online over time</span>
                  </li>
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge>Restaurants</Badge>
                  <Badge>Boutiques</Badge>
                  <Badge>Thrift sellers</Badge>
                  <Badge>Services</Badge>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-600">
                We design a mockup first so you can see it before anything is built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold">What we do</h2>
              <p className="mt-2 text-slate-600">
                Practical online presence that makes your business easier to understand and easier to buy from.
              </p>
            </div>
            <Badge>Simple, not complicated</Badge>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="Clear business page"
              desc="A clean page with your prices, offer, hours, and contact — in one place."
              icon={<Icon name="spark" className="size-5 text-slate-900" />}
            />
            <Card
              title="WhatsApp ordering"
              desc="Customers tap to order or ask questions quickly — no stress."
              icon={<Icon name="whatsapp" className="size-5 text-slate-900" />}
            />
            <Card
              title="Easier to find online"
              desc="We set it up so people can discover you beyond social media over time."
              icon={<Icon name="search" className="size-5 text-slate-900" />}
            />
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Most businesses don’t need expensive systems. They need clarity.
          </p>
        </div>
      </section>

      {/* Quick examples (Option A) */}
      <section id="work" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Quick examples</h2>
              <p className="mt-2 text-slate-600">
                A quick preview of what we build. For the full mockups, visit the Work page.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50"
              >
                See full mockups →
              </Link>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                Get a sample for my business
              </a>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-medium text-slate-500">Restaurants</p>
              <p className="mt-2 font-semibold">Menu + WhatsApp ordering</p>
              <p className="mt-2 text-sm text-slate-600">
                Problem: customers ask the same questions daily.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Solution: one clear menu page with prices, location, and order button.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-medium text-slate-500">Shops & boutiques</p>
              <p className="mt-2 font-semibold">Catalog + fast contact</p>
              <p className="mt-2 text-sm text-slate-600">
                Problem: posts get buried and buyers get tired of scrolling.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Solution: a catalog page that shows what’s available and how to buy.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-medium text-slate-500">Service businesses</p>
              <p className="mt-2 font-semibold">Simple booking/contact page</p>
              <p className="mt-2 text-sm text-slate-600">
                Problem: people can’t find details or trust the service quickly.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Solution: clear service info, pricing, and instant WhatsApp contact.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/work"
              className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              View full Work page with mockups →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="process" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">How it works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="1) You show us your business"
              desc="Send your Instagram, TikTok, WhatsApp, or just your location."
              icon={<Icon name="spark" className="size-5 text-slate-900" />}
            />
            <Card
              title="2) We design a mockup first"
              desc="You see the layout before anything is built or paid for."
              icon={<Icon name="paint" className="size-5 text-slate-900" />}
            />
            <Card
              title="3) We build + connect contact"
              desc="Customers can find you, understand you, and reach you easily."
              icon={<Icon name="whatsapp" className="size-5 text-slate-900" />}
            />
          </div>

          <p className="mt-6 text-sm text-slate-600">
            We start simple and improve only when it makes sense for your business.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Who this is for</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold">Good fit</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>Businesses already selling but lacking clear online presence</li>
                <li>Owners who want customers to order or contact easily</li>
                <li>Businesses that want to grow step by step</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-semibold">Not a good fit</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                <li>People looking for complicated systems from day one</li>
                <li>Only social media posting</li>
                <li>Instant or unrealistic promises</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-semibold">Pricing</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <Card
              title="No one-size price"
              desc="Each business is different in size, needs, and stage."
              icon={<Icon name="spark" className="size-5 text-slate-900" />}
            />
            <Card
              title="Mockup first"
              desc="You see what you’re paying for before anything is built."
              icon={<Icon name="paint" className="size-5 text-slate-900" />}
            />
            <Card
              title="Start simple"
              desc="No unnecessary features. Build more only when needed."
              icon={<Icon name="shield" className="size-5 text-slate-900" />}
            />
          </div>

          <p className="mt-6 text-sm text-slate-600">
            We can also help your business get found online over time — without making it complicated.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
            >
              Ask for a simple quote on WhatsApp
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium shadow-sm transition hover:bg-slate-50"
            >
              Email option below
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <LogoMark />
              <p className="mt-2">Simple digital presence for businesses — anywhere in the world.</p>
              <p className="mt-2">We work remotely with businesses across Africa, the US, and beyond.</p>
              <p className="mt-3 text-xs text-slate-500">Practical solutions, not complicated systems.</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-semibold text-slate-900">Contact</p>
              <p className="mt-2">WhatsApp: {WHATSAPP_DISPLAY}</p>
              <p>Email: broadbinbiz@gmail.com</p>
              <a
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Postup Biz</p>
            <p>Remote digital services for growing businesses.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}