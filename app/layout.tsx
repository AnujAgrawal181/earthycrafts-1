import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import TopLoader from "@/components/loaders/top-loader";
import { Suspense } from "react";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Earthycrafts",
  description: "Handmade with love.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Earthycrafts" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <TopLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
