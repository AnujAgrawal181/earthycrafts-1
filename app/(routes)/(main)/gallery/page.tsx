import GalleryPage from "@/components/inspiration/gallery-page";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

export const metadata: Metadata = {
  title: "Gallery - Earthycrafts",
  description: "Browse our gallery of beautiful handmade crafts, home decor, and artisanal products.",
  alternates: {
    canonical: `${baseUrl}/gallery`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Gallery - Earthycrafts",
    description: "Browse our gallery of beautiful handmade crafts and home decor.",
    url: `${baseUrl}/gallery`,
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function Gallery() {
  return <GalleryPage />;
}
