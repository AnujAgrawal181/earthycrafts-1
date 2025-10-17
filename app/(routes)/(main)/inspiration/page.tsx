import InspirationPage from "@/components/inspiration/inspiration-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspiration - Earthycrafts",
  description: "Get inspired by our collection of handmade crafts and creative ideas for your home.",
  alternates: {
    canonical: "https://earthycrafts.com/inspiration",
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
    title: "Inspiration - Earthycrafts",
    description: "Get inspired by our collection of handmade crafts.",
    url: "https://earthycrafts.com/inspiration",
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function Inspiration() {
  return <InspirationPage />;
}
