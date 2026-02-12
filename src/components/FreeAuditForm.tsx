"use client";
 
import { useCallback } from "react";
 
const WHATSAPP_BASE = "https://wa.me/233208276651";
 
export default function FreeAuditForm() {
  const track = useCallback((eventLabel: string) => {
    try {
      // @ts-ignore
      window.gtag?.("event", "free_audit_submit", {
        event_category: "lead",
        event_label: eventLabel,
      });
    } catch {}
  }, []);
 
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    const fd = new FormData(e.currentTarget);
 
    const businessName = String(fd.get("businessName") || "").trim();
    const location = String(fd.get("location") || "").trim();
    const social = String(fd.get("social") || "").trim();
    const website = String(fd.get("website") || "").trim();
    const offer = String(fd.get("offer") || "").trim();
 
    const msg = [
      "Hi PostUp Biz 👋🏽",
      "I want the free 3-point audit.",
      "",
      `Business name: ${businessName || "-"}`,
      `Location: ${location || "-"}`,
      `Social link: ${social || "-"}`,
      `Website (if any): ${website || "-"}`,
      `What I sell / offer: ${offer || "-"}`,
    ].join("\n");
 
    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
 
    track("free_audit_page");
    window.open(url, "_blank", "noopener,noreferrer");
  }, [track]);
 
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-800">
            Business name
          </span>
          <input
            name="businessName"
            required
            className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
            placeholder="e.g. Nana K Clothing"
          />
        </label>
 
        <label className="grid gap-1">
          <span className="text-sm font-medium text-slate-800">Location</span>
          <input
            name="location"
            required
            className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
            placeholder="City / area"
          />
        </label>
      </div>
 
      <label className="grid gap-1">
        <span className="text-sm font-medium text-slate-800">
          Instagram / TikTok / Facebook link
        </span>
        <input
          name="social"
          className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
          placeholder="Paste your best link"
        />
      </label>
 
      <label className="grid gap-1">
        <span className="text-sm font-medium text-slate-800">
          Website link (optional)
        </span>
        <input
          name="website"
          className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-slate-400"
          placeholder="If you already have one"
        />
      </label>
 
      <label className="grid gap-1">
        <span className="text-sm font-medium text-slate-800">
          What do you sell / offer?
        </span>
        <textarea
          name="offer"
          required
          rows={4}
          className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none transition focus:border-slate-400"
          placeholder="Quick description (products/services + price range if you want)"
        />
      </label>
 
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
      >
        Send via WhatsApp
      </button>
 
      <p className="text-xs text-slate-500">
        This opens WhatsApp with your details prefilled.
      </p>
    </form>
  );
}