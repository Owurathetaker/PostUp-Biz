"use client";
 
import type { AnchorHTMLAttributes, ReactNode } from "react";
 
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string; // e.g. "free_audit_click"
  eventLabel: string; // e.g. "free_audit_section"
  children: ReactNode;
};
 
export default function TrackedLink({
  eventName,
  eventLabel,
  children,
  onClick,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        try {
          // @ts-ignore
          window.gtag?.("event", eventName, {
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