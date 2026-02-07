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

const SITE_URL = "https://post-up-biz.vercel.app"; // ✅ replace with your real Vercel URL if different
const GA_ID = "G-C7E69Y2JKM"; // ✅ your measurement ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Postup Biz — Simple online presence for businesses",
    template: "%s | Postup Biz",
  },
  description:
    "We help businesses get online in simple, practical ways — clear pages, WhatsApp ordering, location, and easy customer contact. Start small, grow only when it makes sense.",

  verification: {
    google: "GiI6OdwjfEPoB76qokvjntmo1aFurxreReCVIgKqRwo",
  },

  openGraph: {
    title: "Postup Biz",
    description:
      "Simple online presence for businesses. Clear pages, prices, location, and WhatsApp ordering — without complexity.",
    url: SITE_URL,
    siteName: "Postup Biz",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Postup Biz — Simple online presence for businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Postup Biz",
    description:
      "We help businesses get online simply — pages, WhatsApp ordering, and clarity that converts.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}