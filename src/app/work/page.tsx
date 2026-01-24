// src/app/work/page.tsx
import Link from "next/link";
import Image from "next/image";

const WHATSAPP_LINK =
  "https://wa.me/233208276651?text=Hi%20Postup%20Biz%20👋🏽%0AI%20want%20something%20like%20one%20of%20the%20examples%20on%20your%20work%20page.%0AHere%20is%20my%20business%20page%20or%20location:";

type WorkItem = {
  title: string;
  category: string;
  problem: string;
  solution: string;
  desktopImage?: string;
  mobileImage: string;
};

const workItems: WorkItem[] = [
  {
    title: "Polkapot Restaurant",
    category: "Restaurant",
    problem: "Customers rely on Instagram and calls to ask the same questions every day.",
    solution: "A simple menu page with prices, location, and WhatsApp ordering.",
    desktopImage: "/work/polkapot-desktop.png",
    mobileImage: "/work/polkapot-mobile.png",
  },
  {
    title: "Unique Wears",
    category: "Heels & Fashion",
    problem: "Buyers struggle to see prices and what’s available quickly.",
    solution: "A clean catalog page with clear prices + WhatsApp ordering.",
    desktopImage: "/work/unique-wears-desktop.png",
    mobileImage: "/work/unique-wears-mobile.png",
  },
  {
    title: "Lina’s Perfection",
    category: "Boutique",
    problem: "Social posts get buried, customers ask for details repeatedly.",
    solution: "One clear page for items, prices, and instant WhatsApp contact.",
    desktopImage: "/work/linas-desktop.png",
    mobileImage: "/work/linas-mobile.png",
  },
];

function WorkShowcase({
  desktopSrc,
  mobileSrc,
  title,
}: {
  desktopSrc?: string;
  mobileSrc: string;
  title: string;
}) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-4 md:p-6">
      {/* Desktop: main */}
      {desktopSrc ? (
        <div className="relative h-[240px] md:h-[340px]">
          <Image
            key={desktopSrc}
            src={desktopSrc}
            alt={`${title} desktop mockup`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={false}
          />
        </div>
      ) : (
        <div className="h-[200px] md:h-[280px]" />
      )}

      {/* Mobile: overlay */}
      <div className="absolute right-4 bottom-4 md:right-6 md:bottom-6">
        <div className="relative h-[240px] w-[140px] md:h-[290px] md:w-[170px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <Image
            key={mobileSrc}
            src={mobileSrc}
            alt={`${title} mobile mockup`}
            fill
            className="object-contain p-1"
            sizes="170px"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="font-semibold tracking-tight">
            Postup Biz
          </Link>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            Chat on WhatsApp
          </a>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-3xl">
          <p className="text-xs font-medium tracking-wide text-slate-500">PORTFOLIO</p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Work examples</h1>
          <p className="mt-4 text-slate-600">
            Simple, clear pages that help customers understand a business fast — and order via WhatsApp.
            Each business gets a custom look, but the goal stays the same: clarity → action.
          </p>
        </div>
      </section>

      {/* Work list */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-8">
          {workItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_1.35fr] md:items-center">
                {/* Text */}
                <div>
                  <p className="text-xs font-medium text-slate-500">{item.category}</p>
                  <h3 className="mt-2 text-xl font-semibold md:text-2xl">{item.title}</h3>

                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <p>
                      <span className="font-medium text-slate-900">Problem:</span> {item.problem}
                    </p>
                    <p>
                      <span className="font-medium text-slate-900">Solution:</span> {item.solution}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
                    >
                      Chat on WhatsApp
                    </a>

                    <Link
                      href="/"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>

                {/* Showcase */}
                <div className="w-full">
                  <WorkShowcase
                    title={item.title}
                    desktopSrc={item.desktopImage}
                    mobileSrc={item.mobileImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 className="text-2xl font-semibold">Want this for your business?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Send your business page (or location) and we’ll recommend the simplest setup that makes customers
            buy faster — without changing how you already run things.
          </p>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Postup Biz</p>
          <p className="mt-1">Remote digital services for growing businesses.</p>
        </div>
      </footer>
    </main>
  );
}