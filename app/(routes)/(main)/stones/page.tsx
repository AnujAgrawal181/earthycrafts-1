import StonesPage from "@/components/inspiration/stones-page";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://earthycrafts.com";

export const metadata: Metadata = {
  title: "Stones & Crystals - Earthycrafts",
  description: "Explore our collection of natural stones and crystals used in our handmade crafts.",
  alternates: {
    canonical: `${baseUrl}/stones`,
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
    title: "Stones & Crystals - Earthycrafts",
    description: "Explore our collection of natural stones and crystals.",
    url: `${baseUrl}/stones`,
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function Stones() {
  return <StonesPage />;
}
