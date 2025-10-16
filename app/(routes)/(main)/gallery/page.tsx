import GalleryPage from "@/components/inspiration/gallery-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Earthycrafts",
  description: "Browse our gallery of beautiful handmade crafts, home decor, and artisanal products.",
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
    url: "https://earthycrafts.com/gallery",
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function Gallery() {
  return <GalleryPage />;
}
