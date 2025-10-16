import StonesPage from "@/components/inspiration/stones-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stones & Crystals - Earthycrafts",
  description: "Explore our collection of natural stones and crystals used in our handmade crafts.",
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
    url: "https://earthycrafts.com/stones",
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function Stones() {
  return <StonesPage />;
}
