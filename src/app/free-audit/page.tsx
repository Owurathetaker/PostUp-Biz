// src/app/free-audit/page.tsx
import Link from "next/link";
import FreeAuditForm from "@/components/FreeAuditForm";
 
export const metadata = {
  title: "Free Audit — PostUp Biz",
  description:
    "Get a free 3-point online presence audit: clarity, SEO basics, and a growth opportunity tailored to your business.",
};
 
export default function FreeAuditPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            PostUp Biz
          </Link>
 
          <Link
            href="/"
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Back to site
          </Link>
        </div>
      </header>
 
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-100 via-emerald-100 to-sky-100 blur-3xl" />
          <div className="absolute -bottom-40 right-[-10rem] h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        </div>
 
        <div className="mx-auto max-w-3xl px-4 py-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="size-2 rounded-full bg-emerald-500" />
            Free 3-point audit
          </div>
 
          <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
            Get a free audit of your online presence.
          </h1>
 
          <p className="mt-3 text-slate-700">
            Send your business details and we’ll reply with a clear, practical
            breakdown: what to fix, what to keep, and the fastest next step to
            get more customers.
          </p>
 
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Send your details</h2>
            <p className="mt-1 text-sm text-slate-600">
              This takes 60 seconds. We’ll respond with your audit.
            </p>
 
            <div className="mt-6">
              <FreeAuditForm />
            </div>
 
            <p className="mt-4 text-xs text-slate-500">
              Tip: If you already have Instagram/TikTok, paste the link. If not,
              just describe what you sell + your location.
            </p>
          </div>
 
          <p className="mt-8 text-xs text-slate-500">
            By submitting, you agree PostUp Biz can use your links only to
            review your presence for this audit (not public posting).
          </p>
        </div>
      </section>
    </main>
  );
}