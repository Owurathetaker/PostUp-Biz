"use client";
 
import type { AnchorHTMLAttributes, ReactNode } from "react";
 
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventLabel: string; // e.g. "header_get_started", "hero_message_us", etc
  eventValue?: number;
  children: ReactNode;
};
 
export default function WhatsAppLink({
  eventLabel,
  eventValue = 1,
  children,
  onClick,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        try {
          if (typeof window !== "undefined") {
            // @ts-ignore
            window.gtag?.("event", "whatsapp_click", {
              event_category: "engagement",
              event_label: eventLabel,
              value: eventValue,
            });
          }
        } catch {}
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}