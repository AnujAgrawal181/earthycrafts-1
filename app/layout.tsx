import type { Metadata } from "next";
import "./globals.css";
import TopLoader from "@/components/loaders/top-loader";
import { Suspense } from "react";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com"),
  title: "Earthycrafts",
  description: "Handmade with love.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Earthycrafts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const landscapeVideo =
    "https://bseuburnlk.ufs.sh/f/qq9xtZ1seAvycvd2SwJuyfq493Yi7VxRAZmMlNvjh6CD5LP8";
  const portraitVideo =
    "https://bseuburnlk.ufs.sh/f/qq9xtZ1seAvyvnez94u9dIKFSu3x2U5kXC7s6GO4jaWgZEqT";

  return (
    <html lang="en" data-theme="light">
      <head>
        <link
          rel="preload"
          as="video"
          href={landscapeVideo}
          type="video/webm"
        />
        <link rel="preload" as="video" href={portraitVideo} type="video/webm" />
      </head>
      <body className={`font-helvetica antialiased bg-dutchWhite`}>
        <Suspense fallback={<div>Loading...</div>}>
          <TopLoader />
        </Suspense>
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-8ZLD7YGKHN"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8ZLD7YGKHN', { page_path: window.location.pathname });
            `,
          }}
        />
      </body>
    </html>
  );
}
