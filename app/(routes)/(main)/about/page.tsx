import AboutPage from "@/components/about/about-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Earthycrafts",
  description: "Learn about Earthycrafts, our story, and our passion for creating beautiful handmade crafts and home decor.",
  alternates: {
    canonical: "https://earthycrafts.com/about",
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
    title: "About Us - Earthycrafts",
    description: "Learn about Earthycrafts, our story, and our passion for creating beautiful handmade crafts.",
    url: "https://earthycrafts.com/about",
    siteName: "Earthycrafts",
    type: "website",
  },
};

export default function About() {
  return <AboutPage />;
}
