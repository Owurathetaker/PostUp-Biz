import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://post-up-biz.vercel.app";
const GA_ID = "G-C7E69Y2JKM";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Postup Biz — Digital presence, SEO & growth systems",
    template: "%s | Postup Biz",
  },

  description:
    "We help businesses build clarity, visibility, and growth systems — from clean digital presence to SEO foundations and paid growth channels.",

  verification: {
    google: "GiI6OdwjfEPoB76qokvjntmo1aFurxreReCVIgKqRwo",
  },

  openGraph: {
    title: "Postup Biz",
    description:
      "Digital presence, SEO foundations, and growth systems for modern businesses.",
    url: SITE_URL,
    siteName: "Postup Biz",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Postup Biz — Digital presence & growth systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Postup Biz",
    description:
      "Digital presence, SEO foundations, and growth systems for modern businesses.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', '${GA_ID}', {
              debug_mode: true
            });
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}