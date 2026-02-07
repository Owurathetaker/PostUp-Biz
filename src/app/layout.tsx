import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Postup Biz — Simple online presence for businesses",
    template: "%s | Postup Biz",
  },
  description:
    "We help businesses get online in simple, practical ways — clear pages, WhatsApp ordering, location, and easy customer contact. Start small, grow only when it makes sense.",

  metadataBase: new URL("https://post-up-biz.vercel.app/"),

  openGraph: {
    title: "Postup Biz",
    description:
      "Simple online presence for businesses. Clear pages, prices, location, and WhatsApp ordering — without complexity.",
    url: "https://YOUR_VERCEL_URL.vercel.app",
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
      <meta name="google-site-verification" content="GiI6OdwjfEPoB76qokvjntmo1aFurxreReCVIgKqRwo" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}