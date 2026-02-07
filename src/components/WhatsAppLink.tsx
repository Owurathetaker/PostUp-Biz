"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventLabel: string; // e.g. "header_whatsapp" or "footer_whatsapp"
  children: ReactNode;
};

export default function WhatsAppLink({ eventLabel, children, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        try {
          // GA4 gtag click event (works after your gtag init in layout.tsx)
          // @ts-ignore
          window.gtag?.("event", "whatsapp_click", {
            event_category: "engagement",
            event_label: eventLabel,
          });
        } catch {}
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}