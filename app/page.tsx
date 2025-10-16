import Loader from "@/components/loaders/loader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Earthycrafts - Handmade Crafts with Love",
  description: "Discover unique handmade crafts, home decor, and artisanal products at Earthycrafts. Each piece is crafted with love and care.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Earthycrafts - Handmade Crafts with Love",
    description: "Discover unique handmade crafts, home decor, and artisanal products at Earthycrafts.",
    url: "https://earthycrafts.com",
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function Home() {
  return <Loader />;
}
